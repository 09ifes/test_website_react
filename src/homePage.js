import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import TopSection from './components/TopSection.js';
import Section2 from './components/Section2.js';
import Section3 from './components/Section3.js';
import Section4 from './components/Section4.js';
import Section5 from './components/Section5.js';
import Footer from './components/Footer.js';

export default HomePage;

function HomePage() {
    return (
        <div>
            <div>
                <TopSection />
            </div>

            <div className="section-2">
                <Section2 />
            </div>

            <div className="section-3 animate-me">
                <Section3 />
            </div>

            <div>
                <Section4 />
            </div>

            <div >
                <Section5 />
            </div>
            <div>
                <Footer />

            </div>
        </div>
    );

}
