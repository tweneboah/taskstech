import react, {useState, userEffect} from "react";

const userData = () =>{
    const [user, setUser] = userState({
        firstName: '',
        lastName: '',
        company: '',
        phone: '',
        email: '',
        confirmemail: '',
        password: '',
        confirmpassword: '',
        address: '',
        state: '',
        postcode: '',
        showPassword: false,
        id:"",
        isLogin:false,

    })


}