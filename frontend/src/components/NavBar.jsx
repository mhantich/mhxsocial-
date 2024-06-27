import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { useDispatch, } from "react-redux";
import { setshowSideBar } from "@/store";

function NavBar() {
  const navigator = useNavigate()
  const [show,setshow]=useState(false)

  const dispatch = useDispatch()

  return (
    <div className="flex p-2 justify-between z-10 gap-3 bg-white drop-shadow py-4  min-w-full items-center fixed top-0">
      <div onClick={()=>{navigator( `/`)}} className=" flex items-center cursor-pointer">
        <img src="sitepoint.png" alt="" className="w-8 h-8" />
        <h1 className="font-bold text-primary">MhxSocial</h1>
      </div>


      <div className="flex   px-4">
      <Input type='text' placeholder='Search...'/>
      </div>
      <AlignJustify onClick={()=>{dispatch(setshowSideBar())}} className="md:hidden" size={25} color="#000000" />
      <div className=" ">
      
      <div className="relative ">
              <div>
                <button 
                 type="button" className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Avatar onClick={()=>{
                  setshow(!show)
                }}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
                </button>
              </div>

  
              <div style={{display:`${show ?'block':'none'}`}} className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >

                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-0">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-1">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">Sign out</a>
              </div>
            </div>
          </div>
        </div>
  

  );
}

export default NavBar;




