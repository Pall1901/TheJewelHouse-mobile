export const errorMessages = {
    email: {
      required: 'Please enter E-mail',
      maxLength: 'Maximum email length is 255 characteres only',
      invalid: 'Please enter valid E-mail',
      notLowercase: 'Email must be in lowercase',
    },
    phone: {
      required: 'Please enter phone',
      minLength: 'phone should be of 10 digits',
      maxLength: 'phone should be of 10 digits',
      invalid: 'Please enter valid Phone',
    },
   
    password: {
      required: 'Please enter password',
      minMaxlength: 'Minimum 8 and maximum 18 characters only',
      invalid:
        'Password must be at least 8 characters, contain at least one digit, one lowercase letter, one uppercase letter, one special character.',
    },
    oldpassword: {
      required: 'please enter old password',
      minMaxlength: 'Minimum 8 and maximum 18 characters only',
      invalid:
        'Password must be at least 8 characters, contain at least one digit, one lowercase letter, one uppercase letter, one special character.',
    },
    confirmPassword: {
      required: 'please enter confirm password',
      invalid: 'Password and confirm password should be same.',
    },
    termsAccepted: {
      invalid: 'You need to accept the terms and conditions.',
    },
    state: {
      required: 'Please select state',
    },
    disom: {
      required: 'Please select electricity board',
    },
    name: {
      required: 'Please enter your name',
      invalid: 'Please enter valid name',
      maxLength: 'Name should be less than 50 characters',
    },
    firstName: {
      required: 'Please enter First Name',
    },
    lastName: {
      required: 'Please enter Last Name',
    },
    dateOfBirth: {
      required: 'Please enter Date Of Birth',
    },
    passportNo: {
      required: 'Please enter Passport Number',
    },
  
    feederName: {
      required: 'Please enter Feeder Name',
    },
  
    
  };