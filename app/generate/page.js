"use client";

import Image from "next/image";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const Generate = () => {
  const searchParams = useSearchParams();

  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i === index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      handle: handle,
      links: links,
      pic: pic,
      desc: desc,
    });

    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions);
    const res = await r.json();

    if (res.success) {
      toast.success(res.message);
      sethandle("");
      setLinks([{ link: "", linktext: "" }]);
      setpic("");
      setdesc("");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="col1 flex flex-col justify-center items-center pt-10">
        <ToastContainer />
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Create Your Linktree
          </h1>
          <div className="mt-4 flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Step 1: Claim your Handle
            </h3>
            <input
              type="text"
              placeholder="Choose your handle"
              value={handle}
              onChange={(e) => sethandle(e.target.value)}
              className="p-3 focus:outline-gray-800 border-2 border-transparent hover:border-gray-200 bg-gray-100 rounded-lg"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Step 2: Add Links
            </h3>
            {links &&
              links.map((item, index) => {
                return (
                  <div key={index} className="mx-4 flex">
                    <input
                      type="text"
                      placeholder="Enter Link Text"
                      value={item.linktext || ""}
                      onChange={(e) =>
                        handleChange(index, item.link, e.target.value)
                      }
                      className="p-3 focus:outline-gray-800 border-2 border-transparent hover:border-gray-200 bg-gray-100 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Enter Url"
                      value={item.link || ""}
                      onChange={(e) =>
                        handleChange(index, e.target.value, item.linktext)
                      }
                      className="p-3 focus:outline-gray-800 border-2 border-transparent hover:border-gray-200 bg-gray-100 rounded-lg mr-2"
                    />
                  </div>
                );
              })}
            <button
              className="bg-gray-800 hover:bg-gray-700 p-3 px-5 text-white rounded-full font-semibold"
              onClick={() => addLink()}
            >
              Add Link
            </button>
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Step 3: Add Picture and Description
            </h3>
            <input
              type="text"
              placeholder="Enter Link to your Picture"
              value={pic}
              onChange={(e) => setpic(e.target.value)}
              className="p-3 focus:outline-gray-800 border-2 border-transparent hover:border-gray-200 bg-gray-100 rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter Description (optional)"
              value={desc || ""}
              onChange={(e) => setdesc(e.target.value)}
              className="p-3 focus:outline-gray-800 border-2 border-transparent hover:border-gray-200 bg-gray-100 rounded-lg"
            />
            <button
              disabled={pic == "" || handle == "" || links[0].linktext == ""}
              className="disabled:bg-slate-600 bg-gray-800 hover:bg-gray-700 p-3 px-5 text-white rounded-full font-semibold"
              onClick={() => submitLinks()}
            >
              Create Your Linktree
            </button>
          </div>
        </div>
      </div>

      <div className="col2 h-screen w-full">
        <Image
          src="/generate.jpg"
          width={800}
          height={400}
          alt="Generate Your Links"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Generate;
