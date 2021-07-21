const mongoose = require("mongoose");
const MessageSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    conversation_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Conversation",
    },
    message: { type: String, max: 180 },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Message", MessageSchema);
