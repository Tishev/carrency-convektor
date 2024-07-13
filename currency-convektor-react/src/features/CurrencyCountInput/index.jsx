import { TextField } from '@mui/material';

export const CurrencyCountInput = ({ onChange, id, label, name }) => {
    const onHandleChange = (event) => {
        return onChange(event.target.value);
    };
    return (
        <TextField
            id={id}
            label={label}
            name={name}
            type="number"
            InputLabelProps={onHandleChange}
        />
    );
};
