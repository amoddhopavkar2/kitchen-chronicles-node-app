import express from "express";
import MealDBController from "./controllers/mealdb/mealdb-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import BlogsController from "./controllers/blogs/blog-controller.js";
import LikesController from "./controllers/likes/likes-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import SessionController from "./session-controller.js";
import FollowsController from "./controllers/follows/follows-controller.js";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4,
};

const CONNECTION_STRING = "mongodb://localhost:27017/foodalgorithms";
mongoose.connect(CONNECTION_STRING, options);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3002",
  })
);
app.use(
  session({
    secret: "should be an environment variable",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(express.json());

MealDBController(app);
BlogsController(app);
UsersController(app);
LikesController(app);
ReviewsController(app);
SessionController(app);
FollowsController(app);

app.listen(4000);
