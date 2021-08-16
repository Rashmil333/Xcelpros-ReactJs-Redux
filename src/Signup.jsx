import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addData} from './actions/index';
import {useHistory} from 'react-router-dom';
import signup from './img/signup.jpg'
import './App.css';
import currentperson from "./actions/current";

const Signup = () => {
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const [fname,setfname]=useState('');
    const [lname,setlname]=useState('');
    const dispatch=useDispatch();
    const list=useSelector((state)=>state.add.list);
    const history =useHistory();
    
    return (
        <div className="mainsignup" style={{ backgroundImage: `url(${signup})` }} >
        <h1 style={{color:'white'}} id="heading">Xcelpros Techologies Private Limited</h1>
        <div className="signup" >
            <h2>Signup</h2>
            <div>
             <label  style={{float:'left'}}>First Name</label><label  style={{float:'right'}}>Last Name</label><br/>
            <input type="email" placeholder="Rashmil" style={{width:'140px',float:'left'}} value={fname} onChange={(e)=>setfname(e.target.value)}/>
            <input type="email" placeholder="Rajpoot" style={{width:'140px',float:'right'}} value={lname} onChange={(e)=>setlname(e.target.value)}/>
            <br></br><br/><br/>
            <label >Email</label>
            <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br></br>
           
            <label>Password</label>
           <input type="password" placeholder="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <br></br>
            <br></br>
            <button  className="sign" onClick={()=>
                {
                if(email===""|| pass==="" || fname==="" || lname==="")
                {
                    alert("Please fill Email,pass,FirstName,LastName");
                }
                else
                {dispatch(addData(email,pass,fname+' '+lname));
                alert("Signup successfully! Please login");
               
                history.push('/login')

            }}}>signup</button>
            
            <br></br>
            <br></br>
            
            <b>Already member</b>
            <button className="login" onClick={()=>history.push("/login")}>Login</button>

            
           

        </div>
        <p style={{fontSize:'10px',color:'black'}}>By joining you agree to the Terms and Privacy Policy</p>
        </div>
        </div>
    )
}

export default Signup
