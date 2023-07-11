import {useContext, useEffect, useState} from "react"
import AuthContext from "../AuthContext"
import axios from "axios"
import {useNavigate} from "react-router-dom"


/// refazer todo que nada funciona
export function useGettrans() {
  const [trans, settrans] = useState(undefined)
  const {token} = useContext(AuthContext)

  const config = {
    headers:
      {Authorization: `Bearer ${token}`}
  }

  function gettrans() {
    axios.get(`${import.meta.env.VITE_API_URL}/trans`, config)
      .then(res => settrans(res.data))
      .catch(err => alert(err.response.data))
  }

  useEffect(() => {
    gettrans()
  }, [])

  return {trans, gettrans}
}

export function useAddTransaction() {
  const {token} = useContext(AuthContext)
  const navigate = useNavigate()

  const config = {headers: {Authorization: `Bearer ${token}`}}

  return (body) => {
    axios.post(`${import.meta.env.VITE_API_URL}/trans`, body, config)
      .then(res => navigate("/home"))
      .catch(err => alert(err))
  }

}

export function useDeleteTransaction() {
  const {token} = useContext(AuthContext)
  const config = {headers: {Authorization: `Bearer ${token}`}}

  return (id, gettrans) => {
    axios.delete(`${import.meta.env.VITE_API_URL}/trans/${id}`, config)
      .then(res => gettrans())
      .catch(err => alert(err))
  }
}

export function useEditTransaction() {
  const {token} = useContext(AuthContext)
  const config = {headers: {Authorization: `Bearer ${token}`}}
  const navigate = useNavigate()

  return (id, body) => {
    axios.put(`${import.meta.env.VITE_API_URL}/trans/${id}`, body, config)
      .then(res => navigate("/home"))
      .catch(err => alert(err))
  }
}