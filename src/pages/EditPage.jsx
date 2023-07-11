import styled from "styled-components"
import { useLocation, useParams } from "react-router-dom"
import { useForms, useOut } from "../components/hooks/useIn"
import { useEditTransaction } from "../components/authorizations/transactions"

export default function EditTransactionsPage() {
  const { type } = useParams()
  const { state: { _id, description, value, type: apiType } } = useLocation()
  const { forms, handleForms} = useForms({ description, value })
  const typeText = type === "entrada" ? "Entrada" : "Saída"
  useOut()
  const editTransaction = useEditTransaction()

  function submitForm(e) {
    e.preventDefault()
    editTransaction(_id, { ...forms, type: apiType })
  }

  return (
    <TransactionsContainer>
      <h1>Editar {typeText}</h1>
      <form onSubmit={submitForm}>
        <input
          required
          type="number"
          placeholder="Valor"
          name="value"
          value={forms.value}
          onChange={handleForms}
        />
        <input
          required
          placeholder="Descrição"
          name="description"
          value={forms.description}
          onChange={handleForms}
        />
        <button type="submit">Atualizar {typeText}</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.section`
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