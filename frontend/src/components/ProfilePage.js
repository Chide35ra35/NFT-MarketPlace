


import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";
import axios from "axios";
import http from "../http";
import { useNavigate } from "react-router-dom";



export default function Profilepage() {
    const [username, setUsername] = useState("")
    const [image, setImage] = useState("")
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [btcwallet, setBtcwallet] = useState("")
    const [ethwallet, setEthwallet] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const userInfor = JSON.parse(localStorage.getItem("userInfor"))

    async function uploadImage(e) {
        const file = e.target.files[0];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "Jamaica");
        data.append("cloud_name", "jamaica");

        try {
            const result = await axios.post("https://api.cloudinary.com/v1_1/jamaica/image/upload", data)
            Swal.fire("Image Approved, Proceed to save your NFT")
            setImage(result.data.secure_url)
        } catch (error) {
            Swal.fire(error.message)
        }
    }

    async function submitHandler(e) {
        e.preventDefault()
         
        if (password && password.length < 4){
            setError("Password must be at least 4 characters long")
            return
        }
if(password  !== confirmPassword){
    setError("Passwords do not match")
    return;
}


      
        const { data } = await http.put(`/users/${userInfor._id}`, { username, image,  password,btcwallet,ethwallet  })
        if (data.error) {
            setError(data.error);
        }
        if (data.success) {
            localStorage.setItem("userInfor", JSON.stringify(data.user))
            Swal.fire("Done", data.success, "success")
            window.location.reload();


        }
    }

    useEffect(() =>{
        setUsername(userInfor.username);
        setBtcwallet(userInfor.btcwallet)
        setEthwallet(userInfor.wallet)
     },[])
    return <>
        <div>
            {/* Dashboard */}
            <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                {/* Vertical Navbar */}
                <Sidebar></Sidebar>
                {/* Main content */}
                <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                    <header className="bg-surface-primary border-bottom pt-6">
                        <div className="container-fluid">
                            <div className="mb-npx">
                                <div className="row align-items-center">
                                    <div className="col-sm-6 col-12 mb-4 mb-sm-0 pb-5">
                                        {/* Title */}
                                        <h1 className="h2 mb-0 ls-tight">Dashboard</h1>
                                    </div>
                                    {/* Actions */}

                                </div>
                                {/* Nav */}

                            </div>
                        </div>
                    </header>
                    {/* Main */}
                    <main className="p-3 bg-surface-secondary">
                        <h2 className="text-center mb-5">UPDATE PROFILE</h2>
                        <form onSubmit={submitHandler}>
                            {error && <div className="alert-danger my-3 p-3">{error}</div>}
                         
                         <div> <img className="profile-picture mb-4" src={userInfor.image} alt="" /> </div>

                            <div className="form-outline mb-2">
                                <input onChange={uploadImage} type="file" id="form1Example2" className="form-control" accept="image/*" />
                                <label className="form-label" htmlFor="form1Example2">Select profile picture</label>
                             
                            </div>

                            <div className="form-outline mb-2">
                                <input onChange={e => setUsername(e.target.value)} value={username} type="text" id="form1Example1" className="form-control" />
                                <label className="form-label" htmlFor="form1Example1">Update Username</label>
                            </div>


                            <div className="form-outline mb-2">
                                <input onChange={e => setPassword(e.target.value)}  type="password" id="form1Example2" className="form-control" />
                                <label className="form-label" htmlFor="form1Example2">Change Password</label>
                            </div>

                            <div className="form-outline mb-2">
                                <input onChange={e => setConfirmPassword(e.target.value)} type="password" id="form1Example2" className="form-control" />
                                <label className="form-label" htmlFor="form1Example2">Comfirm newPassword</label>
                            </div>

                            <div className="form-outline mb-2">
                                <input onChange={e => setBtcwallet(e.target.value)} value={btcwallet}  type="text" id="form1Example1" className="form-control" />
                                <label className="form-label" htmlFor="form1Example1">BTC : </label>
                            </div>
                            <div className="form-outline mb-2">
                                <input onChange={e => setEthwallet(e.target.value)} value={ethwallet} type="text" id="form1Example1" className="form-control" />
                                <label className="form-label" htmlFor="form1Example1">ETH :</label>
                            </div>

                            <button type="submit" className="btn btn-outline-primary btn-block form-control w-100">Update Information</button>
                        </form>

                    </main>
                </div>
            </div>
        </div>
    </>
}