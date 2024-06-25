import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { sepolia, arbitrum, avalanche } from "thirdweb/chains";

const LetterifyContractAddress = process.env
  .NEXT_PUBLIC_CONTRACT_ADDRESS as string;

export const contract = getContract({
  client: client,
  chain: [sepolia, arbitrum, avalanche],
  address: LetterifyContractAddress,
});
