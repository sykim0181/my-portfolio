import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Project from "./pages/Project";
import LayoutWithFooter from "./layouts/LayoutWithFooter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route element={<LayoutWithFooter />}>
              <Route path="/project/:id" element={<Project />} />            
            </Route> 
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
