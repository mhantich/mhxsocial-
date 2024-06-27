import CreatePost from "@/components/CreatePost";
import Posts from "@/components/Posts";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ImageDown } from "lucide-react";
import { useRef, useState } from "react";

function Profile() {
  const [edit, setEdit] = useState(false);
  console.log(edit);
  const handleEdit = () => {
    setEdit(!edit);
  };
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <div className="h-4/6 md:mt-20  ">
        <div className="md:w-2/4 p-0 container    rounded-2xl">
          <div className="max-h-48 overflow-hidden  w-full ">
            <img className="h-full w-full" src="/space.png" alt="" />
          </div>
          <div className="bg-white relative h-56">
            <div className="absolute -top-5 w-full">
              <div className="  w-full flex items-center justify-between">
                <div className="relative">
                  {edit && (
                    <div
                      onClick={handleImageClick}
                      className="cursor-pointer bg-black z-10 opacity-60 flex items-center justify-center rounded-full  w-28 h-28 absolute  top-50 "
                    >
                      <ImageDown color="white" />{" "}
                      {/* Replace this with your actual ImageDown component */}
                    </div>
                  )}
                  <Avatar className="w-28 h-28  ">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>
                    {!edit && 'CN'}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {edit ? (
                  <div className="flex gap-1 ">
                    {" "}
                    <Button
                      onClick={handleEdit}
                      variant='destructive'
                      className="px-8  rounded-3xl self"
                    >
                      Cancle
                    </Button>{" "}
                    <Button
                      onClick={handleEdit}
                      className="px-8 rounded-3xl self"
                    >
                      Save
                    </Button>{" "}
                  </div>
                ) : (
                  <Button
                    onClick={handleEdit}
                    
                    className="px-8 rounded-3xl self"
                  >
                    Edit
                  </Button>
                )}
              </div>
              <div>
                {edit ? (
                  <div className=" px-2 w-full mt-1 flex-col flex gap-1">
                    <div className="flex justify-center gap-2 items-center">
                      <input
                        type="text"
                        placeholder="Name"
                        style={{width:'40%'}}
                        className="flex-1 p-2   text-black  bg-gray-200 rounded-full outline-none border-none"
                      />
                      <input
                        type="text"
                        style={{width:'40%'}}
                        placeholder="Last Name"
                        className="flex-1 p-2    text-black  bg-gray-200 rounded-full outline-none border-none"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="email"
                      className="flex-1 p-2  w-full   text-black  bg-gray-200 rounded-full outline-none border-none"
                    />

                    <input
                      type="text"
                      placeholder="work"
                      className="flex-1 p-2  w-full  text-black  bg-gray-200 rounded-full outline-none border-none"
                    />
                  </div>
                ) : (
                  <div className="px-1 mt-1">
                    <p className="text-xl font-bold capitalize">
                      Mhantich mohamed
                    </p>
                    <p className="text-xs font-bold capitalize">
                      morocco - agadir
                    </p>
                    <p className="text-xs font-bold capitalize">devloper</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:mx-auto">
      <CreatePost />
      <Posts /> 
      </div>

    </>
  );
}

export default Profile;
