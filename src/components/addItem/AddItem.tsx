import React, { useContext, useState, useEffect, ChangeEvent } from 'react';
import { Context } from "../../context/context";
import { ProductItemInterface } from "../../interfaces/interfaces";
import { Container, TextField, Button, Grid, CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export const AddItem: React.FC = () => {

      const id = uuidv4();
      const { adminId } = useParams();
      const { productItem, setProductItem } = useContext(Context);
      const [selectedImage, setSelectedImage] = useState<string | null>(null);
      const [existImg, setExistImg] = useState<boolean>(false);
      const [addDataItem, setAddDataItem] = useState({
            id: '',
            adminId: '',
            title: '',
            description: '',
            image: '',
      });

      useEffect(() => {
            try {
                  const storedProducts = JSON.parse(localStorage.getItem('products') || 'null');
                  if (storedProducts) setProductItem(storedProducts);
                  // console.log(storedProducts);


            } catch (error) { console.log(error); }
      }, [setProductItem]);

      const addAnItem = () => {
            const newItem: ProductItemInterface = {
                  id,
                  adminId: adminId ? adminId : '',
                  title: addDataItem.title,
                  description: addDataItem.description,
                  image: selectedImage || 'null',
            };
            setProductItem([newItem, ...productItem]);
            localStorage.setItem('products', JSON.stringify([newItem, ...productItem]));
            setAddDataItem({
                  ...addDataItem,
                  title: '',
                  description: '',
                  image: '',
            });
            setSelectedImage(null);
            setExistImg(false);
      };

      const handleSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];

            if (file) {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                        if (e.target?.result) {
                              setSelectedImage(e.target.result as string);
                        }
                  };
                  reader.readAsDataURL(file);

                  setExistImg(true);
            } else {
                  setSelectedImage(null);
            }
      };

      const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setAddDataItem({ ...addDataItem, title: e.target.value });
      };

      const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
            setAddDataItem({ ...addDataItem, description: e.target.value });
      };

      return (
            <Container>
                  <form>
                        <Grid container spacing={2}>
                              <Grid item xs={12} sm={12}>
                                    <TextField
                                          onChange={handleSelectImage}
                                          required
                                          fullWidth
                                          type="file"
                                          variant="outlined"
                                          name="fileInput"
                                          inputProps={{ accept: "image/*" }}
                                    />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                    <TextField
                                          value={addDataItem.title}
                                          onChange={handleTitleChange}
                                          variant="outlined"
                                          required
                                          fullWidth
                                          label="Title"
                                          name="title"
                                    />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                    <TextField
                                          value={addDataItem.description}
                                          onChange={handleDescriptionChange}
                                          variant="outlined"
                                          required
                                          fullWidth
                                          label="Description"
                                          name="description"
                                    />
                              </Grid>
                              <Grid item xs={12} sm={12}>
                                    <Button
                                          type="button"
                                          fullWidth
                                          variant="outlined"
                                          color="primary"
                                          onClick={addAnItem}
                                    >
                                          Add An Item
                                    </Button>
                              </Grid>
                        </Grid>
                  </form>
                  {existImg && (
                        <Grid container justifyContent="center" sx={{ marginTop: '70px' }}>
                              <Grid item sx={{ width: '350px', height: '350px' }}>
                                    <CardMedia
                                          sx={{ width: '100%', height: '100%' }}
                                          component="img"
                                          alt={selectedImage || ''}
                                          image={(selectedImage || 'https://via.placeholder.com/200')}
                                    />
                              </Grid>
                        </Grid>
                  )}
            </Container>
      );
};
