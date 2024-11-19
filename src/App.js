import React from 'react';
import Header from './components/Header';
import ImageBanner from './components/ImageBanner';
import FeaturedArticles from './components/FeatureArticels';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <ImageBanner />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Footer />
    </div>
  );
}

export default App;
