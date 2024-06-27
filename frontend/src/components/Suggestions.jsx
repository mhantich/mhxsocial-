import { CirclePlus,Rss ,  } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"



function Suggestions() {
  return (
                                                                                           
    <div className="py-4">
              <div className="flex mb-1  flex-col md:flex-row  items-center md:justify-between  ">
            <p className="capitalize text-gray-400 text-sm ">Suggestions For You</p>
            <p className="capitalize text-gray-400 text-sm">see all</p>
        </div>
    <div className="flex md:flex-col w-full overflow-x-auto gap-1">
  
        <div className="flex md:flex-col w-full overflow-x-auto gap-1">
    <div className="bg-white rounded-lg  px-6 py-4 ">
        <div className="flex gap-6 items-center">
        <Avatar onClick={()=>{navigator( `/profile/1`)}}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
            <div>
                <p className="text-sm font-bold capitalize">mhantich</p>
                <p className="text-xs text-gray-500 capitalize">@mhanitch77</p>
          
                
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
            <button className="text-green-400 "> <CirclePlus size={16} /> </button>
                <button className="text-primary "><Rss size={16} /></button>
            </div>
        </div>
    </div>
    <div className="bg-white rounded-lg  px-6 py-4 ">
        <div className="flex gap-6 items-center">
        <Avatar onClick={()=>{navigator( `/profile/1`)}}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
            <div>
                <p className="text-sm font-bold capitalize">mhantich</p>
                <p className="text-xs text-gray-500 capitalize">@mhanitch77</p>
          
                
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
            <button className="text-green-400 "> <CirclePlus size={16} /> </button>
            <button className="text-primary "><Rss size={16} /></button>
            </div>
        </div>
    </div>
    <div className="bg-white rounded-lg  px-6 py-4 ">
        <div className="flex gap-6 items-center">
        <Avatar onClick={()=>{navigator( `/profile/1`)}}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
            <div>
                <p className="text-sm font-bold capitalize">mhantich</p>
                <p className="text-xs text-gray-500 capitalize">@mhanitch77</p>
          
                
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                <button className="text-green-400 "> <CirclePlus size={16} /> </button>
                <button className="text-primary "><Rss size={16} /></button>
            </div>
        </div>
    </div>
    </div> </div>
    </div>
  )
}

export default Suggestions