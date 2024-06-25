"use client";
import { ConnectButton, ConnectEmbed, useActiveAccount } from "thirdweb/react";
import { client } from "./client";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";

export default function Home() {
  // const account = useActiveAccount();
  // const router = useRouter();

  return (
    <>
      <div className="relative border z-20 h-[100vh] flex justify-center items-center border-4 border-yellow-400 w-full">
      <button className="p-3 absolute  bg-black z-100 text-2xl font-bold uppercase rounded-lg cursor-pointer">
        <a href="/launch">Launch Borrow.Ai</a>
      </button>
      </div>
      <div className="stars">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <>
              <div key={i} className="star"></div>
            </>
          ))}
      </div>
    </>
  );
}
