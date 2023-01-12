import UserType from '../components/types/userType';
import postsSeed from '../mock-users.json';

interface User {
    name: string;
    email: string;
    password: string;
    modified_at: string;
    id: number;
}

interface Data {
    [key: number]: User;
    find: Function;
    push: Function;
    indexOf: Function;
    splice: Function;
    length: number;
    sort: Function;
    lastIndexOf: Function;
}

class UserRepo {
    static users: Data;

    static getInstance() {
        if (sessionStorage.getItem('users') == null) {
            UserRepo.users = postsSeed;
            sessionStorage.setItem('users', JSON.stringify(postsSeed));
        }
        return this;
    }

    static findAll() {
        UserRepo.users = JSON.parse(sessionStorage.getItem('users')!);
        return UserRepo.users;
    }

    static find(id: number) {
        UserRepo.users = JSON.parse(sessionStorage.getItem('users')!);
        var element = UserRepo.users.find((element: UserType) => element.id == id);
        return element;
    }

    static create(item: UserType) {
        UserRepo.users = JSON.parse(sessionStorage.getItem('users')!);
        this.users = UserRepo.users;
        this.users.push(item);
        sessionStorage.setItem('users', JSON.stringify(this.users));
    }

    static update(id: number, users: UserType) {
        UserRepo.users = JSON.parse(sessionStorage.getItem('users')!);
        const elementToUpdate = UserRepo.users.find((element: UserType) => element.id == id);
        const index: number = this.users.indexOf(elementToUpdate);
        this.users[index].name = users.name;
        this.users[index].email = users.email;
        this.users[index].password = users.password;
        this.users[index].modified_at = users.modified_at.toString();
        sessionStorage.setItem('users', JSON.stringify(this.users));
    }

    static delete(id: number) {
        UserRepo.users = JSON.parse(sessionStorage.getItem('users')!);
        const elementToDelete = UserRepo.users.find((element: UserType) => element.id == id);
        const index = this.users.indexOf(elementToDelete);
        this.users.splice(index, 1);
        sessionStorage.setItem('users', JSON.stringify(this.users));
    }

    static size() {
        return UserRepo.findAll().length;
    }

    static assignId() {
        UserRepo.users = JSON.parse(sessionStorage.getItem('users')!);
        const length = this.users.length - 1;
        const lastIndex = this.users[length].id;
        return lastIndex;
    }
}

export default UserRepo;
