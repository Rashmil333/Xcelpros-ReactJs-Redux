import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import login from './img/login1.jpg';
import currentperson from "./actions/current";


const Login = () => {
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const[show,setShow]=useState(false);
    const list=useSelector((state)=>state.add.list);
    const history =useHistory();
    const dispatch=useDispatch();
    const check=()=>
    {   
        var checko=false;
        list.map((value)=>
        {if(value.email==="" || value.pass==="")
            {
             checko=false;  
            }
            else if(value.email===email && value.pass===pass)
            {
               checko=true;
            }
            else{
               checko=false; 
            }
        })
        if(checko===true)
        {const confirmBox = window.confirm(
            "login successfully! click Ok to redirect dashboard!!!"
          )
          if(confirmBox===true)
          {     
            dispatch(currentperson(email))
              history.push("/app");
          }
        }
          else{
              alert("Wrong userName or Password!");
          
        }

    }


    return (
        <div className="mainsignup" style={{ backgroundImage: `url(${login})` ,backgroundSize:"100% 100%" }}>
         <h1 style={{color:'white'}} id="heading">Xcelpros Techologies Private Limited</h1>
        <div className="signup" >
            <h2>login</h2>
            <div>
            <label for="fname">Email</label>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <label for="fname">Password</label>
            <input type="password"  placeholder="Password"value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <br></br><br></br>
            <button  className="sign" onClick={check} >login</button>
            <br></br><br></br>
            <b>Not a member</b>
            <button className="login" onClick={()=>history.push("/")}>Signup</button>
            </div>
             <p style={{fontSize:'10px',color:'black'}}>By joining you agree to the Terms and Privacy Policy</p>
        </div>

        </div>
    )
}

export default Login
