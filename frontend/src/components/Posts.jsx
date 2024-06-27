import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Check, Heart, ImageDown, PenLine, Send, ThumbsUp } from "lucide-react";
import { Input } from "@/components/ui/input";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Posts() {
  const [edit, setEdit] = useState(false);
  console.log(edit);
  const handleEdit = () => {
    setEdit(!edit);
  };
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const navigator = useNavigate()
  return (
    <> 
    <div className="container  p-5 mt-4 bg-white rounded-2xl">
      <div className="md:px-11 h-full  py-4">
        <div className="flex justify-between">
          <Avatar onClick={()=>{navigator( `/profile/1`)}}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {edit === true ? (
            <Check size={16} onClick={handleEdit} />
          ) : (
            <PenLine onClick={handleEdit} size={16} />
          )}
        </div>
        {edit ? (
          <form className="flex flex-1 md:container md:gap-4  items-center justify-between">
            <div className="flex justify-between flex-1 bg-dark items-center  bg-gray-100 rounded-3xl md:px-1  ">
              <input
                type="text"
                placeholder="Quoi de neuf ?"
                className="flex-1 p-2  rounded text-black  bg-transparent outline-none border-none"
              />
              <Input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
              />
                    <div onClick={handleImageClick} className="cursor-pointer">
          <ImageDown /> {/* Replace this with your actual ImageDown component */}
        </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-3xl text-white bg-red-500 "
            >
              Publier
            </button>
          </form>
        ) : (
          <div className="flex  flex-col  ">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                omnis, quae laudantium totam nemo ea ratione sint voluptates
                accusamus non repellendus facilis voluptatum tenetur est soluta
                ullam amet error numquam.
              </p>
            </div>
            <div className="">
              <img src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" className="object-fill h-full w-full " />
            </div>
          </div>
        )}
        <div className="flex py-4 px-1 justify-start gap-5 border-b-2">
          <div className="flex justify-start gap-1">
            <Heart size={16} strokeWidth={1.25} /> <span className="text-primary  text-sm font-semibold">7</span>
          </div>
          <div className="flex justify-start gap-1">
            <ThumbsUp size={16} strokeWidth={1.25} /> <span className="text-primary text-sm  font-semibold">7</span>
          </div>
        </div>
        <div className="max-h-64 scrollbar-thin  overflow-y-auto scrollbar-thumb-gray-200 scrollbar-track-white">
          <div>
            <div className="flex gap-2 items-center">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="p-4">
                <div className="flex gap-2 items-center">
                  <h6 className="font-semibold capitalize text-base text-primary">
                    name
                  </h6>
                  <p className="text-xs capitalize italic">
                    commented 6min ago
                  </p>
                </div>
                <p className="capitalize  text-sm   ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quia, rerum.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="p-4">
                <div className="flex gap-2 items-center">
                  <h6 className="font-semibold capitalize text-base text-primary">
                    mhantich
                  </h6>
                  <p className="text-xs capitalize italic">
                    commented 6min ago
                  </p>
                </div>
                <p className="capitalize  text-sm  ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quia, rerum.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="p-4">
                <div className="flex gap-2 items-center">
                  <h6 className="font-semibold capitalize text-base text-primary">
                    name
                  </h6>
                  <p className="text-xs capitalize italic">
                    commented 6min ago
                  </p>
                </div>
                <p className="capitalize  text-sm   ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quia, rerum.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="p-4">
                <div className="flex gap-2 items-center">
                  <h6 className="font-semibold capitalize text-base text-primary">
                    mhantich
                  </h6>
                  <p className="text-xs capitalize italic">
                    commented 6min ago
                  </p>
                </div>
                <p className="capitalize  text-sm  ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quia, rerum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex md:container mt-4 px-1 py-2   bg-white  items-center rounded-3xl md:justify-between   ">
        <div className="w-11">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <form className="flex flex-1 md:container md:gap-4  items-center justify-between">
          <div className="flex justify-between flex-1 bg-dark items-center  bg-gray-100 rounded-3xl md:px-1  ">
            <input
              type="text"
              placeholder="Write comment?"
              className="flex-1 p-2  rounded text-black  bg-transparent outline-none border-none"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-3xl text-white bg-red-500 "
          >
            <Send size={16} strokeWidth={1.25} />
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Posts;
