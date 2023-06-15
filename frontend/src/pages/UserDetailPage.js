import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import http from "../http";

export default function UserDetailPage(){
       const [user , setUser]=useState()

    const {id} = useParams();


    async function getUser(){
        const {data} = await http.get(`/users/${id}`)
        setUser(data);
    }
    useEffect(() => {
        getUser()
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
                    <main className="p-3">
          <img className="user-pic" src={user && user.image ? user.image : "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"} alt="" />
          <table className="table user-table ">
          <tr>
                <td>Email Address : {user && user.email}</td>
            </tr>
            <tr>
                <td>Username :{user && user.username}</td>

            </tr>
            <tr>
                <td>Password:{user && user.password} </td>
            </tr>
            <tr>
                <td>btcwallet:{user && user.btcwallet}</td>
            </tr>
            <tr>
                <td>ethwallet :{user && user.ethwallet}</td>
            </tr>
          </table>
        </main>
                </div>
            </div>
        </div>



       
    </>

    
}