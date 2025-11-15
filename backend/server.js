import express from "express"; // Node js framework
import cors from "cors"; //allow cross-origin requests
import "dotenv/config"; //Load environment variables from .env file and push into process.env
import connectDB from "./config/mongodb.js"; //mongodb connection
import connectCloudinary from "./config/cloudinary.js"; //cloudinary connection
import userRouter from "./routes/userRoute.js"; //user routes
import doctorRouter from "./routes/doctorRoute.js"; //doctor routes
import adminRouter from "./routes/adminRoute.js"; //admin routes

// app config
const app = express(); //creates an app object that represents your entire server
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json()); //body parser middleware to parse incoming JSON requests

app.use(cors({ //cross-origin resource sharing middleware
  origin: [
    "https://prescripto-ivory.vercel.app", 
    "https://prescripto-tajd.vercel.app",
    "https://prescripto-42us.vercel.app", //user
    "https://prescripto-zk4r.vercel.app", //admin
    "http://localhost:5173",
    "http://localhost:5174"
  ],
  credentials: true //allows the browser to send cookies or authentication tokens with requests.
}));

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

//creates a root route that sends a message confirming that your API is running properly.
app.get("/", (req, res) => {
  res.send("API Working");
});

//starts your Express server and makes it listen for incoming requests on the specified port.
app.listen(port, () => console.log(`Server started on PORT:${port}`));
