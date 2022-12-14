import React, { useState, useEffect } from 'react';
export default Section4;
const angle = 90;


function Section4(props) {
    const [rotation1, setRotation] = useState(-90);


    useEffect(() => {
    var myImage = document.getElementById("order-66-image");
    let rotation = (rotation1 + angle) % 360;
    
    myImage.style.transform = `rotate(${rotation}deg)`;
    document.getElementById("exhibit-a").innerHTML = "Exhibit A " + rotation + "  degrees";
          });

    return (
        <div className='section-2'>
            <h1 id="exhibit-a">{rotation1}</h1>
            <div class="section-2-images">
                <img class="image-bottom" src="https://i2-prod.mirror.co.uk/incoming/article825471.ece/ALTERNATES/s1200c/Fed-up-neighbours-put-the-brakes-on-a-boy-racer-after-months-of-being-driven-barking-by-his-antics--by-hoisting-his.jpg" alt="car in tree" width="500" height="500" />
                <img id="order-66-image" class="image-top" onClick={() => setRotation(rotation1 + 90)} src="https://media.tenor.com/LBWyQg647MoAAAAC/execute-order66-order66.gif" alt="order 66" width="500" height="500" />
            </div>
        </div>
    );
}