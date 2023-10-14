import { updateLineItemType } from "@/components/Organisms/PurchaseOrder/types";
import { LineItemType } from "@/types/purchaseOrder";
import { NextPage } from "next";
import React, { ChangeEvent, useState } from "react";

export const LineItem: React.FC<
  LineItemType & { updateLineItem: updateLineItemType }
> = ({ id, product, quantity, price, updateLineItem }) => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        padding: "16px",
        marginBottom: "24px",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="Product"
          onChange={(e: any) => {
            updateLineItem(id, "product", e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Quantity"
          onChange={(e: any) => {
            updateLineItem(id, "quantity", e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Price"
          onChange={(e: any) => {
            updateLineItem(id, "price", e.target.value);
          }}
        />
      </div>
    </div>
  );
};
