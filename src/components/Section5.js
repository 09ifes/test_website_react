import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
export default Section5;

function Section5() {
    const [currentValue, setValue] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        
        let britainGood = document.getElementById("Britain-Good").value;
        let britainBad = document.getElementById("Britain-Bad").value;
        let comments = document.getElementById("Comments").value;

        if (document.getElementById('Britain-Good').checked) {
            let radioValue = document.getElementById('Britain-Good').value;
            console.log(radioValue);
            navigate("/good-page");
        }
        else if (document.getElementById('Britain-Bad').checked) {
            let radioValue = document.getElementById('Britain-Bad').value;
            const array_1 = ['top-section-div', 'section-2-div', 'table-1', 'section-4-div'];

             for (let x of array_1){
                 document.getElementById(x).classList.add('spin-clockwise');   
                 }

             const array_2 = ['navbar-button', 'exhibit-a', 'section-4-form', 'section-3-div'];

             for (let y of array_2){
                 document.getElementById(y).classList.add('spin-anti-clockwise');   
                 }
            document.getElementById('image-container').classList.add('vert-move');
        }
    });

    return (
        <div id='section-4-div' className='section-4'>
            <p>If you have any further information to add, please fill in and submit the form below!</p>

            <form id='section-4-form' action="https://www.mirror.co.uk/news/world-news/boyracers-car-stuck-up-a-tree-825470">
                <input type="radio" id="Britain-Good" name="radio_set1" value="Britain Good" />
                <label for="Britain-Good">Britain Good</label> <br /><br />
                <input type="radio" id="Britain-Bad" name="radio_set1" value="Britain Bad" />
                <label for="Britain-Bad">Britain Bad</label><br /><br />

                <label for="Comments">Comments</label><br />
                <input type="text" id="Comments" name="Comments" />
                 <input type="button" name="submit" value="submit" onClick={() => setValue(currentValue + 1)} />
            </form>
        </div>
    );
}