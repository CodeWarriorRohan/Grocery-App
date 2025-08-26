import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
  ...userSchema.obj,
  name: { type: String, required: true },
  location: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  address: { type: String },
  deliveryPrtners: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeliveryPartners",
    },
  ],
});

const Branch = mongoose.model("Branch", branchSchema);
export default Branch;
