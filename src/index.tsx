import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
     <ChakraProvider>
     <QueryClientProvider client={queryClient}>
       <CookiesProvider>
         <App />
       </CookiesProvider>
     </QueryClientProvider>
   </ChakraProvider>
  </React.StrictMode>
);
