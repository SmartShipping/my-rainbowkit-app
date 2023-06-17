import { BigNumber } from "ethers";
import router from "next/router";
import { useContractReads } from "wagmi";
import SmartShopperABI from "../../src/abi/SmartShopperABI.json";
import { OrderSC } from "../../types/OrderSC";
import { SessionExt } from "../../types/SessionExt";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function Index() {
  // const router = useRouter();
  // const { encryptedOrderId } = router.query;
  // const orderId = decryptData(encryptedOrderId as string);
  // const { data: session }: { data: SessionExt | null } = useSession();

  // const { data } =useContractReads({
  //   contracts: [
  //     {
  //       address: process.env.NEXT_PUBLIC_ORDER_MANAGER_ADDRESS as `0x${string}`,
  //       abi: SmartShopperABI,
  //       functionName: "getOrder",
  //       args: [orderId],
  //     },
  //     {
  //       address: process.env.NEXT_PUBLIC_ORDER_MANAGER_ADDRESS as `0x${string}`,
  //       abi: SmartShopperABI,
  //       functionName: "fees",
  //     },
  //   ],
  //   onSuccess(data: [OrderSC, BigNumber]) {
  //     if (data[0].orderId === "") {
  //       // setCommissions(data[1].toNumber());
  //       // showCheckout.current.hasFetchedSC = true;
  //     } else {
  //       router.push("/my-orders");
  //     }
  //   },
  // });
  return <div>index</div>;
}

export default Index;
