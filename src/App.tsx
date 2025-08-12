import "./App.css";//lbuiyutdtr never use
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
// import { ThemeProvider } from "./context/theme-provider";
import { ThemeProvider } from "@/components/ui/theme-provider"
import WeatherDashboard from "./pages/weather-dashboard";
import CityPage from "./pages/city-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return ( 
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            //  defaultTheme="system"
             >
          <Layout>
            <Routes>
              <Route path="/" element= {<WeatherDashboard />} />
              <Route path="/city/:cityName" element={<CityPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>     
       {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}


export default App;
