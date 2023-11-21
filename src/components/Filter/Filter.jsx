import { Input, Label, Wrapper } from "./Filter.styled"
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectIsLoading } from "redux/contacts/selectors";
import { setFilter } from "redux/contacts/contactsSlice";
import { Dna } from 'react-loader-spinner';

const spinnerStyle = {
  padding: '12px 64px',
  position: 'absolute',
};

export function Filter() {
    const dispatch = useDispatch();
    const saveFilter = useSelector(selectFilter);
    const isLoading = useSelector(selectIsLoading);

    const onChange = evt => {
        const normalizedValue = evt.target.value.toLowerCase().trim();

        dispatch(setFilter(normalizedValue));
    };

    return (
        <Wrapper>
            <Label>
                Find contacts by name
                <Input
                    type="text"
                    value={saveFilter}
                    onChange={onChange}
                    name="filter" />
            </Label>
            {isLoading && (
                <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{ spinnerStyle }}
                    wrapperClass="dna-wrapper"
                />
            )}
        </Wrapper>
    );
}

