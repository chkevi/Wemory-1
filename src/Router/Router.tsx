import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Rendering from '../Rendering/Rendering'
import Main from '../Main/Main'
import Mypage from '../Mypage/Mypage'
import Nav from '../components/Nav'

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Rendering />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
