"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../../service/UserService");
describe('UserService', () => {
    it('should validate that a user is an adult', () => {
        const service = new UserService_1.UserService();
        expect(service.validateUserAge(20)).toBe(true);
    });
});
