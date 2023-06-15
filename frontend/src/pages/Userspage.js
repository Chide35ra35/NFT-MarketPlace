import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { useState , useEffect} from "react"
import http from "../http"
import Swal from "sweetalert2"




export default function UsersPage() {
    const [price, setPrice] = useState()
    const [image , setImage] = useState("")
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    

    const [users, setUsers] = useState([])


  async function getUsers() {
    const { data } = await http.get("/users")

    setUsers(data)

  }
  useEffect(() => {
    getUsers()
  }, [])
  async function deleteHandler(id){
    const {data} = await http.delete(`/users/${id}`)
    if(data.error){
      Swal.fire("Error", data.error, "error")
    }
    if(data.success){
      Swal.fire("Done", data.success, "success");
      //Run the getProducts function to get all product except the product 
      //that has just been deleted
      getUsers();
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
                                    
                                    {/* Actions */}

                                </div>
                                {/* Nav */}

                            </div>
                        </div>
                    </header>
                    {/* Main */}
                    <main className="py-6 bg-surface-secondary">
                        <div className="container-fluid">
                            {/* Card stats */}
                           
                            <div className="card shadow border-0 mb-7">
                                <div className="card-header mb-o d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">All Collections</h5>
                                    <Link to="/submit-collection">
                                        <button className="  btn btn-outline-primary">Submit-collection</button>
                                    </Link>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-nowrap">
                                        <thead className="thead-light">
                                            <tr>
                                    
                                                <th scope="col">Date</th>
                                                <th scope="col">User</th>
                                                <th scope="col">btc</th>
                                                <th scope="col">eth</th>
                                                <th scope="col">Status</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                         {/* {collections.length === 0 ? <h3>No Collections Found</h3>: */}
                                        { users.map(x => {
                                            return  <tr>
                                            
                                            <td>
                                                {x.createdAt && x.createdAt.substr(0,10)}
                                            </td>
                                            <td>
                                                <img alt="..." src={x.image} className="avatar avatar-xs rounded-circle me-2 collection-image" />
                                                <a className="text-heading font-semibold ms-5" href="#">
                                                    {x.username}
                                                </a>
                                            </td>
                                            <td>
                                                {x.btcwallet}
                                            </td>
                                            <td>
                                                {x.ethwallet}
                                            </td>
                                           
                                            <td className="text-end">
                                                <a href={`/user/${x._id}`} className="btn btn-sm btn-neutral">View</a>
                                                <button onClick={() => deleteHandler(x._id)} type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                    <i className="bi bi-trash" />
                                                </button>
                                            </td>
                                        </tr>
                                         })}   
                                           
                                            
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer border-0 py-5">
                                    <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>


    </>
}