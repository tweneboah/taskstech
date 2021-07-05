import {useState, useEffect} from 'react';
import axios from "axios";


const url = "https://taskstech2.pythonanywhere.com/api/v1/users/customer"
const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMiwiZXhwIjoxNjI2MDc3NzkxfQ.ZWoiT4yq4A3DXCj_lHg62rovvT48yNW2ODjyP9uGIi4"


axios.interceptors.request.use(
    config =>{
        config.headers.authorization = `Bearer ${accessToken}`;
        return config
    },
    error =>{
        return Promise.reject(error);
    }
);

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

    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        console.log(values)
        return () => {

        }
    }, [])

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

     const createCustomer = () =>{
        try {
             axios.post(url, {
                first_name: values.firstName,
                last_name: values.lastName,
                phone: values.phone,
                email: values.email,
                password: values.password,
                address: values.address,
            })
            .then(res =>{
                console.log(res.values)
                console.log(res)
            })
        } catch(error){
            console.log(error.message)
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        createCustomer();
        setErrors(validate(values));
    };

    return {handleChange, values, handleSubmit, errors, createCustomer};
};

export default useForm;