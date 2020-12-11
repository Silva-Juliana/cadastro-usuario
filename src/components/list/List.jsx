import React, { useEffect, useState } from 'react'
import getUsers from '../../GetApi'
import DelUser from '../DelUser'
import '../list/list.css'
import {HeaderList} from '../../Header'
import { Link} from "react-router-dom";


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

    return( <>
        <HeaderList/>
        <div className='list_user'> 
            Listagem de usuários
        </div>
        <br/>
        <br/>
        <div className="container_search">
            <input type='text' id="search" name="search" placeholder="Pesquisar Usuário" onChange={(e) => {setQuery(e.target.value)}}/>
            <button className='ok' onClick={getUsersLis}>Ok</button>
        </div>
        <div className="datatable">
            <div className="header">
                <div>Nome</div>
                <div>CPF</div>
                <div>E-mail</div>
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
                            <button className="button_delete" onClick={() => {
                                DelUser(props.id)
                                    .then(() => {
                                        getUsers()
                                            .then(res => {
                                                console.log(res)
                                                setUsers(res)
                                            })
                                    })}
                            }>Excluir</button>
                            <Link className="button_edit" to={`/editUser/${props.id}`}>Editar</Link>
                        </div>
                    </div>
                )
                })
            }
        </div>
    </>)
}

export default List;