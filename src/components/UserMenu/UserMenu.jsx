import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "redux/auth/selectors"
import { Button, Text, Wrapper } from "./UserMenu.styled";
import { userLogout } from "redux/auth/operations";

export const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Text>Welcome to Phonebook {user.name} </Text>
            <Button type="button" onClick={() => dispatch(userLogout())}>
                Logout
            </Button>
        </Wrapper>
    );
};