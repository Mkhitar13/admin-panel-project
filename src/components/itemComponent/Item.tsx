import React, { useState, useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Context } from '../../context/context';
import { EditPost } from '../editPost/EditPost';
import { ItemPropsInterface } from '../../interfaces/interfaces';

const Item: React.FC<ItemPropsInterface> = ({ item }) => {

      const { productItem, setProductItem } = useContext(Context);
      const [showFullDescription, setShowFullDescription] = useState(false);
      const [isEdit, setIsEdit] = useState(false);

      const toggleDescription = () => {
            setShowFullDescription(!showFullDescription);
      };

      const handleDeleteItem = (itemId: string) => {
            const updatedItems = productItem.filter((item) => item.id !== itemId);
            setProductItem(updatedItems);
            localStorage.setItem('products', JSON.stringify([...updatedItems]));
      }

      return (
            <div>
                  {isEdit ? (<EditPost item={item} isEdit={isEdit} setIsEdit={setIsEdit} />) :

                        (<Card 
                              sx={{ height: '90vh' }}
                              onDoubleClick={() => setIsEdit(true)}
                        >
                              <CardMedia
                                    sx={{ width:'100%', height: '70%' }}
                                    component="img"
                                    alt={item.title}
                                    image={(item.image || 'https://via.placeholder.com/200')}
                              />

                              <CardContent >
                                    <Typography
                                          variant="body2">
                                          {item.title}
                                    </Typography>

                                    <Typography variant="body2">
                                          {showFullDescription ? item.description : `${item.description.slice(0, 120)}...`}
                                    </Typography>

                                    <Button variant="text"
                                          sx={{ padding: '20px 0', boxSizing: 'border-box' }}
                                          onClick={toggleDescription}>
                                          {showFullDescription ? 'Show Less' : 'Show More'}
                                    </Button>
                              </CardContent>
                              <Grid container>
                                    <Grid item md={12} xs={12} sm={12} lg={12} xl={12} sx={{ textAlign: 'center' }}>
                                          <Chip
                                                label="delete item"
                                                onClick={() => handleDeleteItem(item.id)}
                                                deleteIcon={<DeleteIcon />}
                                                variant="outlined"
                                          />
                                    </Grid>
                              </Grid>
                        </Card>)
                  }
            </div>
      );
};

export default Item;
