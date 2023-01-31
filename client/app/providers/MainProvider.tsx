import AuthProvider from "./AuthProvider/AuthProvider";
import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import { TypeComponentAuthFields } from "@/shared/types/auth.types";
import ReduxToastr from "@/components/ui/redux-toastr/ReduxToastr";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainProvider: FC<TypeComponentAuthFields> = ({ children }:any) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default MainProvider;
