//icons
import { GoChecklist } from "react-icons/go";
import { LuBadgeCheck } from "react-icons/lu";
import { FaHashtag } from "react-icons/fa";

function CheckOutFactor() {
  return (
    <div className="col-span-3 border-2 border-dashed border-mainBgColor rounded-xl p-5 w-64 h-fit text-center">
      <div className="flex items-center gap-x-1 text-mainBgColor text-lg font-semibold">
        <GoChecklist className="text-xl" />
        Total:
      </div>
      <div className="flex items-center gap-x-1 text-mainBgColor text-lg font-semibold my-3">
        <FaHashtag className="text-xl" />
        Quantity:
      </div>
      <div className="flex items-center gap-x-1 text-mainBgColor text-lg font-semibold">
        <LuBadgeCheck className="text-xl" />
        Status:
      </div>
      <div>
        <button className="bg-mainBgColor text-mainTxtColor w-52 mt-14 rounded-lg py-[0.1rem]">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CheckOutFactor;
