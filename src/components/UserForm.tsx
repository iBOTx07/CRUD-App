import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface UserFormProps {
    onSubmit: (values: any) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
    const initialValues = { first_name: "", last_name: "", email: ""};

    const validationSchema = Yup.object({
        first_name: Yup.string().required("First Name is required"),
        last_name: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid Email").required("Email is required")
    });

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div>
                    <label htmlFor="first_name">First Name: </label>
                    <Field type="text" first_name="first_name"/>
                    <ErrorMessage name="first_name" component="div"/>
                </div>
                <div>
                    <label htmlFor="last_name">Last Name: </label>
                    <Field type="text" last_name="last_name"/>
                    <ErrorMessage name="last_name" component="div"/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <Field type="email" email="email"/>
                    <ErrorMessage name="email" component="div"/>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        
    );
};

export default UserForm;