import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import AuthContext from "../AuthContext"


//entrada

export function useIn() {
    const { userName, token } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (token && userName) navigate("/home")
    }, [])
}

///forms

export function useForms(initialForms) {
    const [forms, setForms] = useState(initialForms)

    function handleForms(e) {
        setForms({ ...forms, [e.target.name]: e.target.value })
    }

    return { forms, handleForms }
}