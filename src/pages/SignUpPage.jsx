import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import useIn from "../components/hooks/useIn"
import { useSignUpAuth } from "../components/authorizations/auth"



export default function SignUpPage() {

  const { forms, handleForms } = useForm(
    { name: "", 
    email: "", 
    password: "", 
    confirmPassword: "" 
  })
  useIn()


  const signUp = useSignUpAuth()

  function submitForm(e) {e.preventDefault()
    if (forms.password !== forms.confirmPassword) return alert("As senhas divergem")

    delete forms.confirmPassword
    signUp(forms)
  }


  return (
    <SingUpContainer>
      <form onSubmit={submitForm}>
        <MyWalletLogo />
        <input
          required
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={handleForm}
        />
        <input
          required
          type="email"
          autoComplete="username"
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={handleForm}
        />
        <input
          required
          minLength={3}
          type="password"
          autoComplete="new-password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={handleForm}
        />
        <input
          required
          minLength={3}
          type="password"
          autoComplete="new-password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleForm}
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
