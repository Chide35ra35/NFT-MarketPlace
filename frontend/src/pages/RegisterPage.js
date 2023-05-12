import Header from "../components/Header"


export default function RegisterPage(){
    return <>
    <Header></Header>
    <div className="login row">
            <form  action="" className="form col-lg-7 col-sm-12 p-3">

                <h2 className="my-3 text-white text-center">Register</h2>
                <input type="email" className="form-control mb-3 " placeholder="Email Address" />
                <input type="text" className="form-control mb-3 " placeholder="Username" />
                <input type="password" className="form-control mb-3" placeholder="Password" />
                <input  type="password" className="form-control mb-3" placeholder="Confirm Password" />
                <input type="checkbox" /> Agree to our privacy policy
                <button className="form-control mb-3 btn btn-primary">Register</button>
                

            </form>
        </div>
    </>
}