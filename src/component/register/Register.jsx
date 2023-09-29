import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/Firebase.config";
import { useState } from "react";
import { BiShow} from 'react-icons/bi';
import { AiFillEyeInvisible} from 'react-icons/ai';
import { Link } from "react-router-dom";


const Register = () => {
    const [registerError,setRegisterError]=useState('');
    const [success,setSuccess]=useState('')
    const [showPassWord,setShowPassword]=useState(false)
    const handleRegister=e=>{
        e.preventDefault();
        console.log('clicked submit btn')
        const email=e.target.email.value;
        // console.log(email);
        const password=e.target.password.value;
        const accepted=e.target.terms.checked;

        setRegisterError('')
        setSuccess('')

              if(password.length<6){
                 setRegisterError('Password should be at least 6 characters')
                 return
              }
              else if(!/[A-Z]/.test(password)){
                setRegisterError('At least 1 charecter will UpperCase')
                return
              }
              else if(!accepted){
                setRegisterError('Accept Our terms and condition')
                return;
              }
        // console.log(password)
        
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess('Registration compleate succesfully')

            sendEmailVerification(result.user)
            .then(()=>{
                alert('please check your email varification')
                if(result.user.emailVarified){
                    setSuccess('user logged in successfully')
                }
                else{
                    alert('please verify your email Address')
                }
            })
        })

        
        .catch(error=>{
            console.log(error)
            setRegisterError(error.message)
        })
    }
    return (
        <div className="border-2 border-black rounded-xl w-2/4 mx-auto mt-20 py-16">
            <div className="w-2/4 mx-auto">
            <h2 className="text-center font-bold text-4xl">Please Registration</h2>
             <form onSubmit={handleRegister}>
                   <input className="border-2 mb-4 w-3/4 ml-5 mt-5 border-black " type="e-mail" name="email" placeholder="Email" required /> <br />
                   <div className="flex items-center justify-center">
                   <input className="border-2 mb-4 w-3/4 mr-10 mt-5 relative border-black " type={showPassWord?"text":'password'} name='password' placeholder="password" required />
                   <span className="absolute ml-48" onClick={()=>setShowPassword(!showPassWord)}>{showPassWord?<AiFillEyeInvisible></AiFillEyeInvisible>:<BiShow></BiShow>}</span>
                   </div>
                   <br />
                   <div className="mb-2">
                         <input className="ml-5" type="checkbox" name="terms" id="terms" />
                         <label className="ml-2 " htmlFor="terms"> Accept our <a className="text-gray-400" href="">Terms And Condition</a></label>
                        
                   </div>

                   <input className="btn btn-secondary w-3/4 ml-5" type="submit" value="Register" />
             </form>

             {
                registerError&&<p className="text-red-600">{registerError}</p>
             }
            </div>

            {
                success&&<p className="text-center font-semibold text-2xl mt-4 text-green-800">{success}</p>

            }

                <p className="text-center">Already HAve an Account? please go to <Link  className="text-gray-400" to="/login">Log In</Link></p>
        </div>
    );
};

export default Register;