import axios from "axios"
import { useNavigate } from "react-router-dom"

export function useSignUpAuth() {
    const navigate = useNavigate()

    return (body) => {
        axios.post(`${import.meta.env.VITE_API_URL}}/sign-up`, body)
            .then(res => navigate("/"))
            .catch(err => alert(err.response.data))
    }
}

