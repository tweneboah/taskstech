import {useState, useEffect} from 'react';
import validate from './validateInfo';

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
    }, [values])

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault()

        setErrors(validate(values));
        
    };

    return {handleChange, values, handleSubmit, errors};
};

export default useForm;