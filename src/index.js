import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './homePage.js';
import GoodPage from './goodPage';
import Layout from './layout';

import TopSection from './components/TopSection.js';
import Section2 from './components/Section2.js';
import Section3 from './components/Section3.js';
import Section4 from './components/Section4.js';
import Section5 from './components/Section5.js';
import Footer from './components/Footer.js';



const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="good-page" element={<GoodPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

root.render(<App />);

