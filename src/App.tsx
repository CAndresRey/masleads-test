import { Provider } from 'react-redux';
import { store } from './store/store';
import { Routes, Route } from 'react-router-dom';

import HomeContainer from './modules/Home/HomeContainer';
import ShopContainer from './modules/Shop/ShopContainer';
import ProductContainer from './modules/Product/ProductContainer';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/shop" element={<ShopContainer />} />
        <Route path='/shop/:id' element={<ProductContainer/>} />
      </Routes>
    </Provider>
  );
};

export default App;
