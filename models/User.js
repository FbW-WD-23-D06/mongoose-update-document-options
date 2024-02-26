// {name : " , age: , hobbies, email}

import mongoose from "mongoose";

const { Schema, model } = mongoose;
// {VALUE}, {PATH}, {KIND}

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "you have to enter the name!"],
    minlength: [5, "{VALUE} must be at least 5 char!"],
  },
  age: {
    type: Number,
    validate: {
      validator: function (x) {
        return x < 10;
      },
      message: "{VALUE} must be less than 10",
    },
  },
  hobbies: {
    type: [String],
    enum: {
      values: ["tennis", "basketball", "swimming"],
      message: "{VALUE} is not accepted !",
    },
  },
  email: {
    type: String,
  },
});

export const User = model("User", UserSchema);
