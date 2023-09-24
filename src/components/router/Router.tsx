import { Routes, Route } from 'react-router-dom';
import AdminList from '../admin/AdminList';
import { RegistartionContainer } from '../registrationPage/RegistartionContainer';
import AdminAccount from '../admin/AdminAccount';
import AllProducts from '../allproducts/AllProducts';

const Router = () => {
      return (
            <Routes>
                  <Route path={"/"} element={<RegistartionContainer />} />
                  <Route path={"/registartion-container"} element={<RegistartionContainer />} />
                  <Route path="/all-products" element={<AllProducts />} />
                  <Route path="/admin-list" element={<AdminList />} />
                  <Route path="/admin-list/:adminId" element={<AdminAccount />} />
            </Routes>
      );
};

export default Router;
