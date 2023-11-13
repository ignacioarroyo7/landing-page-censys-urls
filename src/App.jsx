import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home/Home'


function App() {

  return (
    <>
    <div className='body-font font-poppins'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
    </>
  )
}

export default App
