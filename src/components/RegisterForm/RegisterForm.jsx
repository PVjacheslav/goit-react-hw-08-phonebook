import { ErrorMessage, Formik } from 'formik/dist';
import { useDispatch } from 'react-redux';
import { userRegister } from 'redux/auth/operations';
import * as Yup from 'yup';
import { Button, Form, Input, Label } from './RegisterForm.styled';

const initialValues = { username: '', email: '', password: '' };
const schema = Yup.object().shape({
  username: Yup.string().required("This field is required!"),
  email: Yup.string().email().required("This field is required!"),
  password: Yup.string().min(7, 'Too short password!').required("This field is required!"),
});

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(
            userRegister({
                name: values.username,
                email: values.email,
                password: values.password,
            })
        );
        resetForm();
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <Form autoComplete="off">
                    <Label htmlFor="username">
                        Uresname
                        <Input type="text" name="username" />
                        <ErrorMessage name="username" />
                    </Label>
                    <Label htmlFor="email">
                        Email
                        <Input
                            type="email"
                            name="email"
                        />
                        <ErrorMessage name="email" />
                    </Label>
                    <Label htmlFor="password">
                        Password
                        <Input
                            type="password"
                            name="password"
                        />
                        <ErrorMessage name="password" />
                    </Label>
                    <Button type="submit">
                        Register
                    </Button>
                </Form>
            </Formik>
        </>
    );
};
