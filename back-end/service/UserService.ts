import { User } from '../model/User';

export class UserService {
    validateUserAge(age: number): boolean {
        return age >= 18;
    }
}
