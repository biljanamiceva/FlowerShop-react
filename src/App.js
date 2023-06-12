import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import { Login, Register, Shop, CardDetails, ShoppingCart, OrderDetail } from './Pages/Index';
import { AdminHome, Shops } from './AdminPages';
function App() {
  return (
    <div className="App">
   <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/shop' element={<Shop />} />
      <Route path='/card/:catalogId' element={<CardDetails />} />
      <Route path='/shoppingCart' element={<ShoppingCart />} />
      <Route path='/orderDetail' element={<OrderDetail />} />
      <Route path='/admin' element={<AdminHome />} />
      <Route path='/admin/shops' element={<Shops />} />
   </Routes>
    </div>
  );
}

export default App;
