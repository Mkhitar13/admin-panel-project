import React, { useState, useContext, useEffect, ChangeEvent } from 'react';
import { Grid, Chip, TextField } from '@mui/material';
import { EditPostPropsInterface } from "../../interfaces/interfaces";
import { Context } from "../../context/context";
import DeleteIcon from '@mui/icons-material/Delete';

export const EditPost: React.FC<EditPostPropsInterface> = ({ item, setIsEdit }) => {

      const { productItem, setProductItem } = useContext(Context);
      const [selectedImage, setSelectedImage] = useState<string | null>(null);

      useEffect(() => {
            try {
                  const storedProducts = JSON.parse(localStorage.getItem('products') || 'null');
                  if (storedProducts) setProductItem(storedProducts);

            } catch (error) {
                  console.log(error);
            }
      }, [setProductItem]);

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

            } else {
                  setSelectedImage(null);
            }
      };

      const [changeItemFields, setChangeItemFields] = useState({
            image: '',
            title: '',
            description: '',
      });

      const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setChangeItemFields({ ...changeItemFields, title: e.target.value });
      };

      const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
            setChangeItemFields({ ...changeItemFields, description: e.target.value });
      };

      const editItem = (itemId: string, newFields: any) => {
            const updatedItems = productItem.map((item) => {
                  if (item.id === itemId) {
                        return { ...item, ...newFields, image: selectedImage };
                  }
                  return item;
            });

            setProductItem(updatedItems);
            localStorage.setItem('products', JSON.stringify([...updatedItems]));
            setIsEdit(false);
      };

      return (
            (<Grid container spacing={2} >
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

                  <Grid item xs={12} sm={12}>
                        <TextField
                              value={changeItemFields.title}
                              onChange={handleTitleChange}
                              variant="outlined"
                              required
                              fullWidth
                              label="Title"
                              name="title"
                        />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                        <TextField
                              value={changeItemFields.description}
                              onChange={handleDescriptionChange}
                              variant="outlined"
                              required
                              fullWidth
                              label="Description"
                              name="description"
                        />
                  </Grid>
                  <Grid item md={5} xs={5} sm={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
                        <Chip
                              label="Cancel"
                              onClick={() => setIsEdit(false)}
                              deleteIcon={<DeleteIcon />}
                              variant="outlined"
                        />
                  </Grid>
                  <Grid item md={5} xs={5} sm={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
                        <Chip
                              label="Confirm"
                              onClick={() => editItem(item.id, changeItemFields)}
                              deleteIcon={<DeleteIcon />}
                              variant="outlined"
                        />
                  </Grid>
            </Grid>)
      );
};
