
import { parseUrl } from 'feedparser'; // Import feedparser library

const fetchRSSFeed = async (url) => {
  try {
    const feed = await parseUrl(url); // Fetch RSS feed
    const articles = feed.entries.map((entry) => {
      return {
        title: entry.title,
        summary: entry.summary, 
        link: entry.link,
      };
    });
    return articles; // Return parsed articles
  } catch (error) {
    console.error('Error fetching RSS feed:', error); // Handle errors
    return []; // Return empty array on error
  }
};

export default fetchRSSFeed; // Export the function
