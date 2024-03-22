import mongoose from "mongoose";

const pledgeCountSchema = new mongoose.Schema(
  {
    pledge_Counts: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const pledge_Counts =
  mongoose.models.pledge_Counts ||
  mongoose.model("pledge_Counts", pledgeCountSchema);
export default pledge_Counts;
