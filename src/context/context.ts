import { createContext } from 'react';
import { GlobalContextInterface } from '../interfaces/interfaces';

export const Context = createContext<GlobalContextInterface>({
      isIntheProgram: false,
      setIsIntheProgram: () => { },
      registrated: false,
      setRegistrated: () => { },
      letIn: false,
      setLetIn: () => { },
      productItem: [],
      setProductItem: () => { },
      adminList: [],
      setAdminList: () => { },
});
