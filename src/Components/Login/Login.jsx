import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const {userSignin}=useContext(AuthContext)

  const handleSignup=(e)=>{
    e.preventDefault()
  
    const email=e.target.email.value;
    const password=e.target.password.value;

    
 

    userSignin(email,password)
    .then(result=>{
      console.log(result.user)
      toast("Successfully login user")
    })
    .catch(error=>console.log(error))
    

  }
  return (
    <div
      className="bg-no-repeat bg-center bg-cover max-w-7xl mx-auto px-5 py-12 rounded mt-4 max-h-screen"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1500614264/photo/cyber-security-internet-and-personal-online-systems-high-security-login-screen-concept.jpg?s=612x612&w=0&k=20&c=bbpXbjtZNNERzV8JMMqyHneQjAR9E3GLHFrnRjUKBEY=)",
      }}
    >
      <div className="card  max-w-xs lg:max-w-md mx-auto mt-12 shadow-2xl bg-base-100">
        <h1 className="bg-indigo-900 text-white text-center py-6 text-2xl font-bold  underline-4  rounded-t-2xl ">
       Login
        </h1>
        <form className="card-body " onSubmit={handleSignup}>
          
          <div className="form-control">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="py-4 outline-none border-b-2 border-indigo-800"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="py-4 outline-none border-b-2 border-indigo-800"
              required
            />
              {/* <span className="text-red-600 font-bold">{errorPassword}</span>  */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p>Do you have a account? <span className="ml-3 text-indigo-600"><Link to='/signup'>Signup</Link></span></p>
          <div className="divider">OR</div>
          <p className="text-center font-medium">Login with social media</p>
          <div className="flex justify-around items-center mt-4">
            <span>
              <img
                src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29vZ2xlfGVufDB8fDB8fHww"
                className="w-16 h-10 rounded border-2 border-indigo-800 p-1"
                alt=""
              />
            </span>

           
         
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

