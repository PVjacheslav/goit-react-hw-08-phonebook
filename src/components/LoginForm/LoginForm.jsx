import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/auth/operations';
import * as Yup from 'yup';
import { Button, ErrMsg, Label, StyledField, StyledForm } from './LoginForm.styled';

const initialValues = { email: '', password: '' };
const schema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string().min(7, 'Too short password!'),
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
                
                <StyledForm autoComplete="off">
                    <Label htmlFor="email">
                        Email
                        <StyledField
                            type="email"
                            name="email"
                            required
                        />
                        <ErrMsg name="email"/>
                    </Label>
                    <Label htmlFor="password">
                        Password
                        <StyledField
                            type="password"
                            name="password"
                            required
                        />
                        <ErrMsg name="password"/>
                    </Label>
                    <Button type="submit">
                        Log In
                    </Button>
                </StyledForm>
            </Formik>
        </>
    )
}