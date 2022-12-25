import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
});

export default mongoose.model("TinderDetail", schema);
