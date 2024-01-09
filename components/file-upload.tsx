"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdPhotoCamera } from "react-icons/md";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDropped, setIsDropped] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const fileType = value?.split(".").pop();


  if (value && fileType?.match(/(png|jpg|jpeg|webp)$/)) {
    return (
      <div className="relative h-[100px] w-[100px] ">
        <Image
          fill
          src={value}
          alt="Upload"
          // width={96}
          // height={96}
          className="rounded-full"
          onLoad={handleImageLoad}
        />
        {imageLoaded && (
          <button
            onClick={() => {
              onChange(""), setIsDropped(false);
            }}
            className="absolute right-0 top-0 rounded-full bg-rose-500 text-white shadow-sm"
            type="button"
          >
            <X className="h-6 w-6 " />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <div>
        <UploadDropzone
          appearance={{
            container: 
              `rounded-full border-dashed border-gray-500 border-4 focus:outline-none relative p-0 m-0 box-content
              ${isDropped ? "border-none h-[100px] w-[100px]" : "h-[92px] w-[92px]"}`
            ,
            allowedContent: {
              display: "none",
            },
            label: cn(
              "p-0 m-0 font-extrabold text-gray-800 flex items-center justify-center",
              { hidden: isDropped },
            ),
            button: cn(
              "rounded-full bg-gray-600 opacity-50 absolute top-0 left-0 p-0 m-0 hover:opacity-100 transition-all duration-200",
              isDropped ? "border-none h-[100px] w-[100px]" : "h-24 w-24",
            ),
          }}
          content={{
            label(arg) {
              return <span className="mt-[-5px] tracking-tighter">UPLOAD</span>;
            },
            uploadIcon() {
              return (
                <MdPhotoCamera
                  size={36}
                  className={cn("m-0 p-0 text-gray-600", { hidden: isDropped })}
                  icon
                />
              );
            },
            button() {
              setIsDropped(true);
              return <FaCheckCircle size={36} className="m-0 p-0" />;
            },
          }}
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            onChange(res?.[0].url);
          }}
          onUploadError={(error: Error) => {
            console.error(error);
          }}
        />
      </div>
      <div className="absolute right-0 top-0 m-1 h-8 w-8 rounded-full bg-white p-0">
        <FaCirclePlus
          size={25}
          className="absolute right-0 top-0 mr-1 mt-1 text-blue-600"
        />
      </div>
    </div>
  );
};

export default FileUpload;
