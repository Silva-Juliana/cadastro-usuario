import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Api from "../../GetApi";
import logo from '../../images/logo.png'
import '../login/login.css'
import {userLogin, setToken} from '../../Auth'
import { toast, ToastContainer } from "react-toastify";
import  'react-toastify/dist/ReactToastify.css' ;

toast.configure()

const LoginForm = () => {

    let history = useHistory()

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        err: false,
        errMsg: ''
    });

    const toastLogin = () => {
        toast ( "Logado com sucesso :)" );
   
    }

    const { register, handleSubmit, errors } = useForm();
  
    function onSubmit(data) {
        console.log("Data submitted: ", data);
        Api()
            .then(()=>{
                toastLogin()
            })
    }
   
    const changeCredentials= (e) => {
        let aux = credentials;
            aux[e.target.name] = e.target.value
            setCredentials(aux)
    }

    const sigIn =() =>{
        console.log(credentials)
        userLogin(credentials).then(
            (resultJson) => {
                if (resultJson.length > 0){
                    setToken(resultJson[0].token)
                    history.push('/list')
                }else {
                    setCredentials({err:true, errMsg:'E-mail ou senha incorretos'})
                }
            }
        )
    }


    return (<>
    <ToastContainer/>
    <div className="dad_container">

        <div className='container'>
            <div className='text_container'>
                <h1> Bem vindo á Easy Registration</h1>
                <p> Cadastre usuários de maneira fácil</p>
            </div>
        </div>
        <div className='container_login'>
            <div className='container_login_filho'>
                <img className="image_logo" src={logo} alt="logo"/>
                <h1 className='text_login'> Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="nope">
                    <div className="user-login_form">
                        <div>{credentials.errMsg}</div>
                        <input onChange={changeCredentials} 
                            id="email_login" type="text" name="email"
                            autoComplete="off" placeholder="E-mail" ref={register({
                                pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Digite um e-mail válido",
                                },
                            })}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    <div className="user-login_form">
                        <input onChange={changeCredentials} 
                        id="password_login" type="password" name="password"
                            placeholder="Senha"  ref={register({
                                pattern: {
                                    value: /\w{5,}/,
                                    message: "Senha deve ser maior que 4 caracteres",
                                },
                            })}
                        />
                        {errors.password && <p className="error">{errors.password.message}</p>}
                    </div>
                    <button onClick={sigIn}
                        type="submit" className="submit-button"> Entrar
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>)
    }
    export default LoginForm;