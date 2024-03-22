import mongoose from "mongoose";

const OTPSchema = new mongoose.Schema(
  {
    mobile: {
      type: Number,
      unique: true,
      required: true,
      maxLength: 10,
      minLength: 10,
      default: null,
    },
    otp: {
      type: Number,
      default: null,
      minLength: 6,
      maxLeng: 6,
    },
    expireAt: {
      type: Date,
      default: Date.now,
      expires: 500, // TTL of 24 hours (in seconds)//entire document expire 5min
    },
  },
  { timestamps: true }
);

const OTP = mongoose.models.OTP || mongoose.model("OTP", OTPSchema);
export default OTP;
