import { Component } from "react";
import { Link } from "react-router-dom";
import { User } from "../../models/User";
import UserService from "../../service/user.service";

class UserList extends Component<{}, { users: User[] }> {

    constructor(props: any) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        const users = UserService.findAll();
        this.setState({ users });
    }

    deleteUser(id: number) {
        UserService.deleteById(id);
        this.setState({ users: UserService.findAll() });
    }

    render() {
        const { users } = this.state;

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
                        {users.map(user => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <Link to={`/users/edit/${user.id}`}>
                                                <button type="button" className="btn btn-primary">Editar</button>
                                            </Link>
                                            <button type="button" className="btn btn-danger" onClick={() => this.deleteUser(user.id)}>Excluir</button>
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