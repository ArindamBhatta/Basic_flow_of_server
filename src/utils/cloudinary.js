import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

console.log("Hii i am cloudinary api key", process.env.CLOUDINARY_API_KEY);
console.log("Hii i am cloudinary API SECRET", process.env.CLOUDINARY_API_SECRET);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  console.log(`file path is their on argument ${localFilePath}`);
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
  
    console.log("file is uploaded on cloudinary ", response.url);
    console.log("cloudinary whole response", response);

    return response;

  } catch (error) {
    console.log(`File doesn't upload on cloudinary ${error}`);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
