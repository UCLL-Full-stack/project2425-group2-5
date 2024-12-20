export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string
    ) {
        if (!id) throw new Error('ID is required');
        if (!name) throw new Error('Name is required');
        if (!email) throw new Error('Email is required');
    }
}