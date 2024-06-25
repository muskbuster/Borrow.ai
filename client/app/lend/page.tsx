import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Input,
} from "@nextui-org/react";
export default function Lend() {
  return (
    <>
      <div className="flex mx-auto justify-center gap-8 items-center w-full h-[100vh] border-4 border-yellow-600">
        <Card className="w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Lend Card</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-y-4 px-4 py-8">
            <Input
              type="number"
              label="APY"
              placeholder="0.00"
              labelPlacement="outside"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />
              <Input
              type="number"
              label="Collateral <> Liquidity"
              placeholder="0.00"
              labelPlacement="outside"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />
              <Input
              type="number"
              label="Risk"
              placeholder="0.00"
              labelPlacement="outside"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />
              <Input
              type="number"
              label="Pool Pair"
              placeholder="0.00"
              labelPlacement="outside"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />
          </CardBody>
          <Divider />
          <CardFooter>
            <Button color="success">Fetch Quote</Button>
          </CardFooter>
        </Card>
        <Card className="w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Fetching your Borrow Quotes...</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-y-4 px-4 py-8">
            <div className="flex flex-wrap gap-4 items-center">
              <Button color="default">Pool 1</Button>
            
              <Button color="success">Pool 2</Button>
              <Button color="warning">Pool 3</Button>
              <Button color="danger">Pool 4</Button>
            </div>
          </CardBody>
          <Divider />
        </Card>
      </div>
    </>
  );
}
