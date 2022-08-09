import {useState, useEffect, useLayoutEffect} from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Index from "./pages/Index/Index";
import Nav from "./components/Nav/Nav";
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog"
import {News, _list as NewsList, _single as NewsItem} from './pages/News'
import User from "./pages/User/User";
import {Login, LoginSus} from "./pages/Login";

import {NewsContext, fakeApi} from './context/NewsContext'
import {AuthContext} from './context/AuthContext'
import {CurrentPageContext} from "./context/CurrentPageContext";
import './styles/style.scss'

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

function NotFound() {
  return (
    <div className="container">
      <p>404</p>
    </div>
  )
}

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [userName, setUserName] = useState("")
  const [currentPage, setCurrentPage] = useState("/")
  
  useLayoutEffect(() => {
    const url = window.location.pathname
    setCurrentPage(url)
  },[isLogin])
  
  useEffect(() => {
    const log_from_storage = !!localStorage.getItem("isLogin")
    const name_from_storage = localStorage.getItem("userName")
    console.log(log_from_storage ? "login" : "no login")
    
    if (log_from_storage && name_from_storage) {
      setIsLogin(true)
      setUserName(name_from_storage)
    } else {
      setIsLogin(false)
      setUserName("")
    }
  },[isLogin])
  
  return (
    <CurrentPageContext.Provider value={{currentPage, setCurrentPage}}>
      <AuthContext.Provider value={{isLogin, setIsLogin, userName, setUserName}}>
        <NewsContext.Provider value={{fakeApi}}>
          <BrowserRouter>
            {/*{currentPage}*/}
            <Nav />
            <Routes>
              <Route path="/" element={<Index />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/user" element={isLogin ? <User/> : <Navigate to="/login" state={{redirect: currentPage}} replace={true} />}/>
              <Route path="/catalog/*" element={<Catalog />}>
                <Route index element={<div>foo</div>}/>
                <Route path="cars" element={<Cars />}/>
                <Route path="trucks" element={<Trucks />}/>
              </Route>
              <Route path="/news/*" element={<News />}>
                <Route index element={<NewsList />}/>
                <Route path=":id" element={<NewsItem />}/>
              </Route>
              <Route path="/login" element={!isLogin ? <Login /> : <Navigate to="/" />}/>
              <Route path="/loginsus" element={isLogin ? <LoginSus /> : <Navigate to="/" />}/>
              LoginSus
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </BrowserRouter>
        </NewsContext.Provider>
      </AuthContext.Provider>
    </CurrentPageContext.Provider>
  );
}

export default App;
