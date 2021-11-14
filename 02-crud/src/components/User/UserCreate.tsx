import { Component, FormEvent } from "react";
import { Navigate } from "react-router";
import UsuarioService from "../../service/usuario.service";

type UsuarioForm = {
    nome: string;
    email: string;
    redirect: boolean;
}

class UserCreate extends Component<{}, UsuarioForm> {

    constructor(props: any) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { nome, email } = this.state;

        if (nome && email) {
            UsuarioService.adicionar({
                nome: this.state.nome,
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
                        onChange={(e) => this.setState({ nome: e.target.value })} />
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
