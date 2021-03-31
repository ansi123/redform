import React,{useState} from 'react'
import {connect} from 'react-redux';
import './App.css';

const Profile = (props) => {
    console.log("FirstName",props.formData.FirstName)
    console.log("LastName",props.formData.LastName)
    return (
        <div>
            {/* <h1>Profile</h1>
            {props.formData.FirstName}
            {props.formData.LastName} */}

        </div>
    );
}
const mapStateToProps = (state) => {
    console.log(state);
    return{
        formData:state.form.myForm.values
    }
}
export default connect(mapStateToProps)(Profile)
