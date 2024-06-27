import webget from "@/lib/constansts";
import { useNavigate } from "react-router-dom";

function WedgetNews() {
  const navigator = useNavigate();

  return (
    <>
      <div className=" justify-around  flex  flex-col h-full  " id="widget">
        {webget?.map((item, index) => (
          <div key={index} className=" w-full  px-4 py-4 flex-col sm:flex-row">
            <div className=" duration-700 rounded-sm hover:text-white tran hover:bg-primary w-full">
              <button
                onClick={() => {
                  navigator(`/${item.link}`);
                }}
                className="flex justify-between items-center px-2 gap-4 py-1 w-full"
              >
                <h4 className="text-xs font-semibold capitalize ">
                  {item.name}
                </h4>
                <item.icon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WedgetNews;
