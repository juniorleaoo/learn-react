import React, { FormEvent, useState } from "react";
import { useParams } from "react-router";
import { User } from "../../models/User";
import UserService from "../../service/user.service";

const UserEdit: React.FC = () => {
    const { id } = useParams() as { id: string };

    const [user, setUser] = useState<User>({
        ...UserService.get(+id) ?? {
            id: +id,
            name: '',
            email: ''
        }
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, email } = user;

        if (name && email) {
            UserService.update(user);

            alert('Usuário alterado com sucesso!');
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" className="form-control"
                    id="nome" placeholder="Digite o nome" required
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })} />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control"
                    id="email" placeholder="Digite o e-mail" required
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </div>

            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
    );

}

export default UserEdit;
