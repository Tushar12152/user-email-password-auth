import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import auth from "../../firebase/Firebase.config";
import { Link } from "react-router-dom";


const Login = () => {
   const [showPassword,setShowPassword]=useState(false)
   const [loginError,setLoginError]=useState('')
   const [logIn,setLogIn]=useState('')
   const emailRef=useRef(null)


    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        setLogIn('')
        setLoginError('')
        // console.log(email,password)
        signInWithEmailAndPassword(auth,email,password)
        .then( result=>{
            console.log(result.user)
            setLogIn('wow!!!!! you are logged in ')
        })
        .catch(error=>{
            console.log(error)
            setLoginError(error.message)
            })
            
    }

    const handleresetPassword=()=>{
       const email=emailRef.current.value;
       if(!email){
        console.log('please provide an email', emailRef.current.value)
        return
       }
       else if( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
           console.log('please write a valid email')
       }

       sendPasswordResetEmail(auth,email)
       .then(()=>{
        alert('please chck your email')
       })
       .catch(error=>{
        console.log(error)
       })
        
    }

    return (
        <div>
              <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
         <form onSubmit={handleLogin}>

         <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                ref={emailRef}

          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         <div className="relative">
         <input  type={showPassword?"text":"password"}name="password" placeholder="password"  className="input input-bordered w-full" />
          <span className="absolute top-4 right-1" onClick={()=>setShowPassword(!showPassword)}>
            {
                showPassword?<AiFillEyeInvisible></AiFillEyeInvisible>:<BiShow></BiShow>
            }
          </span>
         </div>
          <label className="label">
            <a onClick={handleresetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
         </form>

         {
            loginError&&<p className="text-red-600 text-center">{loginError}</p>
         }

         {
              logIn&& <p className="text-green-950 text-center  font-bold text-4xl">{logIn}</p>
         }

         <p className="text-center">New to this website? please go to <Link  className="text-gray-400" to="/register">Register</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;