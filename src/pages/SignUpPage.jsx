import {Link, useNavigate} from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import {useForms, useIn} from "../components/hooks/useIn"
// import { useSignUpAuth } from "../components/authorizations/Auth"
import axios from "axios";
// import {useEffect, useState} from "react";


export default function SignUpPage() {
  // const [loading,setLoading] = useState(false);
  const navigate = useNavigate()
  
  const {forms, handleForms} = useForms(
    {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
  useIn()

  // const [loggedUser, setLoggedUser] = useState([]);
  

  // function useSignUpAuth(forms)  {
  //   	axios.post(`${import.meta.env.VITE_API_URL}/login`,  {
  //     name: "",
  //     email: "",
  //     password: ""
  //   })
  //   		.then(() => {
  //   			navigate("/");
  //   		})
  //   		.catch(err => alert(err))
  //     } 


  function useSignUpAuth(forms)  {
    	axios.post(`${import.meta.env.VITE_API_URL}}/sign-up`, forms)
    		.then(() => {
    			navigate("/");
    		})
    		.catch(err => console.log(err))
      } 

  function submitForm(e) {
    e.preventDefault()
    console.log("alou")
    if (forms.password !== forms.confirmPassword) {
      
      delete forms.confirmPassword
      return alert("Os campos de senhas precisam ser iguais!")
    }

    alert("entrou aqui!1")
    delete forms.confirmPassword
    useSignUpAuth(forms)


    // return () =>
    // const res = axios.post(`${import.meta.env.VITE_API_URL}}/sign-up`, forms).then(res => res)
    //   .catch(err => alert(err))

    // if (res.status >= 200 && res.status <= 299) {

    //   useEffect(() => {
    //     navigate("/")
    //   }, [])
    // }

  }

  return (
    <SingUpContainer>
      <form onSubmit={submitForm}>
        <MyWalletLogo/>
        <input
          data-test="name"
          type="text"
          required
          placeholder="Nome"
          name="name"
          value={forms.name}
          onChange={handleForms}
        />
        <input
          data-test="email"
          required
          type="email"
          autoComplete="username"
          placeholder="E-mail"
          name="email"
          value={forms.email}
          onChange={handleForms}
        />
        <input
          data-test="password"
          required
          minLength={3}
          type="password"
          autoComplete="new-password"
          placeholder="Senha"
          name="password"
          value={forms.password}
          onChange={handleForms}
        />
        <input
          data-test="conf-password"
          required
          minLength={3}
          type="password"
          autoComplete="new-password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          value={forms.confirmPassword}
          onChange={handleForms}
        />
        <button
          data-test="sign-up-submit"
          type="submit">
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
      
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
