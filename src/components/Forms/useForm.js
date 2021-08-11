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
                localStorage.setItem("id", res.data.user_id)
                setValues({
                    id:res.data.user_id,
                    token:res.data.token,
                })
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
        const id = localStorage.getItem('id')

        const traderSignUpData = {
            email:values.email,
            password:values.password,
            first_name:values.firstName,
            last_name:values.lastName,
            description:values.description,
            phone:values.phone
        }
        try {
              axios.put(url+`/users/tradesperson/${id}`, traderSignUpData, {
                  headers:{authorization:`Bearer ${token}`}
              })
            
            .then(res =>{
                console.log(res)
            })
        } catch(error){
            console.log(error.message)
        }
    }

    const getTradieData = () => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id')
        try {
            axios.get(url+`/users/tradesperson/${id}`, {
                headers:{authorization:`Bearer ${token}`}
            })
          
          .then(res =>{
              setValues({
                  firstName:res.data.first_name,
                  lastName:res.data.last_name,
                  email:res.data.email,
                  phone:res.data.phone,
                  description:res.data.description,
              })
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

    return {handleChange, values, signUpSubmit, loginSubmit, updateSubmit, getTradieData, errors};
};

export default useForm;