import { createSlice } from "@reduxjs/toolkit";
import {
  createReviewThunk,
  deleteReviewThunk,
  findReviewsByHostThunk,
  findReviewsByNotesThunk,
  updateReviewThunk,
} from "./reviews-thunks";
import { deleteReviewService } from "../../services/reviews-service";

const reviewsReducer = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
  },
  extraReducers: {
    [createReviewThunk.fulfilled]: (state, action) => {
      state.reviews.unshift(action.payload);
    },
    [updateReviewThunk.fulfilled]: (state, action) => {
      const newReview = action.payload;
      const index = state.reviews.findIndex((u) => u._id === newReview._id);
      state.reviews[index] = newReview;
    },
    [deleteReviewThunk.fulfilled]: (state, action) => {
      const deletedComment = action.payload;
      state.reviews = state.reviews.filter(
        (u) => u._id !== deletedComment.reviewID
      );
    },
    [findReviewsByNotesThunk.fulfilled]: (state, action) => {
      state.reviews = action.payload;
    },
    [findReviewsByHostThunk.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.reviews = action.payload;
      console.log("after", action.reviews);
    },
  },
});

export default reviewsReducer.reducer;