import styled from "styled-components"
import { Link } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import useIn from "../components/hooks/useIn"
import { useLoginAuth } from "../components/authorizations/auth"
import useForms from "../components/hooks/useForms"


export default function SignInPage() {

  const { forms, handleForms } = useForms({ email: "", password: "" })
  const login = useLoginAuth()
  useIn()

  function submitForm(e) {
    e.preventDefault()
    login(forms)
  }


  return (
    <SingInContainer>
      <form onSubmit={submitForm}>
        <MyWalletLogo />
        <input
          required
          type="email"
          autoComplete="username"
          placeholder="E-mail"
          name="email"
          value={forms.email}
          onChange={handleForms}
        />
        <input
          required
          minLength={3}
          type="password"
          autoComplete="new-password"
          placeholder="Senha"
          name="password"
          value={forms.password}
          onChange={handleForms}
        />
        <button type="submit">Entrar</button>
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
