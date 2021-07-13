import {useState, useEffect} from 'react';
import axios from "axios";


const url = "https://taskstech2.pythonanywhere.com/api/v1/tokens"
const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMiwiZXhwIjoxNjI2Nzg4NTAwfQ.6XUo3d54NvSTOVsu3jt-FbGCbRWPDG4xNDW-CPSqMhQ"

const config = {
    headers: { Authorization: `Bearer ${accessToken}` }
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

     const loginCustomer = () =>{
        try {
             axios.post(url, {
                // first_name: values.firstName,
                // last_name: values.lastName,
                // phone: values.phone,
                email: values.email,
                password: values.password,
                // address: values.address,
            }, config)
            .then(res =>{
                console.log(res)

            })
        } catch(error){
            console.log(error.message)
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        loginCustomer();
        setErrors(validate(values));
    };

    return {handleChange, values, handleSubmit, errors};
};

export default useForm;