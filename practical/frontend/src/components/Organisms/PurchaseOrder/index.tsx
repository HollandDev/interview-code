"use client";

import { LineItem } from "@/components/Molecules/LineItem";
import { LineItemType } from "@/types/purchaseOrder";
import { NextPage } from "next";
import { useMemo, useState } from "react";
import { updateLineItemType } from "./types";

export const PurchaseOrder: NextPage = () => {
  const [lineItems, setLineItems] = useState<LineItemType[]>([]);
  const [taxRate, setTaxRate] = useState<number>(10);

  const updateLineItem: updateLineItemType = (idx, name, incomingValue) => {
    const newLineItems = [...lineItems];
    newLineItems[idx].product = incomingValue;
    setLineItems(newLineItems);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    lineItems.forEach((lineItem) => {
      subtotal += lineItem.price * lineItem.quantity;
    });

    subtotal += subtotal * (taxRate / 100);

    return subtotal;
  };

  const calculateTax = () => {};

  const subtotal = useMemo(() => {
    const subtotal = calculateSubtotal();
    console.log("calculating subtotal", subtotal);
    return subtotal;
  }, []);

  return (
    <div>
      <div>
        {lineItems.length ? (
          lineItems.map((lineItem, index) => {
            return (
              <div key={`line_item_${index}`}>
                <LineItem {...lineItem} updateLineItem={updateLineItem} />
              </div>
            );
          })
        ) : (
          <div>no line items</div>
        )}
      </div>
      <div
        style={{
          marginTop: "48px",
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          marginRight: "0",
          marginLeft: "auto",
        }}
      >
        <div>Tax Rate</div>
        <div>
          <input
            type="number"
            value={taxRate}
            onChange={(e: any) => {
              setTaxRate(e.target.value);
            }}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "48px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginRight: "0",
            marginLeft: "auto",
            display: "flex",
          }}
        >
          <div style={{ marginRight: "16px" }}>
            <b>Subtotal</b>
          </div>
          <div>{subtotal}</div>
        </div>
      </div>

      <div style={{ marginTop: "48px" }}>
        <button
          onClick={() => {
            const newLineItem: LineItemType = {
              id: lineItems.length,
              product: "",
              quantity: 0,
              price: 0,
            };
            setLineItems([...lineItems, newLineItem]);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Line Item
        </button>
      </div>
    </div>
  );
};
