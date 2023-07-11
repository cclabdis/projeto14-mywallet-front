import styled from "styled-components"

import useQuickOut from "../../hooks/useQuickOut"
import { useParams } from "react-router-dom"
import { useForms } from "../components/hooks/useIn"
import { useAddTransaction } from "../../services/trans"


export default function AddtransPage() {
  const { forms, handleForms } = useForms({ description: "", value: "" })
  const { type } = useParams()
  const typeText = type === "entrada" ? "Entrada" : "Saída"
  const addTransaction = useAddTransaction()
  useQuickOut()

  function submitForm(e) {
    e.preventDefault()
    const body = { ...forms, type: type === "entrada" ? "income" : "expense" }
    addTransaction(body)
  }

  return (
    <transContainer>
      <h1>Nova {typeText}</h1>
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
        <button type="submit">Salvar {typeText}</button>
      </form>
    </transContainer>
  )
}

const transContainer = styled.main`
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
