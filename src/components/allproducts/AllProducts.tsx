import React, { useEffect, useContext } from 'react';
import { Grid } from '@mui/material';
import { Context } from '../../context/context';
import Item from "../itemComponent/Item";

const AllProducts: React.FC = () => {

      const { productItem, setProductItem } = useContext(Context);

      useEffect(() => {
            try {
                  const storedProducts = JSON.parse(localStorage.getItem('products') || 'null');
                  if (storedProducts) {
                        return setProductItem(storedProducts);
                  }
            } catch (error) {
                  console.log(error);
            }
      }, []);

      return (
            <Grid container spacing={2} sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  justifyItems: 'center',
                  marginTop:'50px'
            }}>
                  {productItem.map((item, id) => (
                        <Grid
                              item
                              key={id}
                              xs={12}
                              sm={6}
                              md={6}
                              lg={3}
                              id={item.id}
                              sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderRadius: '8px',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.2s ease-in-out',
                                    '&:hover': {
                                          transform: 'scale(1.05)',
                                    },
                              }}
                        >
                              <Item item={item} key={id} />
                              <div style={{ padding: '16px', textAlign: 'center' }}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                              </div>
                        </Grid>
                  ))}
            </Grid>
      );

}

export default AllProducts