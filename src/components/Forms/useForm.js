import {useState, useEffect} from 'react';
import validate from './validateInfo';
import axios from "axios";

const useForm = validate => {
    const url = "https://taskstech2.pythonanywhere.com/api/v1/users/customer"
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
    }, [values])

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
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
        })

        setErrors(validate(values));
        
    };

    return {handleChange, values, handleSubmit, errors};
};

export default useForm;