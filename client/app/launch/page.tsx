"use client";
import { ConnectButton } from "thirdweb/react";
import { Tabs, Tab, Card, Input, CardBody, Button } from "@nextui-org/react";

import { prepareContractCall, readContract, resolveMethod } from "thirdweb";
import TOGCard from "@/components/TOGCard";
import { client } from "../client";
import UserRegisterationButton from "@/components/UserRegisterationButton";
import UserLoginButton from "@/components/LoginButton";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
type Props = {};

function Feed({}: Props) {
  return (
    <div className="w-full">
      <Toaster />
      <div className="flex w-full items-center justify-between gap-12 px-4 py-2">
        <button className="p-3 bg-black text-white text-2xl rounded-lg font-bold uppercase rounded-lg cursor-pointer">
          <a href="/">Launch Borrow.Ai</a>
        </button>
        <div>
          <ConnectButton client={client} />
        </div>
      </div>
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="flex w-1/3 flex-col">
          <Tabs key="lend" aria-label="Dynamic tabs" color="success" radius="full">
            <Tab key="lend" title="Lend">
              <Card>
                <CardBody className="px-8 py-10 gap-y-4">
                  <h1 className="font-bold text-xl">
                    Lend your money to the borrowers and earn interest
                  </h1>
                  <Input
                    autoFocus
                    label="Lent Token Address"
                    placeholder="0xabvcd123445..."
                    variant="bordered"
                    type="text"
                  />
                 
                  <Input
                    autoFocus
                    label="Collateral Token Address" 
                    placeholder="0x5677788..."
                    variant="bordered"
                    type="password"
                  />

                  <Button color="warning" variant="faded">
                    Go
                  </Button>
                </CardBody>
              </Card>
            </Tab>

            <Tab key="borrow" title="Borrow">
              <Card>
                <CardBody>
                <CardBody className="px-8 py-10 gap-y-4">
                  <h1 className="font-bold text-xl">
                    Borrow your money to the Lenders and earn interest
                  </h1>
                  <Input
                    autoFocus
                    label="Borrow Token Address"
                    placeholder="0xabvcd123445..."
                    variant="bordered"
                    type="text"
                  />
                 
                  <Input
                    autoFocus
                    label="Collateral Token Address" 
                    placeholder="0x5677788..."
                    variant="bordered"
                    type="password"
                  />

                  <Button color="warning" variant="faded">
                    Go
                  </Button>
                </CardBody>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Feed;
