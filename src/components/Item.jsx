import styled from "styled-components"
import dayjs from "dayjs"
import {IoMdClose} from "react-icons/io"
import {useDeleteTransaction} from "./authorizations/Transactions.jsx"
import {useNavigate} from "react-router-dom"

export function TransactionItem({transaction, gettrans}) {
  const {_id, date, description, value, type} = transaction
  const deleteTransaction = useDeleteTransaction()
  const navigate = useNavigate()

  function onClickDelete() {
    const confirmDelete = window.confirm(`Tem certeza que deseja deletar ${description}?`)
    if (confirmDelete) {
      deleteTransaction(_id, gettrans)
    }
  }

  function onClickEdit() {
    navigate(
      `/editar-transacao/${type === "expense" ? "saida" : "entrada"}`,
      {state: transaction}
    )
  }

  return (
    <ItemContainer>

          <div>
            <span>{dayjs(date).format("DD/MM")}</span>
            <strong onClick={onClickEdit}>{description}</strong>
          </div>

          <RightContainer>
            <Value color={type}>{value.toFixed(2).toString().replace(".", ",")}</Value>
            <IoMdClose onClick={onClickDelete}/>
          </RightContainer>

    </ItemContainer>
  )
}

const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: ${"black"};

  div span {
    color: ${"#c6c6c6"};
    margin-right: 10px;
  }
`
const Value = styled.div`
  font-size: 16px;
  text-align: right;
  margin-right: 8px;
  color: ${(props) => (props.color === "income" ? "green" : "red")};
`
const RightContainer = styled.div`
  display: flex;
  color: ${"#c6c6c6"};
`
///ansactionItem