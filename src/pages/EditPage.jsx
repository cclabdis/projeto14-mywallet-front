import styled from "styled-components"
import {useLocation, useParams} from "react-router-dom"
import {useForms, useOut} from "../components/hooks/useIn.jsx"
import {useEditTransaction} from "../components/authorizations/Transactions.jsx"

export default function EdittransPage() {
  const {type} = useParams()
  const {state: {_id, description, value, type: apiType}} = useLocation()
  const {forms, handleForms} = useForms({description, value})
  const typeText = type === "entrada" ? "Entrada" : "Saída"
  useOut()
  const editTransaction = useEditTransaction()






  function submitForm(e) {
    e.preventDefault()
    editTransaction(_id, {
      ...forms, 
      type: apiType
    })
  }

  return (
    <transContainer>
      <h1>Editar {typeText}</h1>
      <form onSubmit={submitForm}>
        <input
        data-test="registry-amount-input"
          required
          type="number"
          placeholder="Valor"
          name="value"
          value={forms.value}
          onChange={handleForms}
        />
        <input
        data-test="registry-name-input" 
          required
          placeholder="Descrição"
          name="description"
          value={forms.description}
          onChange={handleForms}
        />
        <button data-test="registry-save"  type="submit">Atualizar {typeText}</button>
      </form>
    </transContainer>
  )
}

const transContainer = styled.section`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`