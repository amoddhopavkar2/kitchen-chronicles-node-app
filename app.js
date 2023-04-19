import express from "express";
import UsersController from "./controllers/users/users-controller.js";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import BlogsController from "./controllers/blogs/blog-controller.js";
import LikesController from "./controllers/likes/likes-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import SessionController from "./session-controller.js";
import FollowsController from "./controllers/follows/follows-controller.js";
import AdminController from "./controllers/admin/admin-controller.js";
import dotenv from "dotenv";

dotenv.config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4,
};

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING, options).then(() => {
  console.log("Connected to MongoDB!");
});

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://leafy-gumption-a6a15e.netlify.app",
  /netlify\.app$/,
];
app.use(
  cors({
    credentials: true,
    origin: allowedOrigins,
  })
);

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());

BlogsController(app);
UsersController(app);
LikesController(app);
ReviewsController(app);
SessionController(app);
FollowsController(app);
AdminController(app);

app.listen(4000, () => {
  console.log("Server listening on port 4000!");
});
