import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';




// Contexto de autenticação
import { AuthProvider } from '../context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth' //Mapeia se a autenticação foi feita com sucesso
import { useAuthentication } from '../hooks/useAuthentication';


// Styles
import '../../styles/App.css'


// Pages
import Home from '../../pages/Home';
import About from '../../pages/About';

//Components
import Header from '../Header/index';
// import Navbar from '../Navbar/index'
import Footer from '../Footer/index'
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Notfound from '../../pages/Notfound';
import Dashboard from '../../pages/Dashboard';
import CreatePost from '../../pages/CreatePost';







function App() {

  const [ user, setUser ] = useState(undefined)
  const { auth } = useAuthentication()



  const loadingUser = user === undefined
  //https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/learn/lecture/31590898#questions
  //(2:56)

  // Monitorando o estado de auth
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })




    // console.log(user)
  }, [auth])





  if(loadingUser){
    return <p>Carregando...</p>
  }




  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route exact path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
            <Route exact path='/createpost' element={user ? <CreatePost /> : <Navigate to='/' />}/>
            <Route exact path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/' />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
