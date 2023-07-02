import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  avatar: yup.string(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
