import { useState } from "react"

export default function useForms(initialForms) {
    const [form, setForm] = useState(initialForms)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return { form, handleForm }
}