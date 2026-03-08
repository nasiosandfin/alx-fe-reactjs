import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ControlledForm from "./ControlledForm";
import FormikForm from "./formikForm";

export default function Register() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>

      <p>Choose a registration method:</p>
      <ul>
        <li><Link to="controlled">Controlled Form</Link></li>
        <li><Link to="formik">Formik Form</Link></li>
      </ul>

      <div style={{ marginTop: 20 }}>
        <Routes>
          <Route index element={<p>Please select a form above.</p>} />
          <Route path="controlled" element={<ControlledForm />} />
          <Route path="formik" element={<FormikForm />} />
        </Routes>
      </div>
    </div>
  );
}
