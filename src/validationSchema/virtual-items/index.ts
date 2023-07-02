import * as yup from 'yup';

export const virtualItemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  user_id: yup.string().nullable(),
});
