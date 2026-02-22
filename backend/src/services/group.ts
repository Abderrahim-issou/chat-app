import { Types } from 'mongoose';
import Group from '../models/group';
import User from '../models/user';
import ApiError from '../utils/apiError';
import { addMGDto, createGDto, deleteMGDto, updateGDto } from '../validation/groupSchema';

export const createGroup = async (data: createGDto, user_id: string) => {
  if (!data || !user_id) {
    throw new ApiError(400, 'bad request');
  }
  const user = await User.findById(user_id);
  if (!user) {
    throw new ApiError(404, 'user not found');
  }

  const group = await Group.create({
    ...data,
    createdBy: user_id,
  });
  if (!group) {
    throw new ApiError(500, 'internal server error ');
  }
  return group;
};

export const updateGroup = async (data: updateGDto, user_id: string, group_id: string) => {
  if (!data || !user_id || !group_id) {
    throw new ApiError(400, 'bad request');
  }
  const user = await User.findById(user_id);
  if (!user) {
    throw new ApiError(404, 'user not found');
  }
  const group = await Group.findById(group_id);
  if (!group) {
    throw new ApiError(404, 'group not found');
  }
  const updated = await Group.findByIdAndUpdate(group_id, { $set: data }, { new: true });
  if (!updated) {
    throw new ApiError(500, 'internal server error');
  }
  return updated;
};

export const deleteGroup = async (group_id: string, user_id: string) => {
  if (!user_id || !group_id) {
    throw new ApiError(400, 'bad request');
  }
  const user = await User.findById(user_id);
  if (!user) {
    throw new ApiError(404, 'user not found');
  }
  const group = await Group.findById(group_id);
  if (!group) {
    throw new ApiError(404, 'group not found');
  }
  const isAdmin = group.admins.some((id) => id.equals(user._id as Types.ObjectId));
  if (group.createdBy === user._id || isAdmin) {
    await Group.updateOne({ _id: group_id }, { deleteForAll: true });
} else {
      await Group.updateOne({ _id: group_id }, { $push: { deleted: user_id } });
  }
  return group;
};

export const addMembers = async (user_id: string, group_id: string, data: addMGDto) => {
  if (!user_id || !group_id || !data) {
    throw new ApiError(400, 'bad request');
  }
  const user = await User.findById(user_id);
  if (!user) {
    throw new ApiError(404, 'user not found');
  }
  const group = await Group.findById(group_id);
  if (!group) {
    throw new ApiError(404, 'group not found');
  }
  const isAdmin = group.admins.some((id) => id.equals(user._id as Types.ObjectId));
  if (group.createdBy == user._id || isAdmin) {
    const memberIds = data.members
      .filter((id: string) => Types.ObjectId.isValid(id))
      .map((id: string) => new Types.ObjectId(id));
    await Group.updateOne({ _id: group_id }, { $push: { members: { $each: memberIds } } });
  } else {
    throw new ApiError(402, 'you are not Authorized');
  }
  return group;
};

export const deleteMembers = async (user_id: string, group_id: string, data: deleteMGDto) => {
  if (!user_id || !group_id || !data) {
    throw new ApiError(400, 'bad request');
  }
  const user = await User.findById(user_id);
  if (!user) {
    throw new ApiError(404, 'user not found');
  }
  const group = await Group.findById(group_id);
  if (!group) {
    throw new ApiError(404, 'group not found');
  }
  const memberIds = data.members
    .filter((id: string) => Types.ObjectId.isValid(id))
    .map((id: string) => new Types.ObjectId(id));
  const isAdmin = group.admins.some((id) => id.equals(user._id as Types.ObjectId));
  if (group.createdBy == user._id || isAdmin) {
    await Group.updateOne({ _id: group_id }, { $pull: { members: { $in: memberIds } } });
  } else {
    throw new ApiError(402, 'you are not Authorized');
  }
  return group;
};
