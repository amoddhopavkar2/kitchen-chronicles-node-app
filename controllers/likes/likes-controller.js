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

  const findLikesByUser = async (req, res) => {
    const user = req.params.userId;
    const likes = await likesDao.findLikesByUser(user);
    res.json(likes);
  };

  app.post("/users/likes/:idMeal", createLike);
  app.get("/users/:userId/likes", findLikesByUser);
};

export default LikesController;
