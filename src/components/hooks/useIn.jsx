import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import AuthContext from "../AuthContext"

export default function useIn() {
    const { userName, token } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (token && userName) navigate("/home")
    }, [])
}