import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { userRegister } from 'redux/auth/operations';
import * as Yup from 'yup';
import { Button, ErrMsg, Label, StyledField, StyledForm } from './RegisterForm.styled';

const initialValues = { username: '', email: '', password: '' };
const schema = Yup.object().shape({
  username: Yup.string(),
  email: Yup.string().email(),
  password: Yup.string().min(7, 'Too short password!'),
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
                <StyledForm autoComplete="off">
                    <Label htmlFor="username">
                        Username
                        <StyledField
                            type="text"
                            name="username"
                            required
                        />
                        <ErrMsg name="username" />
                    </Label>
                    <Label htmlFor="email">
                        Email
                        <StyledField
                            type="email"
                            name="email"
                            required
                        />
                        <ErrMsg name="email" />
                    </Label>
                    <Label htmlFor="password">
                        Password
                        <StyledField
                            type="password"
                            name="password"
                            required
                        />
                        <ErrMsg name="password" />
                    </Label>
                    <Button type="submit">
                        Register
                    </Button>
                </StyledForm>
            </Formik>
        </>
    );
};
