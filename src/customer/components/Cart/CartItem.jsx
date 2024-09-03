import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Cartitem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Title</p>
          <p className="opacity-70">Size: L</p>
          <p className="opacity-70 mt-2">Seller: Brand</p>

          <div className="flex space-x-5 items-center text-gray-900 mt-6">
            <p className="font-semibold">RS. 199</p>
            <p className="opacity-50 line-through">RS. 211</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton color="">
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">1</span>
          <IconButton sx={{color:"rgb(145 85 253)"}}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{color:"rgb(145 85 253)"}}>Remove</Button>
        </div>
      </div>

    </div>
  );
};

export default Cartitem;
