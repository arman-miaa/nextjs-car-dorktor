"use server";
import bcrypt from "bcryptjs";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  const userCollection = dbConnect(collectionNamesObj.userCollection);

  // Find user by email
  const user = await userCollection.findOne({ email });
  if (!user) return null;

  // Compare passwords
  const isPasswordOK = await bcrypt.compare(password, user.password);
  if (!isPasswordOK) return null;

  return user;
};
