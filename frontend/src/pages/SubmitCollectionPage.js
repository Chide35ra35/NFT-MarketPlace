import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";
import axios from "axios";
import http from "../http";
import { useNavigate } from "react-router-dom";



export default function SubmitCollectionpage() {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")
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
        if (!image) {
            setError("please add your image");
            return;
        }
        if (!title || !price || !description) {
            setError("please fill all field");
            return;
        }
        const { data } = await http.post("/collections", { title, image, description, price, owner: userInfor._id })
        if (data.error) {
            setError(data.error);
        }
        if (data.success) {
            navigate("/dashboard")
            Swal.fire("Done", data.success, "success")


        }
    }
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
                        <h2 className="text-center mb-5">SUBMITCOLLECTION</h2>
                        <form onSubmit={submitHandler}>
                            {error && <div className="alert-danger my-3 p-3">{error}</div>}

                            <div className="form-outline mb-2">
                                <input onChange={e => setTitle(e.target.value)} type="text" id="form1Example1" className="form-control" />
                                <label className="form-label" htmlFor="form1Example1">Collection Title</label>
                            </div>

                            <div className="form-outline mb-2">
                                <input onChange={uploadImage} type="file" id="form1Example2" className="form-control" accept="image/*" />
                                <label className="form-label" htmlFor="form1Example2">Collection Avater</label>
                            </div>

                            <div className="form-outline mb-2">
                                <input onChange={e => setPrice(e.target.value)} type="text" id="form1Example2" className="form-control" />
                                <label className="form-label" htmlFor="form1Example2">Collection Price</label>
                            </div>
                            <div class="form-outline mb-4">
                                <textarea onChange={e => setDescription(e.target.value)} class="form-control" id="form6Example7" rows="4"></textarea>
                                <label class="form-label" for="form6Example7">Collection Description</label>
                            </div>




                            <button type="submit" className="btn btn-outline-primary btn-block form-control w-100">Submit Collection</button>
                        </form>

                    </main>
                </div>
            </div>
        </div>
    </>
}