import WedgetNews from "@/components/WedgetNews";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from 'framer-motion';

import { Heart } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

function Friends() {
  const [type, settype] = useState("req");
  const demoGroups = [
    {
      id: 1,
      avatar: "https://example.com/avatars/group1.jpg",
      name: " Adventurers alex",
      userName: "@Adventurersalex",
    },
    {
      id: 2,
      avatar: "https://example.com/avatars/group2.jpg",
      name: " Lovers xdr",
      userName: "@Loversxdr",
    },
    {
      id: 3,
      avatar: "https://example.com/avatars/group3.jpg",
      name: "Tech med",
      userName: "@Techmed",
    },
    {
      id: 4,
      avatar: "https://example.com/avatars/group4.jpg",
      name: "Fitness mooedo",
      userName: "@Fitnessmooedo",
    },
    {
      id: 5,
      avatar: "https://example.com/avatars/group5.jpg",
      name: "Culy tony",
      userName: "@Culytony",
    },
    {
      id: 6,
      avatar: "https://example.com/avatars/group6.jpg",
      name: " alex prixy",
      userName: "@Aprixyersalex",
    },

    {
      id: 7,
      avatar: "https://example.com/avatars/group7.jpg",
      name: "Traveler mhx",
      userName: "@Travelermhx",
    },
    {
      id: 12,
      avatar: "https://example.com/avatars/group1.jpg",
      name: " Adventurers alex",
      userName: "@Adventurersalex",
    },
    {
      id: 22,
      avatar: "https://example.com/avatars/group2.jpg",
      name: " Lovers xdr",
      userName: "@Loversxdr",
    },
    {
      id: 23,
      avatar: "https://example.com/avatars/group3.jpg",
      name: "Tech med",
      userName: "@Techmed",
    },
    {
      id: 24,
      avatar: "https://example.com/avatars/group4.jpg",
      name: "Fitness mooedo",
      userName: "@Fitnessmooedo",
    },
    {
      id: 25,
      avatar: "https://example.com/avatars/group5.jpg",
      name: "Culy tony",
      userName: "@Culytony",
    },
    {
      id: 26,
      avatar: "https://example.com/avatars/group6.jpg",
      name: " alex prixy",
      userName: "@Aprixyersalex",
    },

    {
      id: 27,
      avatar: "https://example.com/avatars/group7.jpg",
      name: "Traveler mhx",
      userName: "@Travelermhx",
    },
  ];

  const showbar = useSelector((state) => state.globalReducer.showSideBar);
  return (
    <div className="mt-20 min-h-screen w-full flex items-center ">
      <div
        className={` ${
          showbar ? "translate-x-0 " : "-translate-x-full "
        } duration-700 py-6  bg-white fit-content md:translate-x-0 xs:left-0 xs:top-0  fixed md:-bottom-20 h-full z-30 `}
      >
        <WedgetNews />
      </div>

      <div className="mx-auto w-8/12 " >
        <div className="text-sm capitalize text-white flex gap-4 justify-center w-full">
          <button className="bg-primary px-3 py-2 rounded-md" onClick={()=>{settype('friends')}}>your friends</button>
          <button  className="bg-black px-3 py-2 rounded-md"  onClick={()=>{settype('req')}}>friends request</button>

        </div>
        {type === "req" && (
              <motion.div 
              key={type}  // Using key to ensure a re-render for animation
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 2 }}
           
            >
            {
              <div className="grid grid-cols-1 sm:grid-cols-2 py-1 mx-auto  md:grid-cols-2 gap-3 ">
                {demoGroups.map((item, index) => (
                  <Card
                    className="relative text-center gap-2 py-2 flex flex-col justify-between items-center"
                    key={index}
                  >
                    <dev className="flex w-full px-4 py-2 justify-between items-center">
                      <img
                        className=" rounded-full w-20 h-20"
                        src="https://picsum.photos/200"
                        alt=""
                      />
                      <div>
                        <CardTitle className="text-sm">{item.name}</CardTitle>
                        <CardTitle className="text-sm text-gray-400">
                          {item.userName}
                        </CardTitle>
                      </div>
                    </dev>

                    <div className="flex justify-between gap-1">
                      <Button className="text-sm capitalize gap-4 bg-red flex  w-1/2 bg-black  ">
                        accept friend 
                      </Button>
                      <Button className="text-sm capitalize gap-4 bg-red flex w-1/2 bg-black  ">
                        rejecet 
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            }

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </motion.div >
        )}




        {type === "friends" && (
               <motion.div 
               key={type}  // Using key to ensure a re-render for animation
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ duration: 0.9 }}
            
             >
            {
              <div className="grid grid-cols-1 sm:grid-cols-2 py-1 mx-auto  md:grid-cols-2 gap-3 ">
                {demoGroups.map((item, index) => (
                  <Card
                    className="relative text-center gap-2 py-2 flex flex-col justify-between items-center"
                    key={index}
                  >
                    <dev className="flex w-full px-4 py-2 justify-between items-center">
                      <img
                        className=" rounded-full w-20 h-20"
                        src="https://picsum.photos/200"
                        alt=""
                      />
                      <div>
                        <CardTitle className="text-sm">{item.name}</CardTitle>
                        <CardTitle className="text-sm text-gray-400">
                          {item.userName}
                        </CardTitle>
                      </div>
                    </dev>

                    <div className="flex justify-between gap-1">
                      <Button className="text-sm capitalize gap-4 bg-red flex  w-1/2 bg-black  ">
                        add friend <Heart size={13} />
                      </Button>
                      <Button className="text-sm capitalize gap-4 bg-red flex w-1/2 bg-black  ">
                        follow <Heart size={13} />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            }

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </motion.div >
        )}
      </div>
    </div>
  );
}

export default Friends;
