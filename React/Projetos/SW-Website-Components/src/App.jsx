import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { TextCommentProvider } from './Contexts/TextCommentContext/TextComment';
import PostsPage from './Pages/Posts';
import Post from './Pages/Post';

function App() {
  return (
      <TextCommentProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PostsPage />} />
            <Route path="*" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </TextCommentProvider>
  );
}

export default App;