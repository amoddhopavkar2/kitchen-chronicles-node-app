import * as likesDao from "./likes-dao.js";

const LikesController = (app) => {
  const createLike = async (req, res) => {
    const currentUser = req.session["currentUser"];
    let like = req.body;
    like = {
      ...like,
      user: currentUser._id,
    };
    const actualLike = await likesDao.createLike(like);
    res.json(actualLike);
  };

  app.post("/users/likes/:idMeal", createLike);
  // app.get("/likes", findAllLikes);
  // app.get("/users/:uid/likes", findFoodLikedByUser);
  // app.get("/movies/:mid/likes", findUsersWhoLikedFood);
};

export default LikesController;
