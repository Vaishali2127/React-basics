import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import StoryBook from './story-book/storyBook';
import Book from './Book';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Book /> */}
    <App />
  </React.StrictMode>
);
