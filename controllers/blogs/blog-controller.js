import * as blogsDao from "./blogs-dao.js";

const BlogsController = (app) => {
  const createBlog = async (req, res) => {
    const newBlog = req.body;
    console.log(req.session);
    const currentUser = req.session["currentUser"];
    newBlog.author = {
      authorId: currentUser._id,
      authorName: currentUser.username,
    };
    newBlog.time = Date.now();
    console.log(newBlog);
    const actualBlog = await blogsDao.createBlog(newBlog);
    res.json(actualBlog);
  };

  const findBlogById = async (req, res) => {
    const blogId = req.params.bid;
    try {
      const blogDetails = await blogsDao.findBlogById(blogId);
      res.json(blogDetails);
    } catch (e) {
      res.sendStatus(404);
    }
  };

  const findAllBlogs = async (req, res) => {
    const allBlogs = await blogsDao.findAllBlogs();
    res.json(allBlogs);
  };

  const findBlogByUserId = async (req, res) => {
    const uid = req.params.uid;
    const allBlogs = await blogsDao.findBlogByUserId(uid);
    console.log(allBlogs);
    res.json(allBlogs);
  };

  const deleteBlog = async (req, res) => {
    const blogToDelete = req.params.bid;
    const status = await blogsDao.deleteBlog(blogToDelete);
    res.josn(status);
  };

  app.post("/blog", createBlog);
  app.get("/blog/:bid", findBlogById);
  app.get("/blog", findAllBlogs);
  app.get("/blog/user/:uid", findAllBlogs);
  app.delete("/blog/:bid", deleteBlog);
};

export default BlogsController;
