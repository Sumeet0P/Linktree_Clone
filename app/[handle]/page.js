import Image from "next/image";
import Link from "next/link";
import clientPromise from "@/lib.mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle;

  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");

  const item = await collection.findOne({ handle });

  if (!item) {
    return notFound();
  }
    // const data = {
    //   _id: {
    //     $oid: "68384b3a35fee12b84d00168",
    //   },
    //   handle: "Sumeet",
    //   links: [
    //     {
    //       link: "https://www.instagram.com/_.sumeet._c/",
    //       linktext: "Instagram",
    //     },
    //     {
    //       link: "https://www.facebook.com/_.sumeet._c/",
    //       linktext: "Facebook",
    //     },
    //   ],
    //   pic: "https://avatars.githubusercontent.com/u/197079344?s=400&u=7edbb0dd31701405b0b1eafccd6b6a300a8822aa&v=4",
    // };
  return (
    <div className="bg-gray-950 h-screen text-white flex justify-center items-start py-12">
      {item && (
        <div className="photo flex flex-col items-center justify-center">
          <Image
            alt="Profile Picture"
            src={item.pic}
            width={100}
            height={100}
            className="rounded-full"
          />
          <span className="text-xl font-semibold my-2">@{item.handle}</span>
          <span className="font-semibold w-2xs my-3">{item.desc}</span>
          <div className="links shadow-neutral-200">
            {item.links.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-gray-100 text-black py-3 px-4 my-2 rounded-lg w-[25rem] justify-center items-center flex flex-col">
                    {item.linktext}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
