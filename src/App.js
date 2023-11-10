import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import Cart from './Components/Pages/Cart';
import Signin from './Components/Pages/SignIn';
import SignUp from './Components/SignUp';
import ProductDetails from './Components/Products/ProductDetails';
import "bootstrap/dist/css/bootstrap.min.css"
import {FaCopyright ,FaPortrait} from "react-icons/fa";
import {CartProvider } from "react-use-cart";
import NoOfItemsInCart from './Components/noOfItemsInCart';
import { PRODUCTS } from './Components/Products/ITEMS';

function App() {
  const menu = [
    {
       id: 1,
       page: "Home",
       url: "/"
    },
    {
       id: 2,
       page: "Shop",
       url: "/shop"
    },
    {
       id: 3,
       page: <FaPortrait size={30}/>,
       url: "/signin"
    },
    {
       id: 4,
       page:<NoOfItemsInCart/>,
       url: "/cart"
    },

  ];
 

  return (
    <div className="container-fluid p-0">
      <CartProvider>
            <BrowserRouter>
               <Header menu={menu}/>
               <Routes>
                   <Route path='/' Component={Home}/>
                   <Route path='/Shop' Component={Shop}/>
                   <Route path='/Signin' Component={Signin}/>
                   <Route path='/signUp' Component={SignUp}/>
                   <Route path='/Cart' Component={Cart}/>
                   <Route path='/details/:name' element={<ProductDetails PRODUCTS/>}/>
               </Routes>
            </BrowserRouter>
      </CartProvider>

      <footer>
                   <p className="Brand">Verona</p>
                   <div className="row mb-4 d-flex justify-content-center align-items-center">
                        <div className="col-md-3 col-sm-3 mx-md-1 p-0 mt-5 text-center">
                            <p>Store Locator</p>
                            <input type="text" className="w-100" placeholder="Country/Region/City"/>
                        </div>
                        <div className="col-md-3 col-sm-3 mx-md-1 mt-5 p-0 text-center">
                            <p>Sign Up for Verona Updates</p>
                            <input type="text" className="w-100" placeholder="Email"/>
                        </div>
                        <div className="col-md-3 col-sm-3 mx-md-1 mt-5 text-center">
                            <p>Privacy Policy</p>
                            <p>Contact Us</p>
                            <p>FAQs</p>
                            <p>The Company</p>
                        </div> 
                   </div>
                    <p className="text-center"><FaCopyright/>Copyright 2023</p>
                    <p className="text-center">Verona Fashion Inc.</p>
                   
                   
                   
           </footer>

    </div>
  );
}

export default App;
