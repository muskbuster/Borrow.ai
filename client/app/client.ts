import { createThirdwebClient } from "thirdweb";
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string;
export const client = createThirdwebClient({
  clientId: "a7e09000d33f3a3741f9a6acc5a9767f",
});
