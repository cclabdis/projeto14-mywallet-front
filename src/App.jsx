import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
// import transPage from "./pages/TransactionPage"
import { useState } from "react"
import AuthContext from "./components/AuthContext"

export default function App() {
  const [ token, setToken ] = useState(localStorage.getItem("token"))
  const [userName, setUserName] = useState(localStorage.getItem("userName"))
  
  return (
    <AuthContext.Provider value ={{ token, setToken, userName, setUserName }}>
      <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/nova-transacao/:tipo" element={<transPage />} /> */}
          </Routes>
        </BrowserRouter>
      </PagesContainer>
    </AuthContext.Provider>
  )
}

const PagesContainer = styled.main`
  background-color: #8c11be;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
