import { ImBin } from "react-icons/im";
import { BiSolidContact } from "react-icons/bi";
import { Item, List, Button, NoContact } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectFilter, selectVisibleContacts } from "redux/contacts/selectors";
import { deleteContacts } from "redux/contacts/operations";

const ContactList = () => {
    const filteredContacts = useSelector(selectVisibleContacts);
    const savedFilter = useSelector(selectFilter);
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    return(
        <List>
            {contacts.length === 0 ? (
                <NoContact>
                    There are no contacts yet
                </NoContact>
            ) : (
                <> 
                {filteredContacts.map(({ id, name, number }) => (
                    <Item key={id}>
                        <BiSolidContact fill="#2450DB" size={25}/>
                        {name} : {number}
                        {<Button
                            type="button"
                            name="delete"
                            value={savedFilter}
                            onClick={() => dispatch(deleteContacts(id))}>
                            <ImBin fill="#000000" width="20" height="20"/>
                            delete
                            </Button>}
                        </Item>
                    ))}
                </>
            )}
        </List>
    )
}

export default ContactList;