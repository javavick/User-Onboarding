import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function MainForm({ errors, touched, values }) {
  return (
    <Form>
      <label htmlFor="name">
        Name:
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="text" name="name" />
      </label>
      <br />

      <label htmlFor="email">
        Email:
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" />
      </label>
      <br />

      <label htmlFor="password">
        Password:
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" />
      </label>
      <br />

      <label htmlFor="terms">
        Terms of Service
        <Field type="checkbox" name="terms" checked={values.terms} />
      </label>
      <br />

      <button>Submit</button>
    </Form>
  );
}

const FormikMainForm = withFormik({
  mapPropsToValues({ name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Email is not valid.")
      .required("This field is required"),
    password: Yup.string()
      .min(8, "Your password must be 8 characters or longer.")
      .required("This field is required")
  }),

  handleSubmit(values, { props, resetForm }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then((res) => {
        console.log(res);
        props.setUsers([...props.users, res.data]);
        resetForm();
      })
      .catch((err) => console.log(err));
  }
})(MainForm);

export default FormikMainForm;
