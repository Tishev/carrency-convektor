import { Box, MenuItem, TextField } from '@mui/material';

export const CurrencyRateSelector = ({ id, name, currencyRate, onChange, label }) => {
    const onHandleChange = (event) => {
        return onChange(event.target.value);
    };
    return (
        <TextField
            id={id}
            select
            label={label}
            name={name}
            sx={{ width: '150px' }}
            onChange={onHandleChange}
            required
        >
            {currencyRate.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
};
