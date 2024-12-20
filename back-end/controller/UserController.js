"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const User_1 = require("../model/User");
const createUser = (req, res) => {
    const { id, name, email } = req.body;
    const user = new User_1.User(id, name, email);
    res.status(201).send(user);
};
exports.createUser = createUser;
