import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import useIn from "../components/hooks/useIn"
import { useSignUpAuth } from "../components/authorizations/auth"
import useForms from "../components/hooks/useForms"




export default function SignUpPage() {

  const { forms, handleForms } = useForms(
    { name: "", 
    email: "", 
    password: "", 
    confirmPassword: "" 
  })
  useIn()


  const signUp = useSignUpAuth()

  function submitForm(e) 
    {e.preventDefault()
    if (forms.password !== forms.confirmPassword) return alert("As senhas divergem")

    delete forms.confirmPassword
    signUp(forms)
  }


  return (
    <SingUpContainer>
      <form onSubmit={submitForm}>
        <MyWalletLogo />
        <input data-test="name" 
          required
          placeholder="Nome"
          name="name"
          value={forms.name}
          onChange={handleForms}
        />
        <input data-test="email"
          required
          type="email"
          autoComplete="username"
          placeholder="E-mail"
          name="email"
          value={forms.email}
          onChange={handleForms}
        />
        <input  data-test="password" 
          required
          minLength={3}
          type="password"
          autoComplete="new-password"
          placeholder="Senha"
          name="password"
          value={forms.password}
          onChange={handleForms}
        />
        <input data-test="conf-password" 
          required
          minLength={3}
          type="password"
          autoComplete="new-password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          value={forms.confirmPassword}
          onChange={handleForms}
        />
        <button type="submit">Cadastrar</button>
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
