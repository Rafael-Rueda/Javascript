import './App.css'
import Posts from './Pages/Posts'
import Post from './Pages/Post'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TextCommentProvider } from './Contexts/TextCommentContext/TextComment'

function App() {

  return (
    <>
      <BrowserRouter>
        <TextCommentProvider>
          <Routes>
            <Route path='/' element={<Posts />} />
            <Route path='/post/:id' element={<Post />} />
          </Routes>
        </TextCommentProvider>
      </BrowserRouter>


    </>
  )
}

export default App
