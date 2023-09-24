import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Avatar, List, ListItem, ListItemText, Paper } from '@mui/material';
import { Context } from '../../context/context';
import { ProductsOfAdminAndCreateAProduct } from '../productsOfAdminAndCreateAProduct/ProductsOfAdminAndCreateAProduct'

const AdminAccount: React.FC = () => {
      const { adminId } = useParams<{ adminId: string }>();
      const { adminList, setAdminList } = useContext(Context);

      useEffect(() => {
            try {
                  const storedAdminList = JSON.parse(localStorage.getItem('adminList') || '[]');
                  if (storedAdminList) setAdminList(storedAdminList);
            } catch (error) { console.log(error); }
      }, [setAdminList]);

      const admin = adminList.find((admin) => admin.adminId === adminId);

      return (
            <Container component="main" sx={{ Width: '100%' }}>
                  <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={4} alignItems="center" display="flex" flexDirection="column" mt={5}>
                              <Avatar sx={{ width: 150, height: 150 }} />
                              <Typography variant="h4" align="center" mt={2}>{`${admin?.firstName} ${admin?.lastName}`}</Typography>
                              <List>
                                    <ListItem>
                                          <ListItemText primary={`Email: ${admin?.email}`} />
                                    </ListItem>
                              </List>
                        </Grid>
                  </Grid>
                  {!admin
                        ? (<Container component="main">
                              <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                                    <Typography variant="h6" style={{ color: 'blue' }}>
                                          Admin not found
                                    </Typography>
                              </Paper>
                        </Container>)
                        : (<Grid container sx={{ Width: '100%' }}>
                              <ProductsOfAdminAndCreateAProduct />
                        </Grid>)}
            </Container>
      );
};

export default AdminAccount;
