import multer from "multer";

//multer config
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname)
  },
});

//multer middlewares
export const userPhoto = multer({storage: storage}).single("user-photo");


