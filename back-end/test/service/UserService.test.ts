import { UserService } from '../../service/UserService';

describe('UserService', () => {
    it('should validate that a user is an adult', () => {
        const service = new UserService();
        expect(service.validateUserAge(20)).toBe(true);
    });
});
