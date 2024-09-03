import React from "react";
import Cartitem from "./Cartitem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/checkout?step=2 ");
  };

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1].map((item) => (
            <Cartitem />
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <hr />

            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>-Rs 3419</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">Rs 4678</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">Rs 1278</span>
              </div>
            </div>

            <Button
            onClick={handleCheckOut}
              variant="contained"
              sx={{
                px: "2rem",
                py: ".7rem",
                bgcolor: "#9155fd",
                mt: "1rem",
              }}
              className="w-full mt-5"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
