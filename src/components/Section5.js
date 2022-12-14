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
            console.log(radioValue);
            //document.getElementById("bad-title").innerHTML = "comments";
        }
    });

    return (
        <div className='section-4'>
            <p>If you have any further information to add, please fill in and submit the form below!</p>

            <form action="https://www.mirror.co.uk/news/world-news/boyracers-car-stuck-up-a-tree-825470">
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