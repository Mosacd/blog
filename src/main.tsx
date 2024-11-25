// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './i18n'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth/index.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
<QueryClientProvider client={queryClient}>
<BrowserRouter>
<AuthProvider>
  <App />
  </AuthProvider>
</BrowserRouter>
</QueryClientProvider>,
)
