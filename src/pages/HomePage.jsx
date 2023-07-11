import styled from "styled-components"
import {Oval} from "react-loader-spinner"
import {BiExit} from "react-icons/bi"
import {useNavigate} from "react-router-dom"
import {useContext} from "react"
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai"
import AuthContext from "../components/AuthContext"
import {useLogoutAuth} from "../components/authorizations/Auth.jsx"
import {useOut} from "../components/hooks/useIn"
import {useGettrans} from "../components/authorizations/trans.jsx"

export default function HomePage() {
  const {userName} = useContext(AuthContext)
  const navigate = useNavigate()
  const logout = useLogoutAuth()
  const {trans, gettrans} = useGettrans()
  useOut()

  function calcBalance() {
    const sum = trans.reduce((acc, cur) => cur.type === "income" ? acc + cur.value : acc - cur.value, 0)
    return sum.toFixed(2)
  }

  const balance = trans && calcBalance()

  return (
    <HomeContainer>
      <Header>
        <h1>Olá, {userName}</h1>
        <BiExit onClick={logout}/>
      </Header>

      <transContainer>
        {!trans && <Oval color={mainColor} secondaryColor={mainColorLight}/>}
        {trans && trans.length === 0 && <>Não há registros de entrada ou saída</>}
        {trans && trans.length > 0 && (
          <ListItemContainer>
            <ul>
              {/* {trans.map((t) => <TransactionItem key={t._id} transaction={t} gettrans={gettrans} />)} */}
            </ul>
            <article>
              <strong>Saldo</strong>
              <Value color={balance > 0 ? "positivo" : "negativo"}>{balance.toString().replace(".", ",")}</Value>
            </article>
          </ListItemContainer>
        )}
      </transContainer>


      <ButtonsContainer>
        <button onClick={() => navigate("/nova-transacao/entrada")}>
          <AiOutlinePlusCircle/>
          <p>Nova <br/> entrada</p>
        </button>
        <button onClick={() => navigate("/nova-transacao/saida")}>
          <AiOutlineMinusCircle/>
          <p>Nova <br/>saída</p>
        </button>
      </ButtonsContainer>

    </HomeContainer>
  )
}

const mainColor = styled.p`
  color: #8c11be
`
const mainColorLight = styled.p`
  color: #a679b8
`
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
`

const transContainer = styled.article`
  flex-grow: 1;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  article {
    display: flex;
    justify-content: space-between;

    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`
const ButtonsContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 0;
  display: flex;
  gap: 15px;

  button {
    width: 50%;
    height: 115px;
    font-size: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: 18px;
    }
  }
`
const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "positivo" ? "green" : "red")};
`
const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;

  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`