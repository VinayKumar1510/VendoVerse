// lib/vendor.js
import dbConnect from './db'; // If you have a DB connection utility
import Vendor from '../models/Vendor'; // Adjust path to your Mongoose model

export async function getVendors({ page = 1, limit = 10 }) {
  await dbConnect();

  const skip = (page - 1) * limit;

  const vendors = await Vendor.find()
    .skip(skip)
    .limit(limit)
    .lean();

  const total = await Vendor.countDocuments();

  return {
    vendors,
    total,
    totalPages: Math.ceil(total / limit),
  };
}
