import cloudinary from 'cloudinary';


//cloudinary config

    cloudinary.v2.config({ 
      cloud_name: "dwjxb6oyb", 
      api_key: "917214892959265", 
      api_secret: "bTYS2nZfFqPEMIilw6M3lAVagws"
  });


  //upload image in cloudinary
  export const uploadCloudinary = async (path)=>{
        const data = await cloudinary.v2.uploader.upload(path);
        return data;
  }

  //delete image from cloudinary
  export const deleteCloudinary = async(publicId)=>{
    await cloudinary.v2.uploader.destroy(publicId)
  }