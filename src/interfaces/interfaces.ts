export interface GlobalContextInterface {
      isIntheProgram: boolean,
      setIsIntheProgram: React.Dispatch<React.SetStateAction<boolean>>,
      registrated: boolean,
      setRegistrated: React.Dispatch<React.SetStateAction<boolean>>,
      letIn: boolean,
      setLetIn: React.Dispatch<React.SetStateAction<boolean>>,
      productItem: ProductItemInterface[],
      setProductItem: React.Dispatch<React.SetStateAction<ProductItemInterface[]>>,
      adminList: AdminInterface[],
      setAdminList: React.Dispatch<React.SetStateAction<AdminInterface[]>>,
};

export interface ItemPropsInterface {
      item: {
            id: string,
            adminId: string,
            title: string,
            description: string,
            image: string,
      };
}

export interface EditPostPropsInterface {
      item: {
            id: string,
            title: string,
            description: string,
            image: string,
      };
      isEdit: boolean,
      setIsEdit: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface ProductItemInterface {
      id: string,
      adminId: string,
      title: string,
      description: string,
      image: string,
};

export interface AdminInterface {
      isIntheProgram: boolean,
      adminId: string,
      firstName: string,
      lastName: string,
      password: string,
      email: string,
      products: ProductItemInterface[],
};
