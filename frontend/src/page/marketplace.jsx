import { Heart, MoveDown, MoveUp, ShoppingCart, Star } from "lucide-react";
import {
  useGetcategoriesQuery,
  useGetmarkPlaceQuery,
} from "../store/markPlace.js";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button.jsx";
import Lottie from "lottie-react";
import { Indexerror, loading } from "@/animation/index.js";
import NavBar from "@/components/NavBar.jsx";

function Marketplace() {
  const { data, isLoading, error } = useGetmarkPlaceQuery();
  const { data: cati } = useGetcategoriesQuery();
  console.log(cati);

  

  return (
    <>
     <NavBar  />
    
   
    <div className="container mx-auto mt-36 flex flex-col lg:flex-row gap-6">
      <div className="flex flex-col gap-4 ">
        
  
        <div className="    flex  flex-col   bg-white " id="widget">
        {
          error ? <div className="w-full h-full flex justify-center items-center"> <Lottie
          style={{ width: "14rem", height: "16rem" }}
          animationData={Indexerror}
          loop={false}
        /> 
        </div> :  <div className="text-lg font-semibold capitalize text-center">
        categories
      </div>
        } 
         
          {cati?.map((item, index) => (
            <div key={index} className=" w-full px-4 py-4 flex-col sm:flex-row">
              <div className=" duration-700 rounded-sm hover:text-white tran hover:bg-primary w-full">
                <button className="flex justify-between items-center px-2 gap-4 py-1 w-full">
                  <h4 className="text-xs font-semibold capitalize ">{item}</h4>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="    flex  flex-col   bg-white " id="widget">
          <div className="text-lg font-semibold capitalize text-center">
            Sort by 
          </div>
     
            <div className=" w-full px-4 py-4 flex-col sm:flex-row">
            <div className="  duration-700 rounded-sm hover:text-white tran hover:bg-primary w-full">
        
        <button className="flex justify-between  items-center px-2 gap-4 py-1 w-full ">
    
          <h4 className="text-xs font-semibold capitalize ">high price </h4> <MoveUp  />
        </button>
      </div>
              <div className="  duration-700 rounded-sm hover:text-white tran hover:bg-primary w-full">
                <button className="flex justify-between items-center px-2 gap-4 py-1 w-full">
                  <h4 className="text-xs font-semibold capitalize "> low price </h4> <MoveDown  /> 

                </button>
        
              </div>
      
            </div>
    
        </div>
      </div>
      <div className="flex-1 ">

        {
          error && <div className="w-full  h-full flex justify-center items-center"> <Lottie
          style={{ width: "14rem", height: "16rem" }}
          animationData={Indexerror}
          loop={false}
        />
        </div>
        }
       {isLoading &&  <div className="w-full  h-full flex justify-center items-center">  <Lottie
              style={{ width: "14rem", height: "16rem" }}
              animationData={loading}
              loop={false}
            />

</div>
            }
              
     
        {data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {data.map((item, index) => (
              <Card
                className="relative text-center flex flex-col justify-between items-center"
                key={index}
              >
                <CardHeader>
                  <CardTitle className="text-sm">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="w-48 mx-auto  overflow-hidden max-h-48 placeholder-gray-700 p-2">
                  <img
                    className="w-full  h-full object-cover"
                    src={item.image}
                    alt=""
                  />
                </CardContent>
                <CardFooter className="flex  justify-between gap-6 items-center">
                  <Button className="text-xs flex gap-2 capitalize bg-black hover:bg-primary text-white">
                < ShoppingCart size={13}/> {item.price}
                  </Button>
                  
                  <Button className="text-sm capitalize bg-red text-black hover:text-red-500 ">
                  <Heart  size={13}/> 
                  </Button>
                </CardFooter>
                <div className="flex gap-1 items-center absolute -top-2 right-0 p-1 bg-primary text-xs lg:text-sm">
                  {item.rating.rate}
                  <Star size={16} color="#f0f278" />
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 ">
        <Heart size={24} className="self-end" />
        <ShoppingCart size={24} className="self-end" />
      </div>
    </div>
    </>
  );
}

export default Marketplace;
