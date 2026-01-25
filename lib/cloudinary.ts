import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (file: File, folder: string) => {
  try {
   
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);


    return new Promise<string>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: `ts_tours/${folder}`,
          resource_type: "auto",
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Upload Error:", error);
            return reject(new Error("Failed to upload to Cloudinary"));
          }
          resolve(result?.secure_url || "");
        }
      ).end(buffer); 
    });

  } catch (error) {
    console.error("Cloudinary Logic Error:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
};