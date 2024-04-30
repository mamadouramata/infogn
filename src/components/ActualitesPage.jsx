import React, { useState, useEffect } from 'react';
import { parseUrl } from 'feedparser'; // Import feedparser library
import HomePage from './HomePage';

const ActualitesPage = () => {
    const [articles, setArticles] = useState([]);

    const fetchRSSFeed = async (url) => {
        try {
          const feed = await parseUrl(url); // Fetch RSS feed
          const articles = feed.entries.map((entry) => {
            return {
              title: entry.title,
              description: entry.description, 
              link: entry.link,
            };
          });
          return articles; // Return parsed articles
        } catch (error) {
          console.error('Error fetching RSS feed:', error); // Handle errors
          return []; // Return empty array on error
        }
      };
      


    useEffect(() => {
        const fetchArticles = async () => {
          const fetchedArticles = await fetchRSSFeed('https://guineematin.com/feed/');
          setArticles(fetchedArticles);
          console.log(fetchArticles)
        };
      
        //fetchArticles();
      }, []); // Empty dependency array: fetch only on mount
      


  return (
    <div>
      <HomePage />
      <div>
    {articles.length > 0 ? (
      articles.map((article) => (
        <div key={article.link}>
          <h3>{article.title}</h3>
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            Lire la suite
          </a>
        </div>
      ))
    ) : (
      <p>Chargement des articles en cours...</p>
    )}
  </div>
    </div>
  );
};

export default ActualitesPage;
