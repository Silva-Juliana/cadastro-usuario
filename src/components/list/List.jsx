import React, { useEffect, useState } from 'react'
import getUsers from '../../GetApi'
import DelUser from '../DelUser'
import '../list/list.css'

function List(){

   const [users, setUsers] = useState([])
   const [query, setQuery] = useState('')

   const getUsersLis = () => {
    getUsers(query)
        .then(res => {
            console.log(res)
            setUsers(res)
        })

   }

    useEffect(() => {
        getUsers()
            .then(res => {
                console.log(res)
                setUsers(res)
            })
    }, [])


    console.log(getUsers)
    return <>
        <div> 
            Listagem de usuários
            <button className="button_logout">Logout</button>
        </div>
        <br/>
        <br/>
        <div className="container_search">
            <label htmlFor="search">Pesquisar:</label>
            <input type='text' id="search" name="search" onChange={(e) => {setQuery(e.target.value)}}/>
            <button onClick={getUsersLis}>Buscar</button>
        </div>
        <button>Novo Usuario</button>
        <div className="datatable">
            <div className="header">
                <div>Nome</div>
                <div>Cpf</div>
                <div>Email</div>
                <div>Cidade</div>
                <div>Ações</div>
            </div>
            { users.map((props, i) => {
                return (
                    <div key={"data_table_row_" + i} className="row">
                        <div>{props.nome}</div>
                        <div>{props.cpf}</div>
                        <div>{props.email}</div>
                        <div>{props.cidade}</div>
                        <div>
                            <button onClick={() => {
                                DelUser(props.id)
                                    .then(() => {
                                        getUsers()
                                            .then(res => {
                                                console.log(res)
                                                setUsers(res)
                                            })
                                    })}
                            }>Excluir</button>
                            <button>Editar</button>
                        </div>
                    </div>
                )
                })
            }
        </div>
    </>
}

export default List;