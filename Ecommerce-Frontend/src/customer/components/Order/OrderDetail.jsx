import React from "react";
import { AddressCard } from "../AddressCard/AddressCard";
import { OrderTracker } from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const OrderDetail = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7 ">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className="space-y-5">
        {[1,1,1,1].map(item => (
            <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
  
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Men Slim Rise Black Jeans</p>
                  <p className="space-x-5 opacity-50 text-sm font-semibold">
                    <span>ColorL Pink </span> <span>Size: M</span>
                  </p>
                  <p>CSeller: Linaria</p>
                  <p> Rs 1099</p>
                </div>
              </div>
            </Grid>
  
            <Grid item>
                  <Box sx={{color:deepPurple[500]}}>
                      <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2"/>
                      <span>Rate & Review Product</span>
                  </Box>
            </Grid>
  
          </Grid>
        ))}
        
      </Grid>
    </div>
  );
};
