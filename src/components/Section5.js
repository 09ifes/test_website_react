import { BrowserRouter, Route, Link } from "react-router-dom";
export default Section5;

function Section5() {
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
                <Link to="/good-page"> <input type="button" name="submit" value="submit" onClick="submitData()"/> </Link>
            </form>
        </div>
    );
}