import React, { useState, useContext, ChangeEvent } from 'react';
import { Context } from "../../context/context";
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {

      const navigate = useNavigate();
      const { setIsIntheProgram } = useContext(Context);
      const [formData, setFormData] = useState({ email: '', password: '' });

      const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });            
      };

      const handleLogin = () => {

            const storedData = JSON.parse(localStorage.getItem('adminList') || '[]');
            const foundUser = storedData.find((admin:any) => admin.email === formData.email && admin.password === formData.password);
         
            if (foundUser) {
                  navigate('/admin-list');
                  setIsIntheProgram(true);

            } else {
                  alert('User not found');
            }
      };

      return (
            <Container component="main" maxWidth="xs" >
                  <Grid>
                        <Typography component="h1" variant="h5" sx={{ textAlign: 'center', paddingBottom: '25px' }}>
                              Sign In
                        </Typography>
                        <form>
                              <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                          <TextField
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                          />
                                    </Grid>
                                    <Grid item xs={12}>
                                          <TextField
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                variant="outlined"
                                                fullWidth
                                                required
                                                label="Password"
                                                name="password"
                                                type="password"
                                          />
                                    </Grid>
                              </Grid>
                              <Button
                                    type="button" // Use type="button" to prevent form submission
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={handleLogin}
                              >
                                    Sign In
                              </Button>
                        </form>
                  </Grid>
            </Container>
      );
};

export default SignIn;
