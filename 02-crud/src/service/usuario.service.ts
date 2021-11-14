import { Usuario } from './../models/Usuario';

const usuarios: Usuario[] = [
    { id: 1, nome: 'usuario - 1', email: 'usuario1@email.com' },
    { id: 2, nome: 'usuario - 2', email: 'usuario2@email.com' },
    { id: 3, nome: 'usuario - 3', email: 'usuario3@email.com' }
];

function adicionar(usuario: Pick<Usuario, 'nome' | 'email'>) {
    usuarios.push({
        id: usuarios.length + 1,
        ...usuario
    });
}

function consultar(id: number) {
    return usuarios.find(u => u.id === id);
}

function getIndex(id: number) {
    return usuarios.findIndex(u => u.id === id);
}

function atualizar(usuario: Usuario) {
    const index = getIndex(usuario.id);
    usuarios[index] = usuario;
}

function listarTodos() {
    return usuarios;
}

function deletar(id: number) {
    const index = getIndex(id);
    if(index !== -1) {
        usuarios.splice(index, 1);
    }
}

const usuarioService = {
    adicionar,
    consultar,
    atualizar,
    listarTodos,
    deletar
};

export default usuarioService;
    