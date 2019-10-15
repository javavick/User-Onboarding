import React from "react";
import { withFormik, Form, Field } from "formik";

function MainForm() {
  return (
    <Form>
      <label htmlFor="name">
        Name:
        <Field type="text" name="name" />
      </label>
      <br />

      <label htmlFor="email">
        Email:
        <Field type="email" name="email" />
      </label>
      <br />

      <label htmlFor="password">
        Password:
        <Field type="password" name="password" />
      </label>
      <br />

      <label htmlFor="terms">
        Terms of Service
        <Field type="checkbox" name="terms" />
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

  handleSubmit(values) {
    console.log(values);
  }
})(MainForm);

export default FormikMainForm;
