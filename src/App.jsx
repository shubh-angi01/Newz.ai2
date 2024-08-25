import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import Loader from './components/Loader';
import Login from'./components/login';

const API_KEY = '0ea2bdb2e0714ed0a010339f866ae4b0';
const API_URL = 'https://newsapi.org/v2/everything';

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('India');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  const fetchNews = async (query) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: query,
          apiKey: API_KEY,
        },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleSearch = () => {
    fetchNews(searchQuery);
    setCategory(''); // Clear category selection on search
  };

  useEffect(() => {
    // Simulate a data fetch with a timeout
    setTimeout(() => {
      setData("Data fetched!");
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <Login/>
      <Navbar
        setCategory={setCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      {loading ? <Loader /> : null}
      <NewsList articles={articles} />
    </div>
  );
}

export default App;