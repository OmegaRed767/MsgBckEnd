const mongoose = require("mongoose");
const ConversationSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    participant: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Conversation", ConversationSchema);
