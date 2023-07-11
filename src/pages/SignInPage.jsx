import styled from "styled-components"
import {Link} from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import {useForms, useIn} from "../components/hooks/useIn.jsx"
import {useLoginAuth} from "../components/authorizations/Auth.jsx"
// import AuthContext from "../components/AuthContext"

export default function SignInPage() {

  const {forms, handleForms} = useForms({email: "", password: ""})
  const login = useLoginAuth()
  useIn()

  function submitForms(e) {
    e.preventDefault()

    login(forms)
  }


  return (
    <SingInContainer>
      <form onSubmit={submitForms}>
        <MyWalletLogo/>
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
        <button data-test="sign-in-submit" type="submit">Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
