import React, { useEffect, useState } from 'react';

export default TopSection;

function TopSection(props) {
const [class_name, setClass] = useState('top-section');


    return (
        
        <div className={class_name}>
            <img className="header-img" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBxWf6r.img?w=36&h=36&q=60&m=6&f=png&u=t" ></img>
            <h3 className="header-title">The Telegraph</h3>
            <button id="navbar-button" type="button" onClick={() => setClass('noHover')}>Remove this crap</button>
        </div>
    );
}
