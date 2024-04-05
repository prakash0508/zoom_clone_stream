import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaPlus, FaLink } from "react-icons/fa";

const NewMeetingModal = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>New Meetings</PopoverTrigger>
        <PopoverContent>
          <div className="">
            <div className="my-3 flex cursor-pointer">
              {" "}
              <span className="mr-5">
                <FaPlus className=" text-gray-400 mt-1" />
              </span>{" "}
              Instant Meeting
            </div>
            <hr />
            <div className="my-3 flex cursor-pointer">
              {" "}
              <span className="mr-5">
                <FaLink className=" text-gray-400 mt-1" />
              </span>{" "}
              Meeting For Later
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NewMeetingModal;
