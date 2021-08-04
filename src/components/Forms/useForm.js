import {useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

const url = "https://taskstech2.pythonanywhere.com/api/v1"

const useForm = validate => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmemail: '',
        password: '',
        confirmpassword: '',
        id:"",
        isLogin:false,
        token:"",
        description:"",

    });
    const [errors, setErrors] = useState({});
    const history = useHistory();



    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

     const loginTradePerson = () =>{
        try {
              axios.post(url+`/tokens`, {},
            {auth: {
                username: values.email,
                password: values.password,
              }}
              )
            .then(res =>{
                localStorage.setItem("token", res.data.token)
                console.log("logedin")
                setValues({isLogin:true})
                history.push('/tradie/profile')
            })
        } catch(error){
            console.log(error.message)
        }
    }

    const signUpTradePerson = () =>{
        const traderSignUpData = {
            email:values.email,
            password:values.password,
            first_name:values.firstName,
            last_name:values.lastName,
            description:values.description,
            phone:values.phone
        }
        try {
              axios.post(url+`/users/tradesperson`, traderSignUpData)
            .then(res =>{
                console.log(res)
                history.push("/login")
            })
        } catch(error){
            console.log(error.message)
        }
    }

    const updateTradePerson = () =>{
        const token = localStorage.getItem('token')
        const traderSignUpData = {
            email:values.email,
            password:values.password,
            first_name:values.firstName,
            last_name:values.lastName,
            description:values.description,
            phone:values.phone
        }
        try {
              axios.put(url+`/users/tradeperson/${values.id}`, traderSignUpData, {
                  headers:{authorazation:`Bearer ${token}`}
              })
            
            .then(res =>{
                console.log(res)
            })
        } catch(error){
            console.log(error.message)
        }
    }

    const signUpSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        signUpTradePerson();
    };
    const loginSubmit = e => {
        e.preventDefault();
        loginTradePerson();
        setErrors(validate(values));
    };
    const updateSubmit = e => {
        e.preventDefault();
        updateTradePerson();
        setErrors(validate(values));
    };

    return {handleChange, values, signUpSubmit, loginSubmit, updateSubmit, errors};
};

export default useForm;