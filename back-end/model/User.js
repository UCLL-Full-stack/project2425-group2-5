"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        if (!id)
            throw new Error('ID is required');
        if (!name)
            throw new Error('Name is required');
        if (!email)
            throw new Error('Email is required');
    }
}
exports.User = User;
