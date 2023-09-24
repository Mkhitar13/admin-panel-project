import React, { useContext } from 'react';
import Router from "../router/Router";
import { RegistartionContainer } from '../registrationPage/RegistartionContainer';
import { Context } from '../../context/context';
import { GlobalContextInterface } from '../../interfaces/interfaces';
import Header from '../header/Header';

const Layout: React.FC = () => {

  const { isIntheProgram } = useContext<GlobalContextInterface>(Context);

  return (
    <>

      {isIntheProgram
        ? <>
          <Header />
          <Router />
        </>
        : <RegistartionContainer />}
    </>
  );
};

export default Layout;
