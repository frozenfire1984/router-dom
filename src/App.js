import {BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom'
import {News, _list as NewsList, _single as NewsItem} from './pages/News'
import About from "./pages/About/About";
import Nav from "./components/Nav/Nav";
import User from "./pages/User/User";
import {NewsContext, fakeApi} from './context/NewsContext'
import {AuthContext} from './context/AuthContext'
import './styles/style.scss'
import {useState} from "react";

function Main() {
  return (
    <div className="container">
      <h2>Main</h2>
    </div>
  )
}

function Cars() {
  return (
    <div className="container">
      <h4>Cars</h4>
    </div>
  )
}

function Trucks() {
  return (
    <div className="container">
      <h4>Trucks</h4>
    </div>
  )
}

function Catalog() {
  return (
    <div className="container">
      <h2>Catalog</h2>
      <Outlet/>
    </div>
  )
}

function NotFound() {
  return (
    <div className="container">
      <p>404</p>
    </div>
  )
}

function App() {
  
  const [isLogin, setIsLogin] = useState(false)
  
  return (
    <AuthContext.Provider value={{isLogin, setIsLogin}}>
      <NewsContext.Provider value={{fakeApi}}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/user" element={isLogin ? <User/> : <Navigate to="/" />}/>
            <Route path="/catalog/*" element={<Catalog />}>
              <Route index element={<div>foo</div>}/>
              <Route path="cars" element={<Cars />}/>
              <Route path="trucks" element={<Trucks />}/>
            </Route>
            <Route path="/news/*" element={<News />}>
              <Route index element={<NewsList />}/>
              <Route path=":id" element={<NewsItem />}/>
            </Route>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </NewsContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
