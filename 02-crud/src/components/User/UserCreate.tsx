import { Component, FormEvent } from "react";
import { Navigate } from "react-router";
import UserService from "../../service/user.service";

type UserForm = {
    name: string;
    email: string;
    redirect: boolean;
}

class UserCreate extends Component<{}, UserForm> {

    constructor(props: any) {
        super(props);

        this.state = {
            name: '',
            email: '',
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { name, email } = this.state;

        if (name && email) {
            UserService.add({
                name: this.state.name,
                email: this.state.email
            });

            alert('Usuário cadastrado com sucesso!');

            this.setState({
                ...this.state,
                redirect: true
            });
        }
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Navigate to='/users' />;
        }

        return (
            <form onSubmit={this.handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input type="text" className="form-control"
                        id="nome" placeholder="Digite o nome" required
                        onChange={(e) => this.setState({ name: e.target.value })} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control"
                        id="email" placeholder="Digite o e-mail" required
                        onChange={(e) => this.setState({ email: e.target.value })} />
                </div>

                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        );
    }

}

export default UserCreate;
