import { User } from "../models/User.js";

const getUser = (req, res) => {
  const { userId, name } = req.params;
  console.log(userId, name);
};
const getAllUser = () => {};

const addUser = async (req, res) => {
  const { name, age, hobbies, address } = req.body;
  try {
    const newUser = new User({ name, age, hobbies, address });
    await newUser.save();
    res.json({ msg: "User added successfuly!", user: newUser });
  } catch (error) {
    console.log(error);

    // casting errors from schema
    const invalidKeys = Object.keys(error.errors).map((x) => {
      return error.errors[x].message;
    });
    console.log(invalidKeys);

    res.json(invalidKeys);
  }
};

export { getUser, getAllUser, addUser };
