import React, { useEffect, useState } from 'react'
import "../form.css"
import apiForm from '../ApiForm'
import editUser from '../editUser/editUserApi'
import { useParams } from 'react-router-dom'
import GetOneUser from '../../../GetOneUser'
import { useHistory } from 'react-router-dom'
import {HeaderForm} from '../../../Header'


function EditUser (props){
    let history = useHistory()
    let typeForm = "Editar"

    const param = useParams();
    
    const [formField, setFormField] = useState({
        nome:'',
        cpf:'',
        email:'',
        password:'',
        cep:'',
        rua:'',
        numero:'',
        bairro:'',
        cidade:''
    })

    const getCep = (e) => {
        apiForm(e.currentTarget.value)
            .then((local) => {
                setFormField({
                ...formField,
                cidade:local['localidade'],
                rua:local['logradouro'],
                bairro:local['bairro']
            })
            })
       }

       const upDataField = (e) => {
          setFormField({
              ...formField,
              [e.target.name]: e.target.value
          })

       }

       const createUser = (e) => {
            e.preventDefault()
            console.log(formField)
            editUser(param.id, formField)
            history.push('/list') 
       }

       useEffect(() => {
            GetOneUser(param.id).then(res => {
               setFormField(res)
            })
        }, [param.id])

       console.log(formField.nome)

    return( <> 
        <div className='box_header'>
            <HeaderForm/>
        </div>
        <div className="dad_container_form">
            <div className="container_form">
                <h1 className='h1_form'> Cadastro de usuários</h1>
                <form onSubmit={createUser}>
                    <div>
                        <h2>Dados Cadastrais:</h2>
                    </div>
                    <div className="dados_pessoais">
                        <input onChange={upDataField} value={formField.nome} type="text" className='input_form' name='nome' placeholder="Nome"/>
                        <input onChange={upDataField} value={formField.cpf} type="text" className='input_form' name='cpf' placeholder="CPF"/>
                    </div>
                    <input onChange={upDataField} value={formField.email} type="email" className='input_form' name='email' placeholder="E-mail"/>
                    <input onChange={upDataField} value={formField.password} type="password" className='input_form' name='password' placeholder="Senha"/>

                    <div> 
                        <h2>Endereço:</h2>
                    </div>
                    <input type="text" onBlur={getCep} onChange={upDataField} value={formField.cep} className='input_form' name='cep' placeholder="CEP"/>
                    <input onChange={upDataField} value={formField.rua} type="text" className='input_form' name='rua' placeholder="Rua"/>
                    <input onChange={upDataField} value={formField.numero} type="text" className='input_form' name='numero' placeholder="Número"/>
                    <input onChange={upDataField} value={formField.bairro} type="text" className='input_form' name='bairro' placeholder="Bairro"/>
                    <input onChange={upDataField} value={formField.cidade} type="text" className='input_form' name='cidade' placeholder="Cidade"/>
                    <button className="register_button" type='submit'>{typeForm}</button>
                </form>
            </div>
        </div>
    </>)
}

export default EditUser;