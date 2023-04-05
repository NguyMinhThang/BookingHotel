import React, { useContext } from "react";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import { RoomContext } from "../context/RoomContext";

const BookForm = () => {
  const { handleClick } = useContext(RoomContext);
  return (
    <form className="h-[300px] bg-green-100 w-full lg:h-[70px] ">
      <div className="flex flex-col w-full h-full lg:flex-row ">
        <div className="flex-1 lg:border-r">
          <CheckIn />
        </div>
        <div className="flex-1 lg:border-r">
          <CheckOut />
        </div>
        <div className="flex-1 lg:border-r">
          <AdultsDropdown />
        </div>
        <div className="flex-1 lg:border-r">
          <KidsDropdown />
        </div>
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="btn btn-primary bg-blue-400 hover:bg-blue-300"
        >
          Check now
        </button>
      </div>
    </form>
  );
};

export default BookForm;
