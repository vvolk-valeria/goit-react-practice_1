import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
// npm install --save styled-components
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  color: green;
`;

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();

    //   const handleSubmit = e => {
    //     e.preventDefault();
    //     const { login, password } = e.target.elements;
    //     console.log(login.value, password.value);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};
