import React from 'react';
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { TextCommentProvider } from './Contexts/TextCommentContext/TextComment';
import PostsPage from './Pages/Posts';
import Post from './Pages/Post';

const router = createBrowserRouter([
  {
    path: 'posts/',
    element: <PostsPage />,
  },
  {
    path: 'post/:id',
    element: <Post />,
  }
]);

function App() {
  return (
      <TextCommentProvider>
        <RouterProvider router={router} />
      </TextCommentProvider>
  );
}

export default App;