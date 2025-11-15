import multer from "multer"; //Node.js middleware used to handle file uploads (images, PDFs, videos, etc.) in Express applications.

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
});

const upload = multer({ storage: storage })

export default upload