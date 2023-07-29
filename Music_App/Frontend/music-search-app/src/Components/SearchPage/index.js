// SearchPage.js
import React, { useState } from "react";
import { Box, Container, TextField, Button } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const SearchPage = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('term', searchTerm);

        try {
          const response = await axios.post('http://127.0.0.1:8000/api/music-search/', formData);
          const searchResults = response?.data?.results;
          setSearchResults(searchResults);
          console.log(searchResults);
          navigate('/result', { state: { searchResults } });
        } catch (error) {
          // Handle errors
          console.error(error);
        }
      };


  return (
    <>
      <Box sx={{ bgcolor: '#000', textAlign: 'center', pt: 4 }}>
        <AppleIcon sx={{ fontSize: 100, color: '#fff' }} />
        <h2 style={{ margin: '20px 0', color: '#fff' }}>itunes Music Search</h2>
      </Box>
      <form onSubmit={handleSearchSubmit}>
        <Container maxWidth="md" sx={{ mt: 20, display: 'flex', justifyContent: 'center' }}>
          <TextField
            id="search-input"
            label="Search"
            variant="outlined"
            sx={{ width: 600 }}
            onChange={handleSearchChange}
          />
        </Container>
        <Container maxWidth="md" sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: '#000', color: '#fff' }}>
            Search
          </Button>
        </Container>
      </form>
    </>
  );
};



export default SearchPage;



