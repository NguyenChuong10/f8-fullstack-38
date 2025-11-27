
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import UpdateAvatar from './pages/EditAvatar'
import UseRef from './pages/UseRef'
import FocusInput from './pages/focusinput/FocusInput'
import JustFocusInput from './pages/focusinput/JustFocusInput'
import ReactMemo from './pages/ReactMemo'
import Navigator from './components/navigator'
import Textinput from './components/TextInput'
import Newtextinput from './components/NewTextInput'
import UseState from './pages/Counter'
import UseMemo from './pages/UseMemo'
import Countdown from './pages/CountDown'
import ProductCard from './pages/ProductCard'
import CartDropDown from './components/CartDropDown'
import ShoppingCart from './pages/ShoppingCart/index'
import Defaultlayout from './layout/defaultlayout'

function App() {
  return (
    <Router basename={import.meta.env.PROD ? "/f8-fullstack-day38/" : "/"} >
      <Navigator />
      <Routes >
        <Route path='/' element={<UpdateAvatar />}></Route>
        <Route path='/UseRef' element={<UseRef />}></Route>
        <Route path='/FocusInput' element={<FocusInput />}></Route>
        <Route path='/JustFocusInput' element={<JustFocusInput />}></Route>
        <Route path='/ReactMemo' element={<ReactMemo />}></Route>
        <Route path='/Textinput' element={<Textinput />}></Route>
        <Route path="/Newtextinput" element={<Newtextinput />}></Route>
        <Route path='/use-state' element={<UseState />}></Route>
        <Route path='/use-memo' element={<UseMemo />}></Route>
        <Route path='/countdown' element={<Countdown />}></Route>
        <Route path='/cartdropdown' element={<CartDropDown />}></Route>
        
        <Route element={<Defaultlayout/>}>
              <Route path='/productcard' element={<ProductCard />}></Route>
              <Route path='/shoppingcart' element={<ShoppingCart />}></Route>
        </Route>

      </Routes>
    </Router>
  )
}

export default App;
