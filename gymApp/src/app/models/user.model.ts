export class IUser {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    location?: {
        country: string,
        state: string,
    }
}
