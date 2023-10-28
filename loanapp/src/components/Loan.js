import { Link,Route,Routes,useNavigate,useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";



  

export function ProfileSuccess(){
    let {emailId} = useParams();
    let {password}=useParams();
    // extracts :emailId from the path parameter
    let [profile, setProfile] = useState({});
    let url = `http://localhost:9091/api/customer/login/${emailId}/${password}`;
    
    useEffect(() => {
        axios.get(url).then(response => setProfile(response.data)).catch(err=>console.log(err))
    },[]);//extracts emailId from the path parameter
console.log(profile)
    return(
        <div className="row">
            <div className="col-2"> 
            <img src="" className="roundImage" width="100" height="100"/>
            <p> Firstname:{profile.firstname}</p>
            <p> LastName:{profile.lastname}</p>
            <p> Emailid:{profile.email_id}</p>
            <p> Phone:{profile.phone}</p>
            <p> PAN:{profile.pan}</p>

            

            
            
            </div>
            <div className="col-6 p-5"> 
            <Link to='veiwloans' style={{textDecoration:"none"}}>View Loans </Link>    |
            <Link to='appliedloans' style={{textDecoration:"none"}}>     Applied Loans </Link>
            
            
            <div>
                <Routes>
                    <Route path='veiwloans' element={<ViewLoans/>}></Route>
                    <Route path='appliedloans' element={<div>No applied loans till yet</div>}/>
                    
                </Routes>
            </div>
             </div>
        </div>
    )

}

export function ProfileRegistration(){
 //profile needs name,emailId, password ,phone ,dob
 let[email_id,setEmailId]=useState('')
 let [firstname,setFirstName]=useState('')
 let [lastname,setLastName]=useState('')
 let [password,setPassword]=useState('')
 let [phone,setPhone]=useState('')
 let[pan,setPan]=useState('')
 let navigate=useNavigate();

 let data={"firstname":{firstname},"lastname":{lastname},"email_id":{email_id},"pan":{pan},"password":{password},"phone":{phone}}
 let url="http://localhost:9091/api/customer/save"
 let handleSubmit=(e)=>{
    e.preventDefault();


    axios.post(url,data).then(response=>navigate('/login')).catch(err=>navigate('/register'))
    
    
    


   
    
 }


return(
    <div className="container">
        <h3>Registration Form</h3><hr/>
        <form onSubmit={handleSubmit}>

        <div className="w-25">
        <label>Enter your firstName</label>
        <input type='text' placeholder="Enter your firstName"  className="form-control" onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div className="w-25">
        <label>Enter your lastName</label>
        <input type='text' placeholder="Enter your LastName"  className="form-control" onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <div className="w-25">
        <label>Enter your Email</label>
        <input type='email' placeholder="Enter your emailId"  className="form-control" onChange={(e)=>setEmailId(e.target.value)}/>
        </div>
        
        <div className="w-25">
        <label>Enter your Password</label>
        <input type='password' placeholder="Enter your Password"  className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="w-25">
        <label>Enter your Phone</label>
        <input type='number' placeholder="Enter your Phone"  className="form-control" onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div className="w-25">
        <label>Enter your PAN</label>
        <input type='text' placeholder="Enter your Pan"  className="form-control" onChange={(e)=>setPan(e.target.value)}/>
        </div>
        <div>
            <input type="submit" value='register'></input>
        </div>
        


    

        </form>
        <div>
            <Link to='/login'>Login</Link>
        </div>

    </div>
)
}






//component to login
  export function ProfileLogin(){
    let [emailId,setEmailId]=useState('');
    let [password,setPassword]=useState('');
    let navigate=useNavigate();
    let handleSubmit=(e)=>{
        e.preventDefault();
        

        let url=`http://localhost:9091/api/customer/login/${emailId}/${password}`
        axios.get(url).then(response=>navigate('/success/'+emailId+"/"+password)).catch(err=>navigate('/register'));
        
    }
   
    
return (<div className="container ">
     <h3>Login Form</h3><hr/>
     <form onSubmit={handleSubmit} >
        
        <div className="w-25">
        <input type='email' placeholder="Enter your emailId"  className="form-control" onChange={(e)=>setEmailId(e.target.value)}/>
        </div>
        <div  className="w-25">
        <input type='password' placeholder="Enter your password"  className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
            <input type="submit" className="btn btn-primary" value='login'/>
        </div>
        <div>
            <Link to='/register'>Create Profile</Link>
        </div>
        
    </form>

</div>)


  }


  export function ViewLoans(){


    return (
        <>
        
        <div style={{display:"flex", gap:"10px", alignItems:"center"}} className='alert alert-secondary'>
        <h5>Educational Loan </h5>
        <button className="btn btn-primary">Apply for Educational Loan</button>
        </div>
    
        
        <div style={{display:"flex", gap:"10px", alignItems:"center"}} className='alert alert-secondary'>
        <h5>Gold Loan </h5>
        <button className="btn btn-primary">Apply for Gold Loan</button>
       
        </div>
        
        <div style={{display:"flex", gap:"10px", alignItems:"center"}} className='alert alert-secondary'>
        <h5>Personal Loan </h5>
        <button className="btn btn-primary">Apply for Personal Loan</button>
        </div>
       
        
        <div style={{display:"flex", gap:"10px", alignItems:"center"}} className='alert alert-secondary'>
        <h5>Car Loan </h5>
        <button className="btn btn-primary">Apply for Car Loan</button>
        </div>
        
        
        <div style={{display:"flex", gap:"10px", alignItems:"center"}} className='alert alert-secondary'>
        <h5>Business Loan </h5>
        <button className="btn btn-primary">Apply for Business Loan</button>
        </div>
        
        
        </>
    )

  }
