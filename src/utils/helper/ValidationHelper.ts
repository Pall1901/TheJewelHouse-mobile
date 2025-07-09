import * as yup from 'yup';
import { errorMessages } from './ErrorMessages';

// Updated emailValidation function
export const emailValidation = (schema: yup.StringSchema) => {
    return schema
      .required(errorMessages.email.required)
      .email(errorMessages.email.invalid)
      .lowercase(errorMessages.email.notLowercase);
  };
  
  
  export const stringValidation = (schema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">, errorMessage: { required: any; minLength?: string; maxLength?: string; invalid?: string; min?: any; max?: any; }) => {
    return schema
      .required(errorMessage.required)
      .min(10, errorMessage.minLength)
      .matches(/^\d+$/, errorMessage.invalid)
      .max(10, errorMessage.maxLength);
  };
  
 export const passwordValidation = (value: string, validationContext: { createError: any; }) => {
    const { createError } = validationContext;
    if (!value) {
      return createError({ message: errorMessages.password.required });
    }
    if (!/^.{8,18}$/.test(value)) {
      return createError({ message: errorMessages.password.minMaxlength });
    }
    return true;
  };
  