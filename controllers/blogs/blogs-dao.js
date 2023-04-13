import blogsModel from "./blogs-model.js";

export const createBlog = (blog) => blogsModel.create(blog);

export const findBlogById = (bid) => blogsModel.findById(bid);

export const findAllBlogs = (bid) => blogsModel.find().sort("-time").exec();

export const findBlogByUserId = (uid) => {
  blogsModel.find({ "author.authorId": uid });
};

export const deleteBlog = (bid) => blogsModel.deleteOne({ _id: bid });
