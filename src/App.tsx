import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30000,
        refetchOnWindowFocus: false, 
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
    <div className="app">
      <header className="app-header">
        New York Times Company
      </header>
      <main>
        <Routes>
         <Route path='/' element={<ArticleList/>} />
         <Route path="/detail/:itemId" element={<ArticleDetail/>} />
       </Routes>
      </main>
    </div>
    </QueryClientProvider>
  );
}

export default App;
