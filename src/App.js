import React, { useState, createContext } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import CardCreatePage from './pages/CardCreatePage/CardCreatePage';
import PostPage from './pages/PostPage/PostPage';
import PostEditPage from './pages/PostEditPage/PostEditPage';
import MessageCreatePage from './pages/MessageCreatePage/MessageCreatePage';
import Loading from './components/common/Loading/Loading';

export const LoadingContext = createContext(null);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={(isLoading, setIsLoading)}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post" element={<CardCreatePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/post/:id/edit" element={<PostEditPage />} />
          <Route path="/post/:id/message" element={<MessageCreatePage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </BrowserRouter>
      {isLoading && <Loading />}
    </LoadingContext.Provider>
  );
}

export default App;
