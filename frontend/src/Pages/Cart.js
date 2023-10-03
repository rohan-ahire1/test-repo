import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Cart(props) {
  const [books, setBooks] = useState([]);
  const [cart ,setCart]=useState(0);
  const [cartItems,setCartItems]=useState([]);

    function cartActions(){
      setCart(cart+1);
      setCartItems([...cartItems,books]);
    }
  
    useEffect(() => {
  }, [props.books]);



  
  return (
    <div>
      <h1>Books</h1>
      <h2>Items in Cart: {cart}</h2>
      <Grid container spacing={2}>
        {books.map(book => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <Card sx={{ maxWidth: 345, width: '100%' }}>
              <CardMedia
                sx={{ height: 200 }}
                image={book.cover}  // Assuming `cover` is a URL
                title={book.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {book.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Buy Now</Button>
                <Button size="small" onClick={cartActions}>Add To Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Cart;
