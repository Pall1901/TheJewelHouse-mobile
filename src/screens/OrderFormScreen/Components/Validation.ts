import * as yup from 'yup';
import { isLowercase } from '../../../utils/Helper';
import { errorMessages } from '../../../utils/helper/ErrorMessages';
import { emailValidation, passwordValidation, stringValidation } from '../../../utils/helper/ValidationHelper';


yup.addMethod(yup.string, 'lowercase', function (message) {
  return this.test('lowercase', message, function (value) {
    const { path, createError } = this;
    return value && isLowercase(value) ? true : createError({ path, message });
  });
});

export const validationSchema = yup.object().shape({
  name: yup.string().required(errorMessages.name.required),

  contactNumber: yup.string()
    .matches(/^[0-9]{10}$/, 'Contact number must be 10 digits')
    .required(errorMessages.phone.required),

  address: yup.string().required('Address is required'),

  city : yup.string().required('City is required'),

  pinCode: yup.string()
    .matches(/^[1-9][0-9]{5}$/, 'Invalid PIN code')
    .required('PIN code is required'),

   email: yup.string().email().test('email', (value, validationcontext) => {
      const { createError } = validationcontext;
      if (!value) {
        return createError({ message: errorMessages.email.required });
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)?[a-zA-Z0-9-]+\.[cC][oO][mM]$/;
      if (!emailRegex.test(value)) {
        return createError({ message: errorMessages.email.invalid });
      }
      if (!isLowercase(value)) {
        return createError({ message: errorMessages.email.invalid });
      }
      return true;
    }),

  aadhaarNumber: yup.string()
    .matches(/^[0-9]{12}$/, 'Aadhaar number must be 12 digits'),
    //.required('Aadhaar number is required'),

  panCardNumber: yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN card number'),
    //.required('PAN card is required'),

  expectedDeliveryDate: yup.string().required('Expected delivery date is required'),
});
