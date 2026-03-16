import mongoose from "mongoose";

const showSchema = new mongoose.Schema(
  {
    movie: {
      type: String,
      required: true,
      ref: "Movie",
    },

    showDateTime: {
      type: Date,
      required: true,
      index: true,
    },

    showPrice: {
      type: Number,
      required: true,
    },

    occupiedSeats: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
    minimize: false,
  },
);

// Prevent duplicate shows for same movie and time
showSchema.index({ movie: 1, showDateTime: 1 }, { unique: true });

const Show = mongoose.model("Show", showSchema);

export default Show;
