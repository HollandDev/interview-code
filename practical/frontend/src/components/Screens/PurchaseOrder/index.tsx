import { PurchaseOrder } from "@/components/Organisms/PurchaseOrder";
import { NextPage } from "next";

export const PurchaseOrderScreen: NextPage = () => {
  return (
    <div style={{ width: "70%" }}>
      <PurchaseOrder />
    </div>
  );
};
