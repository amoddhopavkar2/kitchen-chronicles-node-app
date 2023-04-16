import mongoose from 'mongoose';
import { usersSchema, adminSchema, bloggerSchema } from './users-schema.js';

export const usersModel = mongoose.model('UserModel', usersSchema);
export const adminModel = usersModel.discriminator('AdminModel', adminSchema);
export const bloggerModel = usersModel.discriminator(
  'BloggerModel',
  bloggerSchema
);

export default usersModel;
