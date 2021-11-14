import React, { FormEvent, useState } from "react";
import { useParams } from "react-router";
import { Usuario } from "../../models/Usuario";
import UsuarioService from "../../service/usuario.service";

const UserEdit: React.FC = () => {
    const { id } = useParams() as { id: string };

    const [usuario, setUsuario] = useState<Usuario>({
        ...UsuarioService.consultar(+id) ?? {
            id: +id,
            nome: '',
            email: ''
        }
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { nome, email } = usuario;

        if (nome && email) {
            UsuarioService.atualizar(usuario);

            alert('Usuário alterado com sucesso!');
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" className="form-control"
                    id="nome" placeholder="Digite o nome" required
                    value={usuario.nome}
                    onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })} />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control"
                    id="email" placeholder="Digite o e-mail" required
                    value={usuario.email}
                    onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} />
            </div>

            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
    );

}

export default UserEdit;
