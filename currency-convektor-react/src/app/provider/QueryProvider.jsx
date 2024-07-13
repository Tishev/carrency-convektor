import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const AppQueryProvider = (props) => {
    return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};
