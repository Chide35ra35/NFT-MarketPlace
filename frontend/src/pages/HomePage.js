import { useEffect, useState } from "react"
import Header from "../components/Header"
import http from "../http"


export default function HomePage() {

  const [collections, setCollections] = useState([])


  async function getCollections() {
    const { data } = await http.get("/collections")

    setCollections(data)

  }
  useEffect(() => {
    getCollections()
  }, [])


  return <>
    <Header></Header>
    <div className="hero-section">
      <img src="https://uploads-ssl.webflow.com/604065ca49779f0ad829e4d0/604067e236038ae18cdfe1b7_agif2opt.gif" alt="" />
      <h3>NFT MarketPlace</h3>
      <h5>Register Today, Buy ans Sell NFTs</h5>
    </div>
    {/* Grid starts here  */}
    <div className="container mt-5 d-flex flex-wrap justify-content-center">

      {collections.map(x => {
        return <div className="col" key={x._id}>
        <div className="card main-card" style={{ width: '18rem' }}>
          <img src={x.owner.image} alt="" className="collection-owner-image"/>
          <img src={x.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{x.title}</h5>
            <p className="card-text">${x.price}</p>
            <a href="#" className="btn btn-primary w-100">{x.description}</a>
          </div>
        </div>
        </div>
      })}



    </div>

    {/* Grid ends here  */}

  </>
}
// import { useEffect, useState } from "react"
// import Header from "../components/Header"
// import http from "../http"
// import { get } from "mongoose"
// export default function HomePage() {

//   const [collections, setCollections] = useState([])
//   async function getCollections() {
//     const { data } = await http.get("/collections")

//     setCollections(data)

//   }
//   useEffect(() => {
//     getCollections()
//   }, [])
//   return <>
//     <Header></Header>
//     <div className="hero-section">
//       <img src="https://uploads-ssl.webflow.com/604065ca49779f0ad829e4d0/604067e236038ae18cdfe1b7_agif2opt.gif" alt="" />
//       <h3>NFT MARKET PLACE</h3>
//       <h5>Register Today, Buy and Sell NFTS</h5>
//     </div>

//     <div className="container mt-5 d-flex flex-wrap justify-content-center">

//       {collections.map(x => {
//         return <div className="col" key={x._id}>
//           <div className="card main-card" style={{ width: "18rem" }}>
//             <img src={x.image} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">{x.title}</h5>
//               <p className="card-text">${x.price}</p>
//               <div className="btn btn-primary w-100 w-100">Add To Cart <i className="fa fa-cart-plus"></i></div>
//             </div>
//           </div>
//         </div>
//       })}
//     </div>
//   </>
// }