import {useState} from 'react';
import axios from "axios";

const url = "https://taskstech2.pythonanywhere.com/api/v1"
// const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MywiZXhwIjoxNjI3Mzk4NTg2fQ.zejOYCvFfTHYKO4-FYW0I2F2cp4QlCR_Nn7AcWmFc0k"

const useForm = validate => {

    const [values, setValues] = useState({
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
        id:"",
        isLogin:false,
        token:"",
        description:"",

    });
    const [errors, setErrors] = useState({});


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
              }},)
            .then(res =>{
                localStorage.setItem("token", res.data.token)
                setValues({isLogin:true})
            })
        } catch(error){
            console.log(error.message)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        loginTradePerson();
        setErrors(validate(values));
    };

    return {handleChange, values, handleSubmit, errors};
};

export default useForm;