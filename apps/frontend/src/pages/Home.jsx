import { useNavigate } from "react-router"

export default function Home(){

    const navigate = useNavigate()

    return(
        <>
            <img className="main__banner" src="banner.png" alt="HiFi banner" />
            <section className="popular">
                <h1 className="popular__title">POPULAR PRODUCTS</h1>
                <button onClick={() => navigate("/shop")} className="popular__see-more">See all products</button>
                <ul className="popular-products">
                    <li className="product">
                        <img className="product__image" src="https://placehold.co/200x100" alt="" />
                        <h3 className="product__name">Auralic Aries G2.1 Streamer</h3>
                        <p className="product__type">(Digital Output)</p>
                        <p className="product__price">£ 4,799.00</p>
                        <button onClick={() => navigate("/shop")} className="product__read-more">Read more</button>
                    </li>
                    <li className="product">
                        <img className="product__image" src="https://placehold.co/200x100" alt="" />
                        <h3 className="product__name">Auralic Aries G2.1 Streamer</h3>
                        <p className="product__type">(Digital Output)</p>
                        <p className="product__price">£ 4,799.00</p>
                        <button onClick={() => navigate("/shop")} className="product__read-more">Read more</button>
                    </li>
                    <li className="product">
                        <img className="product__image" src="https://placehold.co/200x100" alt="" />
                        <h3 className="product__name">Auralic Aries G2.1 Streamer</h3>
                        <p className="product__type">(Digital Output)</p>
                        <p className="product__price">£ 4,799.00</p>
                        <button onClick={() => navigate("/shop")} className="product__read-more">Read more</button>
                    </li>
                    <li className="product">
                        <img className="product__image" src="https://placehold.co/200x100" alt="" />
                        <h3 className="product__name">Auralic Aries G2.1 Streamer</h3>
                        <p className="product__type">(Digital Output)</p>
                        <p className="product__price">£ 4,799.00</p>
                        <button onClick={() => navigate("/shop")} className="product__read-more">Read more</button>
                    </li>
                </ul>
            </section>
            <section className="home-info">
                <article className="what-we-do">
                    <h2 className="what-we-do__title">What we do</h2>
                    <p className="what-we-do__text">
                        We look forward to customising a system to meet your needs.
                    </p>
                    <p className="what-we-do__text">
                        We don’t favour one manufacturer over another – the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.
                    </p>
                    <p className="what-we-do__text">
                        If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.
                    </p>
                    <p className="what-we-do__text">
                        One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams.
                    </p>
                </article>
                <article className="opening">
                    <h2 className="opening__title">Opening hours</h2>
                    <h3 className="opening__location">Edinburgh</h3>
                    <p className="opening__text">
                        2 Joppa Rd,Edinburgh, EH15 2EU
                        <br />
                        Monday to Friday: 10:00am - 5:30pm
                        <br />
                        Saturday: 10:00am - 5:30pm
                        <br />
                        Sunday: Closed
                    </p>
                    <h3 className="opening__location">Falkirk</h3>
                    <p className="opening__text">
                        44 Cow Wynd, Falkirk, Central Region, FK1 1PU
                        <br />
                        Monday to Friday: 10:00am - 5:30pm
                        <br />
                        Saturday - By appointment only
                        <br />
                        Sunday: Closed
                    </p>
                </article>
            </section>
            <section className="newsletter">
                <article className="newsletter-info">
                    <h2 className="newsletter-info__title">SIGN UP FOR OUR NEWSLETTER</h2>
                    <p className="newsletter-info__subtitle">
                        Subscribing to our newsletter secures you up to date information about HiFi Horizons latest updates and offers.
                    </p>
                    <form className="newsletter-sign-up">
                        <input id="newsletter-email" className="newsletter-sign-up__input" type="email" />
                        <button className="newsletter-sign-up__submit-btn" type="submit">Sign up</button>
                    </form>
                </article>
            </section>
        </>
    )
}