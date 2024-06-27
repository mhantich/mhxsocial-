
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"; 
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';

function Login() {
    const schema = z.object({
        email: z
          .string()
          .min(1, "email is required")
          .max(280, "Content must be less than 280 characters"),
          password:z.string()
        .min(8, "passworld  is required and min 8 characters")
      });

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
      });


      const onSubmit = async(data) => {

          console.log(data)
      };
      const onError = (errors) => {
        if (errors.email) {
          const errorMessage = errors.email.message;
          toast.error(errorMessage);
        }
        if (errors.password) {
          const errorMessage = errors.password.message;
          toast.error(errorMessage);
        }
      };
    
     
  return (

        <div>
        <div className="md:py-16  min-h-screen  flex items-center ">
    <div className="flex w-full md:w-1/2  bg-white md:h-4/6  rounded-lg   shadow-lg overflow-hidden mx-auto ">
        <div className=" w-full py-9 hidden md:block"
           >
     <div  className=" flex items-center flex-col  justify-center cursor-pointer">
        <img src="sitepoint.png" alt="" className="size-1/2" />
        <h1 className="font-bold text-2xl text-primary">MhxSocial</h1>
      </div>        </div>


        <div className="w-full p-8 ">
   
        <form   onSubmit={handleSubmit(onSubmit, onError)}>

            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input  {...register("email")} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
               
                </div>
                <input {...register("password")} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>
            <div className="mt-8">
                <button type="submit" className="bg-primary text-white font-bold py-2 px-4 w-full rounded hover:bg-black">Login</button>
            </div>
        </form>
    
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link to='/regster' className="text-xs text-gray-500 uppercase">or sign up</Link>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
    </div>
</div> 
        </div>

  )
}

export default Login

