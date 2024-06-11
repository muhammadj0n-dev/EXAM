import React, { useEffect, useState } from 'react';
import { Button, CardContent, IconButton, Typography, AspectRatio, Card } from '@mui/joy';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import axios from 'axios';
import { Box, Select, MenuItem, FormControl, InputLabel, Pagination, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Singleproduct from '../singleproduct/index' 
import './index.css';

 const index = ()=> {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?limit=${limit}`).then((response) => {
      setProducts(response.data);
    });
  }, [limit]);

  const handleClick = (id) => {
    console.log('bosildi', id);
  };

  return (
    <div className="mt-[25px] mb-[30px]">
      <Box sx={{ display: 'flex', justifyContent: 'start', mb: 5 }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="select-limit-label">Select limit</InputLabel>
          <Select
            labelId="select-limit-label"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            label="Select limit"
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <div className="grid-container">
        {products?.map((item) => (
          <Link to={`/main/single-product/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
            <div className="d-none">   <Singleproduct itemid={item.id} product={products} /></div>
            <Card onClick={() => handleClick(item.id)} sx={{ width: 295, height: 420 }}>
              <div>
                <Typography level="title-lg">
                  {item.title.length > 20 ? item.title.substring(0, 19) + '...' : item.title}
                </Typography>
                <Typography level="body-sm">Count: {item.rating.count}</Typography>
                <IconButton
                  aria-label="bookmark Bahamas Islands"
                  variant="plain"
                  color="neutral"
                  size="sm"
                  sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                >
                  <BookmarkAdd />
                </IconButton>
              </div>
              <AspectRatio minHeight="250px" className="px-[30px] py-[10px]" maxHeight="1000px">
                <img
                  className="py-[1px] px-[10px] hover:scale-105 transition-all"
                  src={item.image}
                  srcSet={item.image}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">${item.price}</Typography>
                </div>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                  ADD
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <Stack spacing={2}>
          <Pagination count={5} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </div>
  );
}
export default index
