import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { ImageDown } from "lucide-react";
import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import toast from "react-hot-toast";
import axios from "axios";

function CreatePost() {
  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dbcjtjxyt/image/upload";
  const CLOUDINARY_PRESET = "mhxScocail";
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data.secure_url; // The URL of the uploaded image
    } catch (error) {
      console.error("Error uploading image to Cloudinary", error);
      toast.error("Failed to upload image");
      return null;
    }
  };


  const schema = z.object({
    postContent: z
      .string()
      .min(1, "Content is required")
      .max(280, "Content must be less than 280 characters"),
    postImage: z.instanceof(FileList).optional(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const onSubmit = async(data) => {

    let imageUrl = null;
    if (data.postImage && data.postImage.length > 0) {
      imageUrl = await uploadImageToCloudinary(data.postImage[0]);
      if (!imageUrl) return; // Stop submission if image upload fails
    }
    // const postData = {
    //   content: data.postContent,
    //   image: imageUrl,
    // };
    
      console.log(imageUrl)
      console.log(data)
  };
  const onError = (errors) => {
    if (errors.postContent) {
      const errorMessage = errors.postContent.message;
      toast.error(errorMessage);
    }
  };

  return (
    <div
      
      className="md:p-4 flex  container mt-4 px-1 py-2 w-full  overflow-hidden  bg-white  items-center rounded-3xl justify-between   "
    >
      <div className="w-11">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
       <form
       onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-1 md:container gap-2 w-20 md:w-full   items-center justify-between"
      >
        <div className="flex md:flex-1  bg-dark items-center px-2 w-96   bg-gray-100 rounded-3xl md:px-1  ">
          <input
            type="text"
            placeholder="Quoi de neuf ?"
            {...register("postContent")}
            className="flex-1 p-2  rounded text-black  bg-transparent outline-none border-none"
          />
             <input
            type="file"
            accept="image/*"
            {...register("postImage")}
            ref={(e) => {
              register("postImage").ref(e); // Ensure the ref is properly set
              fileInputRef.current = e;
            }}
            className="hidden"
          />
          <div onClick={handleImageClick} className="cursor-pointer">
            <ImageDown />{" "}
       
          </div>
        </div>
        <button
          type="submit"
          className="px-3 text-xs py-2 rounded-3xl text-white bg-primary "
        >
          Publier
        </button>
      </form> 
    </div>
  );
}

export default CreatePost;
