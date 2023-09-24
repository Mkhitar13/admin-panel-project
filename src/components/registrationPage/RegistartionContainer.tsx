

import { useContext } from 'react';
import { Context } from "../../context/context";
import { GlobalContextInterface } from "../../interfaces/interfaces";
import SignUp from './signUp';
import SignIn from './signIn';
import { Button } from '@mui/material';

export const RegistartionContainer = () => {

      const { registrated, setRegistrated } = useContext<GlobalContextInterface>(Context);

      return (
            <div>
                  <Button
                        sx={{ width: '100%', marginBottom: '40px', boxSizing: 'border-box' }}
                        variant="outlined"
                        onClick={() => setRegistrated(!registrated)}
                  >
                        {registrated ? 'Go To SignIn' : 'Go To SignUp'}
                  </Button>
                  {registrated ? <SignUp /> : <SignIn />}
            </div>
      )
}
