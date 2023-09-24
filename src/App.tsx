import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Context } from "./context/context";
import { itemsProducts } from "./components/products/products";
import { AdminInterface, GlobalContextInterface, ProductItemInterface } from "./interfaces/interfaces";
import Layout from "./components/layout/Layout";

function App() {

  const [registrated, setRegistrated] = useState<boolean>(false);
  const [isIntheProgram, setIsIntheProgram] = useState<boolean>(false);
  const [letIn, setLetIn] = useState<boolean>(false);
  const [productItem, setProductItem] = useState<ProductItemInterface[]>(itemsProducts);

  const [adminList, setAdminList] = useState<AdminInterface[]>([]);

  const contextValue: GlobalContextInterface = {
    isIntheProgram,
    setIsIntheProgram,
    registrated,
    setRegistrated,
    letIn,
    setLetIn,
    productItem,
    setProductItem,
    adminList,
    setAdminList,
  };

  return (
    <Context.Provider value={contextValue}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
