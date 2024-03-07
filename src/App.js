import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import CardCreatePage from './pages/CardCreatePage/CardCreatePage';
import PostPage from './pages/PostPage/PostPage';
import MessageCreatePage from './pages/MessageCreatePage/MessageCreatePage';
import Loading from './components/common/Loading/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleLoading = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 예시로 1초 뒤에 로딩 상태를 false로 변경
    };

    handleLoading(); // 라우트 변경 시 핸들러 실행

    return () => {
      // cleanup
    };
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<CardCreatePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/post/:id/message" element={<MessageCreatePage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
