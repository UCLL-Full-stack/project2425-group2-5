import { User } from '../../model/User';

describe('User', () => {
    it('should create a valid user', () => {
        const user = new User('1', 'John Doe', 'john@example.com');
        expect(user.id).toBe('1');
    });

    it('should throw an error if no ID is provided', () => {
        expect(() => new User('', 'John Doe', 'john@example.com')).toThrow('ID is required');
    });
});