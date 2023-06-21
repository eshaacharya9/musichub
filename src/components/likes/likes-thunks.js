import { createAsyncThunk } from "@reduxjs/toolkit";
import { createLike, findLikesByUser } from "../../services/likes-service";

export const userLikesNotesThunk = createAsyncThunk(
  "userLikesNotes",
  async (like) => createLike(like)
);

export const findLikesByUserThunk = createAsyncThunk(
  "findLikesByUserThunk",
  async (user) => findLikesByUser(user)
);