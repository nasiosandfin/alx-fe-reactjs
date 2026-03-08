import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});

function FormikForm() {
  return (
    <div style={{ maxWidth: 420 }}>
      <h3>Formik Registration</h3>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Formik submit:", values);
          alert("Formik form submitted (check console)");
          resetForm();
        }}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <button type="submit">Register (Formik)</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
