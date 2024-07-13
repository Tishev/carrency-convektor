import { useQuery } from '@tanstack/react-query';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { currencyService } from '../../shared/api';
import { CurrencyRateSelector } from '../../features/CurrencyRateSelector';
import { mapCurrencyRatesToLabelValue } from './lib/mapper';
import { CurrencyCountInput } from '../../features/CurrencyCountInput';

export const CurrencyConverter = () => {
    const { isLoading, data } = useQuery({
        queryKey: ['currencyRate'],
        queryFn: currencyService.getCurrency,
        select: (data) => data.data,
    });
    const onCountChange = (value) => {
        console.log(value);
    };
    const onFromChange = (value) => {
        console.log(value);
    };

    const onToChange = (value) => {
        console.log(value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(Object.fromEntries(formData));
        console.log(formData.get(''));
    };
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        <Box>
            <Typography variant="h2">Конвертер Валют</Typography>
            <Box display="flex" gap={1}>
                <Box
                    display="flex"
                    flexDirection="column"
                    autoComplete="off"
                    component="form"
                    onSubmit={onSubmit}
                >
                    <CurrencyCountInput
                        id="currency-count-id"
                        name="count"
                        label="Сумма"
                        onChange={onCountChange}
                    />
                    <CurrencyRateSelector
                        id="currency-from-id"
                        name="from"
                        label="from"
                        currencyRate={mapCurrencyRatesToLabelValue(data)}
                        onChange={onFromChange}
                    />
                    <CurrencyRateSelector
                        id="currency-to-id"
                        name="to"
                        label="to"
                        currencyRate={mapCurrencyRatesToLabelValue(data)}
                        onChange={onToChange}
                    />
                    <Button variant="contained" type="submit">
                        Конвертировать
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
