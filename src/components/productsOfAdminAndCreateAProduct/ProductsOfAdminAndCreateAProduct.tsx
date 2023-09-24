import React, { useContext, useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Context } from '../../context/context';
import Item from "../itemComponent/Item";
import { AddItem } from "../addItem/AddItem";
import { useParams } from 'react-router-dom';
import { ProductItemInterface } from '../../interfaces/interfaces';

export const ProductsOfAdminAndCreateAProduct: React.FC = () => {
      
      const { productItem } = useContext(Context);
      const { adminId } = useParams<{ adminId: string }>();

      const [filteredProducts, setFilteredProducts] = useState<ProductItemInterface[]>([...productItem]);

      useEffect(() => {
            const storedProducts = JSON.parse(localStorage.getItem('products') || 'null');
            const filteredProducts = storedProducts?.filter((item: any) => item.adminId === adminId);
            setFilteredProducts(filteredProducts || []);
      }, [filteredProducts, setFilteredProducts, adminId]);

      return (
            <Grid container justifyContent="center">
                  <Grid item sx={{ margin: '4% 0 4%', alignItems: 'baseline' }} >
                        <Container>
                              <AddItem />
                        </Container>
                  </Grid>

                  <Grid container spacing={2} sx={{ width: '80%', height: '150px' }}>
                        {filteredProducts.map((item, id) => (
                              <Grid item key={id} xs={10} sm={2} md={4} id={item.id}>
                                    <Item item={item} />
                              </Grid>
                        ))}
                  </Grid>
            </Grid>
      );
}
