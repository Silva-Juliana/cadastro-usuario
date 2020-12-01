import { useForm } from "react-hook-form";
import logo from '../../images/logo.png'
import '../login/login.css'


const LoginForm = () => {
    const { register, handleSubmit, errors } = useForm();
  
    function onSubmit(data) {
      console.log("Data submitted: ", data);
    }

    return <div className="dad_container">
        <div className='container'>
            <div className='text_container'>
                <h1> Bem vindo á <br/> Easy Registration</h1>
                <p> Cadastre usuarios de maneira facil</p>
            </div>
        </div>
        <div className='container_login'>
            <div className='container_login_filho'>
                <img className="image_logo" src={logo} alt="logo"/>
                <h1 className='text_login'> Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="nope">
                    <div className="user-login_form">
                        <input id="email" type="text" name="email"
                            autoComplete="off" placeholder="E-mail" ref={register({
                                pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Digite um e-mail valido",
                                },
                            })}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    <div className="user-login_form">
                        <input id="password" type="password" name="password"
                            placeholder="Senha"  ref={register({
                                pattern: {
                                    value: /\w{5,}/,
                                    message: "Senha deve ser maior que 4 caracteres",
                                },
                            })}
                        />
                        {errors.password && <p className="error">{errors.password.message}</p>}
                    </div>
                    <button type="submit" className="submit-button"> Entrar</button>
                </form>
            </div>
        </div>
    </div>
}
export default LoginForm;