import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import RotaCard from '../Card';
import './styles.scss';
import { saveSessionData } from '../../../../core/utils/auth';
import { makeLogin } from '../../../../core/utils/request';
import ButtonLogin from '../../../../core/components/ButtonLogin';
import { useHistory } from 'react-router-dom';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit, errors } = useForm<FormData>();
    const [hasError, setHasError] = useState(false); 
    const history = useHistory();
/*
    const onSubmit = (data: FormData) => {
        console.log(data);
        makeLogin(data)
    }
    */
    
    const onSubmit = (data: FormData) => {
       makeLogin(data)
          .then(response => {
              setHasError(false);
              saveSessionData(response.data);
              history.push('./movies');
          })
          .catch(() => {
              setHasError(true);
          })  
        }

    return (
       <RotaCard title="Login">
            {hasError && (
                <div className="alert alert-danger mt-5">
                    Usuário ou senha inválidos!
                </div>
            )}
           <form className="login-form" onSubmit={handleSubmit(onSubmit)}>  
           <div className="margin-bottom-30">
                    <input 
                        type="email" 
                        className={`form-control input-base ${errors.username ? 'is-invalid' : ''}`}
                        placeholder="Email"
                        name="username"
                        ref={register({
                            required:"Campo obrigatorio",
                            pattern: { 
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                    /> 
                    {errors.username && (
                        <div className="invalid-feedback d-block">
                           {errors.username.message}
                        </div>
                    )}
                </div>
                <div className="margin-bottom-30">
                    <input 
                        type="password" 
                        className={`form-control input-base ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Senha"
                        name="password"
                        ref={register({ required: "Campo obrigatório" })} 
                    /> 
                    {errors.password && (
                        <div className="invalid-feedback d-block">
                           {errors.password.message}
                        </div>
                    )}
                </div>
                <div>
                    <ButtonLogin text="Fazer Login" />
                </div>
                
           </form>
       </RotaCard>
    )
}

export default Login;