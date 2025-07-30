import * as yup from 'yup';
import { isLowercase } from '../../../utils/Helper';
import { errorMessages } from '../../../utils/helper/ErrorMessages';


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


  city : yup.string().required('City is required'),
});
