import React, { useContext, useEffect } from 'react';
import { Context } from "../../context/context";
import { Container, List, Paper, Avatar, ListItemText, Button, ListItemAvatar, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdminList: React.FC = () => {

      const navigate = useNavigate();
      const { adminList, setAdminList, setIsIntheProgram } = useContext(Context);

      useEffect(() => {
            try {                  
                  const storedAdminList = JSON.parse(localStorage.getItem('adminList') || 'null');
                  if (storedAdminList) setAdminList(storedAdminList);
            } catch (error) { console.log(error); }
      }, [setAdminList]);

      function handleDeleteAdmin(event:any,adminId: string){
            event.stopPropagation();
            const updatedAdminList = adminList.filter((admin) => admin.adminId !== adminId);
            setAdminList(updatedAdminList);
            localStorage.setItem('adminList', JSON.stringify(updatedAdminList));
      };

      const handleLogOut = () => {
            const updatedAdminList = adminList.map((item) => {
                  if (item.isIntheProgram === true) {
                        return { ...item, isIntheProgram: false };
                  }
                  return item;
            });
            setAdminList(updatedAdminList);
            localStorage.setItem('adminList', JSON.stringify(updatedAdminList));
            setIsIntheProgram(false);
            navigate('/');
      };

      return (
            <Container component="main">
                  <Button
                        type="button"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        onClick={handleLogOut}
                  >
                        Logout
                  </Button>
                  <List>
                        {adminList.map((value, id) => (
                              <Link key={id} to={`/admin-list/${value.adminId}`}>
                                    <Paper elevation={3}>
                                          <ListItem>
                                                <ListItemAvatar>
                                                      <Avatar />
                                                </ListItemAvatar>
                                                <ListItemText primary={value.firstName} />
                                                <ListItemText primary={value.lastName} />
                                                <ListItemText primary={value.email} />
                                                <ListItemText primary={value.products.length || 0} />
                                                <Button variant="outlined" onClick={(event) => handleDeleteAdmin(event, value.adminId)}>Remove</Button>
                                          </ListItem>
                                    </Paper>
                              </Link>
                        ))}
                  </List>
            </Container>
      );
};

export default AdminList;


