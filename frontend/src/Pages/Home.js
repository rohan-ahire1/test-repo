import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Home() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function cartActions(book) {
    setCart(cart + 1);
    setCartItems([...cartItems, book]);
  }

  useEffect(() => {
    axios.get('http://localhost:8000/books')
      .then(res => {
        console.log(res);
        setBooks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleCheckout = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div>
      <h1>Books</h1>
      <h2>Items in Cart: {cart}</h2>
      <Button onClick={handleCheckout}>Checkout</Button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Checkout Modal</h2>
            {/* Add your checkout form or summary here */}
            {/* For example: */}
            <p>Total items: {cart}</p>
            <p>Items:</p>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <Grid container spacing={2}>
        {books.map(book => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <Card sx={{ maxWidth: 345, width: '100%' }}>
              <CardMedia
                sx={{ height: 200 }}
                image={book.cover}
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
                <Button size="small" onClick={() => cartActions(book)}>Add To Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
