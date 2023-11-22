import { ErrorMessage, Formik } from 'formik/dist';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/auth/operations';
import * as Yup from 'yup';
import { Button, Form, Input, Label } from './LoginForm.styled';

const initialValues = { email: '', password: '' };
const schema = Yup.object().shape({
    email: Yup.string().email().required("This field is required!"),
    password: Yup.string().min(7, 'Too short password!').required("This field is required!"),
});

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(
            userLogin({
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
                onSubmit={handleSubmit}>
                
                <Form autoComplete="off">
                    <Label htmlFor="email">
                        Email
                        <Input
                            type="email"
                            name="email"
                        />
                        <ErrorMessage name="email"/>
                    </Label>
                    <Label htmlFor="password">
                        Password
                        <Input
                            type="password"
                            name="password"
                        />
                        <ErrorMessage name="password"/>
                    </Label>
                    <Button type="submit">
                        Log In
                    </Button>
                </Form>
            </Formik>
        </>
    )
}