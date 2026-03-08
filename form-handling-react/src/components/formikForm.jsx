// src/components/formikForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string().trim().required('Username required'),
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password required'),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
        setStatus(null);
        try {
          const res = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error || 'Registration failed');
          setStatus('Registration successful');
          resetForm();
        } catch (err) {
          setStatus(err.message || 'Registration failed');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <Form noValidate>
          <div>
            <label className="label">Username</label>
            <Field name="username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label className="label">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label className="label">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>

          {status && <div style={{ marginTop: 12 }}>{status}</div>}
        </Form>
      )}
    </Formik>
  );
}
