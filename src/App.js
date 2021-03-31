import logo from './logo.svg';
import './App.css';
import {Field,reduxForm} from 'redux-form';
import Profile from './Profile';
import React,{useState} from 'react';



function App(props) {
   console.log(props);
   const {handleSubmit} = props;
   const [showProfile,setShowProfile] = useState(false)
  //  function handleSubmit(e) {
  //   var fName = document.getElementById("firstName").value;
  //   var lName = document.getElementById("lastName").value;
  //   var email = document.getElementById("inputEmail").value;
  //   var pass = document.getElementById("password").value;
  //   var cNumber = document.getElementById("contactNumber").value;
  //   var dob = document.getElementById("inputDate").value;

  //   if (!fName.match(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/)) {
  //     alert("Please provide valid input in first name");
  //     e.preventDefault();
  //     return false;
  //   }
  //   if (!lName.match(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/)) {
  //     alert("Please provide valid input in last name");
  //     e.preventDefault();
  //     return false;
  //   }
  //   if (!cNumber.match(/(?<!\d)\d{10}(?!\d)/)) {
  //     alert("Please provide valid contact number");
  //     e.preventDefault();
  //     return false;
  //   }
  //   if (
  //     !pass.match(
  //       /^.*(?=.{8,15})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
  //     )
  //   ) {
  //     alert("Please provide valid input in password");
  //     e.preventDefault();
  //     return false;
  //   }
  // }


  return (
    <div className="App">
    <form id='frm' onSubmit={handleSubmit((formValues)=>{
      console.log(formValues);
      setShowProfile(true);
    })}>
      <div id='i2'><h2>Redex Form</h2></div>
      <br/><br/>
    <label>First Name</label>
    <br/>    <br/>

    <Field type='text' name="FirstName" component='input'/>
    <br/>    <br/>


    <label>Last Name</label>
    <br/>    <br/>


    <Field type='text' name="LastName" component='input'/>
    <br/>    <br/>

    <label>Contact Number</label>
    <br/>    <br/>


    <Field type='number' name="CNumber" component='input'/>
    <br/>    <br/>


    <label>Email</label>
    <br/>    <br/>


    <Field type='email' name="Email" component='input'/>
    <br/>    <br/>


    <button type='submit'>Submit</button>
    {showProfile?<Profile/>:null}
    </form>
    </div>
  );
}

export default reduxForm({
  form : "myForm"
})(App);
