import { Component } from "react";
import { Link } from "react-router-dom";
import { Usuario } from "../../models/Usuario";
import UsuarioService from "../../service/usuario.service";

class UserList extends Component<{}, { usuarios: Usuario[] }> {

    constructor(props: any) {
        super(props);

        this.state = {
            usuarios: []
        };
    }

    componentDidMount() {
        const usuarios = UsuarioService.listarTodos();
        this.setState({ usuarios: usuarios });
    }

    deletarUsuario(id: number) {
        UsuarioService.deletar(id);
        this.setState({ usuarios: UsuarioService.listarTodos() });
    }

    render() {
        const { usuarios } = this.state;

        return (
            <div className="container-fluid">

                <div className="row mt-4 justify-content-between">
                    <div className="col-4">
                        <h3>Usuários</h3>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <Link to="/users/create">
                            <button className="btn btn-success">Novo</button>
                        </Link>
                    </div>
                </div>

                <table className="table mt-4">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario => {
                            return (
                                <tr>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.email}</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <Link to={`/users/edit/${usuario.id}`}>
                                                <button type="button" className="btn btn-primary">Editar</button>
                                            </Link>
                                            <button type="button" className="btn btn-danger" onClick={() => this.deletarUsuario(usuario.id)}>Excluir</button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserList;