import { User } from '../models/User';

const users: User[] = [
    { id: 1, name: 'usuario - 1', email: 'usuario1@email.com' },
    { id: 2, name: 'usuario - 2', email: 'usuario2@email.com' },
    { id: 3, name: 'usuario - 3', email: 'usuario3@email.com' }
];

function add(user: Pick<User, 'name' | 'email'>) {
    users.push({
        id: users.length + 1,
        ...user
    });
}

function get(id: number) {
    return users.find(u => u.id === id);
}

function getIndex(id: number) {
    return users.findIndex(u => u.id === id);
}

function update(user: User) {
    const index = getIndex(user.id);
    users[index] = user;
}

function findAll() {
    return users;
}

function deleteById(id: number) {
    const index = getIndex(id);
    if(index !== -1) {
        users.splice(index, 1);
    }
}

const userService = {
    add,
    get,
    update,
    findAll,
    deleteById
};

export default userService;
    