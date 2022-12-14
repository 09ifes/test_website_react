import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
export default GoodPage;


function GoodTopSection() {

    return (
        <div class="good-top-section">
            <img class="header-img" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBxWf6r.img?w=36&h=36&q=60&m=6&f=png&u=t" />
            <h3 class="header-title" style="left: 80px; margin-top: 15px;">The Telegraph</h3>
        </div>

    )
}

function GoodSection2() {

    return (
        <div class="good-section-2">
            <h1>Choose how many images you want</h1>
            <form >
                <input type="radio" id="2" name="radio_set1" value="2" />
                <label for="2">2</label> <br /><br />
                <input type="radio" id="4" name="radio_set1" value="4" />
                <label for="4">4</label><br /><br />
                <input type="radio" id="6" name="radio_set1" value="6" />
                <label for="6">6</label> <br /><br />
                <input type="radio" id="8" name="radio_set1" value="8" />
                <label for="8">8</label><br /><br />

                <input type="button" name="submit" value="submit" onclick="checkImage()" />
            </form>
        </div>
    )
}

function ImageSet() {
    return (
        <div class="image-set">
            <img id="img-1" class="img-size" src="http://static.demilked.com/wp-content/uploads/2018/03/5aaa1cc4c422b-funny-weird-wtf-stock-photos-28-5a3a5b135f099__700.jpg" />
            <img id="img-2" class="img-size" src="https://www.shrekthemusical.co.uk/wp-content/uploads/2022/05/Shrek.jpg" />
            <img id="img-3" class="img-size" src="https://media.tenor.com/3MOyQ7VdGagAAAAC/cat-cute.gif" />
            <img id="img-4" class="img-size" src="https://media4.giphy.com/media/K0ZZjkjYKiD7y/giphy.gif" />
            <img id="img-5" class="img-size" src="https://sophisticatedinvestor.com/wp-content/uploads/2022/07/image1-1.png" />
            <img id="img-6" class="img-size" src="https://pm1.narvii.com/6222/211ed634a2f9e9e70f3497a77d7e2bcb12cc0cd4_hq.jpg" />
            <img id="img-7" class="img-size" src="https://global-uploads.webflow.com/5ef788f07804fb7d78a4127a/625682d672182b204553bf89_77%2B-marketing-memes-c.jpg" />
            <img id="img-8" class="img-size" src="https://i.pinimg.com/564x/3a/2a/2f/3a2a2fb50bb1070b24dc0cd9002ad9f5.jpg" />
        </div>
    )
}

function GoodPage() {
    return (
        <div>
            <div>
                <GoodTopSection />
            </div>

            <div>
                <GoodSection2 />
            </div>

            <div>
                <ImageSet />
            </div>

        </div>
    )
}





