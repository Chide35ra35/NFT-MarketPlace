
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import Header from "../components/Header"
import http from "../http"





export default function LoginPage() {
   const [error, setError] = useState("")
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   const navigate =useNavigate();


   async function submitHandler(e){
    e.preventDefault()
    if(!email || !password){
        setError("Please fill all field")
        return;
    }
    const{data} = await http.post("/user/login",{email,password})
    if (data.error) {
        setError(data.error)
    }
    if (data.success) {
        navigate("/")
        Swal.fire("Done", data.success, "success")
    }
   }
    return <>
    <Header></Header>
        <div className="login row ">
            <form onSubmit={submitHandler} action="" className="form col-lg-7 col-sm-12  p-3">
                <h2 className="mb-3 text-center text-white mt-5">Login</h2>
                {error && <div className="alert alert-danger p-2 my-2">{error}</div>}
                <input onChange={e => setEmail(e.target.value)} type="text" className="form-control mb-3 mt-4" placeholder="Email" />
                <input onChange={e => setPassword(e.target.value)} type="password" className="form-control mb-3 mt-4" placeholder="Password" />
                <button  className="form-control mb-3 btn btn-primary mt-4">login</button>
                <p>Dont have an account, <Link to="/register">Register</Link></p>

            </form>
        </div>
    </>
}
    