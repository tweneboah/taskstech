import {useState, useEffect} from 'react';
import axios from "axios";



const url = "https://taskstech2.pythonanywhere.com/api/v1"
const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MywiZXhwIjoxNjI3Mzk4NTg2fQ.zejOYCvFfTHYKO4-FYW0I2F2cp4QlCR_Nn7AcWmFc0k"

const config = {
    // headers: { Authorization: `Bearer ${accessToken}` }
    auth: {
        username: 'trade2@abc.com',
        password: 'abc'
      },
};


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
        showPassword: false,
        id:"",
        isLogin:false,

    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        console.log(values)
    }, [])

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

     const loginTradePerson = () =>{
        try {
            console.log(values.email, values.password)
              axios.post(url+`/tokens`, {},
            {auth: {
                // username: values.email,
                // password: values.password,
                username: "trade2@abc.com",
                password: "abc"
              }},)
            .then(res =>{
                console.log(res)
                console.log(res.data.token)
                localStorage.setItem("token", res.data.token)
                setValues({isLogin:true})
                console.log(values.isLogin)
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