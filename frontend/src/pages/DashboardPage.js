import { Link, useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { useState , useEffect} from "react"
import http from "../http"
import Swal from "sweetalert2"





export default function DashboardPage() {
    const [price, setPrice] = useState()
    const [image , setImage] = useState("")
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const navigate = useNavigate()
    

    const [collections, setCollections] = useState([])
    const userInfor = JSON.parse(localStorage.getItem('userInfor'))

  async function getCollections() {
    const { data } = await http.get(`/collections/owner/${userInfor._id}`)

    setCollections(data)

  }
  useEffect(() => {
    getCollections()
    !userInfor && navigate("/login");
  }, [])

  async function deleteHandler(id){
    const {data} = await http.delete(`/collections/${id}`)
    if(data.error){
      Swal.fire("Error", data.error, "error")
    }
    if(data.success){
      Swal.fire("Done", data.success, "success");
      //Run the getProducts function to get all product except the product 
      //that has just been deleted
      getCollections();
     }
  }
// let collectionItems = JSON.parse(localStorage.getItem("collectionItems"));
// function deleteHandler(id) {
//     collectionItems = collectionItems.filter(x => x._id !== id);
//     localStorage.setItem("collectionItems", JSON.stringify(collectionItems));
//     // RELOAD THE PAGE
//     window.location.reload();
//   }


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
                            <div className="row g-6 mb-6">
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Collections</span>
                                                    <span className="h3 font-bold mb-0">{collections.length}</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                        <i className="bi bi-credit-card" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-0 text-sm">
                                                <span className="badge badge-pill bg-soft-success text-success me-2">
                                                    <i className="bi bi-arrow-up me-1" />215
                                                </span>
                                                <span className="text-nowrap text-xs text-muted">Since last month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">New projects</span>
                                                    <span className="h3 font-bold mb-0">215</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                        <i className="bi bi-people" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-0 text-sm">
                                                <span className="badge badge-pill bg-soft-success text-success me-2">
                                                    <i className="bi bi-arrow-up me-1" />30%
                                                </span>
                                                <span className="text-nowrap text-xs text-muted">Since last month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                                                    <span className="h3 font-bold mb-0">1.400</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                        <i className="bi bi-clock-history" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-0 text-sm">
                                                <span className="badge badge-pill bg-soft-danger text-danger me-2">
                                                    <i className="bi bi-arrow-down me-1" />-5%
                                                </span>
                                                <span className="text-nowrap text-xs text-muted">Since last month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <div className="card shadow border-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span>
                                                    <span className="h3 font-bold mb-0">95%</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                        <i className="bi bi-minecart-loaded" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 mb-0 text-sm">
                                                <span className="badge badge-pill bg-soft-success text-success me-2">
                                                    <i className="bi bi-arrow-up me-1" />10%
                                                </span>
                                                <span className="text-nowrap text-xs text-muted">Since last month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow border-0 mb-7">
                                <div className="card-header mb-o d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">My NFTs</h5>
                                    <Link to="/submit-collection">
                                        <button className="  btn btn-outline-primary">Submit-collection</button>
                                    </Link>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-nowrap">
                                        <thead className="thead-light">
                                            <tr>
                                                
                                                <th scope="col">Date</th>
                                                <th scope="col">Collection</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Status</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                         {/* {collections.length === 0 ? <h3>No Collections Found</h3>: */}
                                        { collections.map(x => {
                                            return  <tr>
                                           
                                            <td>
                                                {x.createdAt && x.createdAt.substr(0,10)}
                                            </td>
                                            <td>
                                                <img alt="..." src={x.image} className="avatar avatar-xs rounded-circle me-2 collection-image" />
                                                <a className="text-heading font-semibold ms-5" href="#">
                                                    {x.title}
                                                </a>
                                            </td>
                                            <td>
                                                {x.price} ETH
                                            </td>
                                            <td>
                                                <span className="badge badge-lg badge-dot">
                                                    <i className="bg-warning" />{x.description}
                                                </span>
                                            </td>
                                            <td className="text-end">
                                                <a href="/dashboard" className="btn btn-sm btn-neutral">View</a>
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