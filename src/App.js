import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home/home';
import { CartProvider } from 'react-use-cart';
import { CapsSection } from './capsSection/capssection';
import { Detail } from './common/detail';
import { Cartsection } from './common/cartsection';
import { Login } from './login/login';
import 'react-toastify/dist/ReactToastify.css';
import { HoodiesSection } from './HoodiesSection/hoodiessection';
import { MainFirebase } from './firebase/firebaseMain';
import { Email } from './email/emailLogin';
import { Mainemail } from './email/emailMain';
import { Face } from './facerecognisation/face';
import Register from './email/emailregistration';
import { Checkout } from './common/checkout';
import { DetailHoodies } from './HoodiesSection/hoodiesDetail';
import { Pay } from './common/payment';



function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/email' element={<Email />} />

            <Route path='/mainemail' element={<Mainemail />} />

            <Route path='/' element={<MainFirebase />} />

            <Route path='/home' element={<Home />} />

            <Route path='/caps' element={<CapsSection />} />

            <Route path='/hoodies' element={<HoodiesSection />} />

            <Route path='/caps/detail/:getdetail' element={<Detail />} />

            <Route path='/hoodies/detail/:getdetail' element={<DetailHoodies/>} />

            <Route path="/cart" element={<Cartsection />} />

            <Route path='/login' element={<Login />} />

            <Route path='/face' element={<Face />} />

            <Route path='/register' element={<Register />} />

            <Route path='/checkout' element={<Checkout/>}/>

            <Route path='/payment' element={<Pay/>}/>
            
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}
export { App }
