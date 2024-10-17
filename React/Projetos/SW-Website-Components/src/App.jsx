import React from 'react';
import './index.css';
import PostInformation from './Components/PostInformation';
import TextTools from './Components/TextTools';
import { TextCommentProvider } from './Contexts/TextCommentContext/TextComment';

function App() {
  return (
    <>
        <TextCommentProvider>
          <PostInformation />
          <TextTools />
        </TextCommentProvider>
    </>
  );
}

export default App;