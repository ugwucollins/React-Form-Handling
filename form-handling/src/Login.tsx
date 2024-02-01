import './Form.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const loginvaluesAll = {
    email:'',
    password:'',
    cpassword:''
}

const [formValues,setformValues] = useState({
    username:"", 
    email: "",
    password: "",
    cpassword: "",
})
const [formErrors,setformerros] = useState(loginvaluesAll);

const handlevalue = (e:any) => {
    const {name, value} = e.target;
    setformValues({...formValues, [name]: value });
}

function handlesubmit(e:any) {
  e.preventDefault();
  const isVailds = loginvaildiation();
if (isVailds) {
   console.log('Your Data:', formValues)
}else{
  console.log('IF it is vaild Your Datas Will be empty', formErrors)
}
}

const loginvaildiation = () => {
  let errors = {loginvaluesAll}

  if (formValues.email === '') {
    errors.loginvaluesAll.email = "Email is required";
  }

  if (formValues.password === '') {
    errors.loginvaluesAll.password = "Password is required";
  }else if (formValues.password.length <= 4) {
    errors.loginvaluesAll.password = 'Password Must Not be Less Than 5 Characters'
  }else if (formValues.password.length >= 13) {
    errors.loginvaluesAll.password = 'Password Must Not be More Than 12 Characters'
  }

  if (formValues.cpassword === '') {
    errors.loginvaluesAll.cpassword = "Comfirm  Your password";
  }else if (formValues.cpassword !== formValues.password) {
    errors.loginvaluesAll.password = "Your Comfirm Password is Incorrect, Check It!";
  }

  setformerros({...loginvaluesAll});
  return Object.keys(errors).length < 1;
}

  return (
    <div className='body'>
     <main className="form-main">

        <h1 style={{textTransform:'capitalize'}}>Login</h1>
        {/* <p>{JSON.stringify(formValues,undefined,2)} </p> */}

        <form className="form" onSubmit={handlesubmit}>

            <div className="Checked">
                <input type="email" name="email"
                onChange={handlevalue}
                value={formValues.email}  className='input' />
                <label className="label">Email</label>
               <span style={{color:'red', fontWeight:'600'}}>{formErrors.email}</span>
            </div>

            <div className="Checked">
                <input type="password" 
                onChange={handlevalue}
                value={formValues.password} 
                name="password"  className='input' />
                <label className="label">Password</label>
               <span style={{color:'red', fontWeight:'600'}}>{formErrors.password}</span>
            </div>

            <div className="Checked">
                <input type="password" onChange={handlevalue}
                value={formValues.cpassword}
                  name="cpassword" 
                 className='input' />
                <label className="label label">conform Password</label>
               <span style={{color:'red', fontWeight:'600'}}>{formErrors.cpassword}</span>
            </div>

            <button className="btn" id="Submit">
                Login
            </button>
      </form>

        <button className="btn" 
        style={{width:'94%',marginLeft: '10px',marginTop: '20px'}}>
            <Link to='/'  className="a">Sign Up</Link>
        </button>
    </main>

    </div>
  )
}

export default Login;