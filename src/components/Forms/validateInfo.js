export default function validateInfo(values) {
    let errors = {}

        //First Name Validation
    if(!values.firstName.trim()){
        errors.firstName = 'First Name required';
    }
        //Last Name Validation
    if(!values.lastName.trim()){
        errors.lastName = 'Last Name required';
    }

    //Phone number validation
    if(!values.phone){
        errors.phone = 'Phone Number is requried'
    }

    //Email Validation
    if(!values.email) {
        errors.email = 'Email requried';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    {
        errors.email = 'Email address is invalid';
    }
    // Confirm Email validaiton
    if(!values.confirmemail){
        errors.confirmemail = 'Confirm Email is requried'
    } else if(values.confirmemail !== values.email){
        errors.confirmemail = 'Emails do not match';
    }

    //Password Validation
    if (!values.password){
        errors.password = 'Password is requried';
    } else if (values.password.length < 8){
        errors.password = 'Password needs to be 8characters or more';
    }
    //Confirm Password Validation
    if(!values.confirmpassword){
        errors.confirmpassword = 'Confirm password is requried'
    } else if (values.confirmpassword !== values.password){
        errors.confirmpassword = 'Passwords do not match';
    }
    //Address Validation
    if(!values.address){
        errors.address = 'Address is requried'
    }

    //State Validation
    if(!values.state){
        errors.state = 'State is required to choose'
    }

    //Postcode Validation
    if(!values.postcode){
        errors.postcode = 'Postcode is required to choose'
    }


    return errors;
}