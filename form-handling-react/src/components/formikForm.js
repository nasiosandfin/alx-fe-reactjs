import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // Step 1: Define validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Step 2: Handle submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Username</label>
            <Field
              name="username"
              type="text"
              className="w-full border rounded px-3 py-2"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full border rounded px-3 py-2"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <Field
              name="password"
              type="password"
              className="w-full border rounded px-3 py-2"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;