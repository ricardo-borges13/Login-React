import { useState, type ChangeEvent } from 'react';
import * as S from './Login.styled';
import * as AuthService from "../../services/api-service/authService";

export const Login = () => {

  const [values, setValues] = useState<AuthService.LoginForm>({
    email: "",
    password: "",
  });

  const handleInputValues = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setValues((valorAnterior) => ({
      ...valorAnterior,
      [name]: value
    })) 
   }

   const loginUser = async () => {
    try {
      console.log('chegei no try')
      AuthService.login(values)
    } 
    catch (error) {
      console.log('chegei no erro')
      alert((error as any).message)
    }
   }
 
  return (
    <S.Wrapper>
      <S.ContainerLogin>
        <h1>LOGIN</h1>
        <label htmlFor="user">Digite o e-mail</label>
        <input
          type="email"
          name="email"
          id="user"
          placeholder='E-mail'
          onChange={handleInputValues}
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder='Digite a senha'
          onChange={handleInputValues}
        />
        <button onClick={loginUser}>Entrar</button>

      </S.ContainerLogin>
    </S.Wrapper >

  );
};
