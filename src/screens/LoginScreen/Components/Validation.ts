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

export const loginValidationSchema = yup.object().shape({
  phone: yup
      .string().length(10)
      .required(errorMessages.phone.required),
  
  
  password: yup.string().required(errorMessages.password.required)
});
