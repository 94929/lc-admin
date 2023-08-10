"use client";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

interface IReactQueryProvider {
  children: React.ReactNode;
}
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      // global error callback
    },
  }),
});

function ReactQueryProvider({ children }: IReactQueryProvider) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
