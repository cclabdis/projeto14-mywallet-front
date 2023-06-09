// import axios from "axios"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import AuthContext from "../AuthContext"
import {useContext} from "react"


// export function useSignUpAuth(forms) {
//   const navigate = useNavigate()

//   return () => {
//     axios.post(`${import.meta.env.VITE_API_URL}}/sign-up`, forms)
//       .then(res => navigate("/"))
//       .catch(err => alert(err))
//   }
// }

// export function useSignUpAuth(forms)  {
// 	axios.post(`http://localhost:5000/sign-up`, forms)
// 		.then((res) => {
// 			callback(res, false);
// 		})
// 		.catch((err) => {
// 			callback(err, true);
// 		});
//   }

export function useLoginAuth() {
  const navigate = useNavigate()
  const {setToken, setUserName} = useContext(AuthContext)

  return (body) => {
    axios.post(`${import.meta.env.VITE_API_URL}/login`, body)
      .then(res => {
        setToken(res.data.token)
        setUserName(res.data.userName)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userName", res.data.userName)
        navigate("/home")
      })
      .catch((err) => alert(err.response.data))
  }
}

export function useLogoutAuth() {
  const {token, setToken, setUserName} = useContext(AuthContext)
  const navigate = useNavigate()
  const config = {headers: {Authorization: `Bearer ${token}`}}

  return () => {
    axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, config)
      .then(() => {
        setToken(undefined)
        setUserName(undefined)
        localStorage.clear()
        navigate("/")
      })
      .catch((err) => alert(err.response.data))
  }
}