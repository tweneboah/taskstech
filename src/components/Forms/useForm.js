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
            firstName: values.firstName,
            lastName: values.lastName,
            company: values.comapny,
            phone: values.phone,
            email: values.email,
            confirmemail: values.confirmemail,
            password: values.password,
            confirmpassword: values.confirmpassword,
            address: values.address,
            state: values.state,
            postcode: values.postcode,
            showPassword: false,
            licence:values.licence,
            role:values.role,
            categories:values.categories,
            description: values.description,

        })
        .then(res =>{
            console.log(res.values)
        })

        setErrors(validate(values));
        
    };

    return {handleChange, values, handleSubmit, errors};
};

export default useForm;