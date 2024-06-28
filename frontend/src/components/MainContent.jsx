// md:w-2/4
import { Earth, RssIcon, Users } from "lucide-react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import WedgetRight from "./WedgetRight";
import { useState } from "react";

function MainContent() {
  const [active, setactive] = useState("all");

  return (
    <div className=" flex  gap-1 flex-wrap    ">


 
      <div className=" xs:w-full  md:w-1/2 mt-20  mx-auto ">
       <CreatePost /> 
      <div className="flex p-2 justify-center items-center gap-8 w-full">
          <div
            className={`${
              active === "all" ? "bg-primary" : "bg-black"
            }  rounded-md  text-white  `}
          >
            <button
              onClick={() => {
                setactive("all");
              }}
              className="flex capitalize text-sm gap-2  items-center px-4 py-2  "
            >
              <p>all</p>
              <Earth size={16} />
            </button>
          </div>
          <div
            className={`${
              active === "followes" ? "bg-primary" : "bg-black"
            }  rounded-md  text-white  `}
          >
            <button
              onClick={() => {
                setactive("followes");
              }}
              className="flex capitalize  text-sm gap-2  items-center px-4 py-2  "
            >
              <p>followes</p>
              <RssIcon size={16} />
            </button>
          </div>
          <div
            className={`${
              active === "friends" ? "bg-primary" : "bg-black"
            }  rounded-md  text-white  `}
          >
            <button
              onClick={() => {
                setactive("friends");
              }}
              className="flex capitalize text-sm gap-2  items-center px-4 py-2  "
            >
              <p>friends</p>
              <Users size={16} />
            </button>
          </div>
        </div>
        <Posts /> 
      </div>
 
      <WedgetRight /> 
    </div>
  );
}

export default MainContent;
