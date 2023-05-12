import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function SubmitCollectionpage() {
    const [title,setTitle]= useState("")
    const [image,setImage]= useState("")
    const [price,setPrice]= useState()
    const [description,setDescription]= useState("")
    const [error,setError] = useState("")



    function submitHandler(e){
        e.preventDefault()
        if(!title || !image || !price || !description){
            setError ("please fill all field")
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
                        <form>

                            <div className="form-outline mb-2">
                                <input onChange={e => setTitle(e.target.value)} type="email" id="form1Example1" className="form-control" />
                                <label className="form-label" htmlFor="form1Example1">Collection Title</label>
                            </div>

                            <div className="form-outline mb-2">
                                <input onChange={e => setImage(e.target.value)} type="text" id="form1Example2" className="form-control" />
                                <label className="form-label" htmlFor="form1Example2">Collection Avater</label>
                            </div>

                            <div className="form-outline mb-2">
                                <input onChange={e => setPrice(e.target.value)} type="number" id="form1Example2" className="form-control" />
                                <label className="form-label" htmlFor="form1Example2">Collection Price</label>
                            </div>
                            <div class="form-outline mb-4">
                                <textarea onChange={e => setDescription(e.target.value)} class="form-control" id="form6Example7" rows="4"></textarea>
                                <label class="form-label" for="form6Example7">Collection Description</label>
                            </div>




                            <button onSubmit={submitHandler} type="submit" className="btn btn-outline-primary btn-block form-control w-100">Submit Collection</button>
                        </form>

                    </main>
                </div>
            </div>
        </div>
    </>
}