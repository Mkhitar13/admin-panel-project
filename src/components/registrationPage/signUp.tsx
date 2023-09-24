import React, { useState, useContext, ChangeEvent, useEffect } from 'react';
import { Context } from "../../context/context";
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { AdminInterface } from "../../interfaces/interfaces";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';


const SignUp: React.FC = () => {
      
      const adminId = uuidv4();
      const navigate = useNavigate();

      const { adminList, setAdminList, setIsIntheProgram } = useContext(Context);

      useEffect(() => {
            try {
                  const storedAdminArray = JSON.parse(localStorage.getItem('adminList') || '[]');
                  if (Array.isArray(storedAdminArray)) { setAdminList(storedAdminArray); }
            } catch (error) {
                  console.log(error);
            }
      }, [setAdminList]);

      const [formData, setFormData] = useState({
            isIntheProgram: false,
            adminId: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
      });

      const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleRegistration = () => {
            const newMember: AdminInterface = {
                  isIntheProgram: true,
                  adminId: adminId,
                  lastName: formData.lastName,
                  firstName: formData.firstName,
                  email: formData.email,
                  password: formData.password,
                  products: [], // You can add products here if needed
            };

            setAdminList((prevAdminList) => [...prevAdminList, newMember]);
            localStorage.setItem('adminList', JSON.stringify([...adminList, newMember]));
            navigate('/admin-list');
            setIsIntheProgram(true);
      };

      return (
            <Container component="main" maxWidth="xs" >
                  <Grid>
                        <Typography component="h1" variant="h5" sx={{ textAlign: 'center', paddingBottom: '25px' }}>
                              Sign up
                        </Typography>
                        <form>
                              <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                          <TextField
                                                value={formData.firstName}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                label="First Name"
                                                name="firstName"
                                                onChange={handleInputChange}
                                          />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                          <TextField
                                                value={formData.lastName}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                label="Last Name"
                                                name="lastName"
                                                onChange={handleInputChange}
                                          />
                                    </Grid>
                                    <Grid item xs={12}>
                                          <TextField
                                                value={formData.email}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                onChange={handleInputChange}
                                          />
                                    </Grid>
                                    <Grid item xs={12}>
                                          <TextField
                                                value={formData.password}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                label="Password"
                                                name="password"
                                                type="password"
                                                onChange={handleInputChange}
                                          />
                                    </Grid>
                                    <Grid item xs={12}>
                                          <TextField
                                                value={formData.confirmPassword}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                label="Confirm Password"
                                                name="confirmPassword"
                                                type="password"
                                                onChange={handleInputChange}
                                          />
                                    </Grid>
                              </Grid>
                              <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={handleRegistration}
                              >
                                    Sign Up
                              </Button>
                        </form>
                  </Grid>
            </Container>
      );
};

export default SignUp;
