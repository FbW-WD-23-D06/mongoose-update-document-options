// Document : {name : """ , age: , hobbies, email}

import mongoose from "mongoose";

const { Schema, model } = mongoose;
//
// {VALUE} : value, {PATH} : Key, {KIND} : validation type

const UserSchema = new Schema({
  name: {
    type: String,
    // built-in validation
    required: [true, "you have to enter the name!"],
    minlength: [5, "{VALUE} must be at least 5 char!"],
  },
  age: {
    type: Number,
    // custom validation
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
  address: {
    city: {
      type: String,
      minlength: [6, "{VALUE} must be more than 5 char !!"],
    },
    postalCode: {
      type: Number,
      min: [10000, "{VALUE} must be more than 9999"],
    },
  },
});

export const User = model("User", UserSchema);
