import './Form.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const valuesAll = {
    username:'',
    firstname:'',
    email:'',
    password:'',
    cpassword:''
  }

  const [formValues,setformValues] = useState({
    username:"",
    firstname:"",
    email: "",
    password: "",
    cpassword: "",
  })
const [formErrors,setformerros] = useState(valuesAll);

const handlevalue = (e:any) => {
    const {name, value} = e.target;
    setformValues({...formValues, [name]: value });
}

function handlesubmit(e:any) {
  e.preventDefault();
  const isVailds = vaildiation();
if (isVailds) {
   console.log('Your Data:', formValues)
}else{
  console.log('IF it is vaild Your Datas Will be empty', formErrors)
}
}


const vaildiation = () => {
  let errors = {valuesAll}

  if (!formValues.username) {
    errors.valuesAll.username= "UserName is required";
  }else if (formValues.username.length >= 13) {
    errors.valuesAll.username= "UserName must not be more the 12 letters";
  }
  if (formValues.firstname === '') {
    errors.valuesAll.firstname= "FirstName is required";
  }
  if (formValues.email === '') {
    errors.valuesAll.email = "Email is required";
  }

  if (formValues.password === '') {
    errors.valuesAll.password = "Password is required";
  }else if (formValues.password.length <= 4) {
    errors.valuesAll.password = 'Password Must Not be Less Than 5 Characters'
  }else if (formValues.password.length >= 13) {
    errors.valuesAll.password = 'Password Must Not be More Than 12 Characters'
  }

  if (formValues.cpassword === '') {
    errors.valuesAll.cpassword = "Comfirm  Your password";
  }else if (formValues.cpassword !== formValues.password) {
    errors.valuesAll.password = "Your Comfirm Password is Incorrect, Check It!";
  }

  setformerros({...valuesAll});
  return Object.keys(errors).length <= 2;
}

  return (
    <div className='body'>
     <main className="form-main">

        <h1 style={{textTransform:'capitalize',marginBottom:'20px'}}>Sign up</h1>
        {/* <p>{JSON.stringify(formValues,undefined,2)} </p> */}

        <form className="form" onSubmit={handlesubmit}>

            <div className="Checked">
                <input type="text" name="username" id="value" 
                onChange={handlevalue}
                value={formValues.username} className='input' />
                <label className="label">Username</label>
           <span style={{color:'red', fontWeight:'600'}}>{formErrors.username}</span>
            </div>

            <div className="Checked">
                <input type="text" name="firstname" 
                onChange={handlevalue}
                value={formValues.firstname} className='input' />
                <label className="label">FirstName</label>
           <span style={{color:'red', fontWeight:'600'}}>{formErrors.firstname}</span>
            </div>

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
                Sign Up
            </button>
      </form>

        <button className="btn" 
        style={{width:'94%',marginLeft: '10px',marginTop: '20px'}}>
            <Link to='/Login'  className="a">Login</Link>
        </button>
    </main>

    </div>
  )
}

export default Form;