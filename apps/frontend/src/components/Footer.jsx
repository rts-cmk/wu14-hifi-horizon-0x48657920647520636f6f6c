import { FaCcMastercard, FaCcStripe, FaCcVisa, FaFacebookSquare, FaInstagramSquare, FaPhoneAlt, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer(){
    return(
        <footer className="footer">
            <section className="upperhalf">
                <ul className="navigation">
                    <li className="navigation__item"><Link className="navigation__link" to="/">Home</Link></li>
                    <li className="navigation__item"><Link className="navigation__link" to="/shop">Shop</Link></li>
                    <li className="navigation__item"><Link className="navigation__link" to="/about">About Us</Link></li>
                </ul>
                <ul className="info">
                    <li className="info__item"><Link className="info__link" to="/faq">Returns & Refunds</Link></li>
                    <li className="info__item"><Link className="info__link" to="/faq">Delivery</Link></li>
                    <li className="info__item">Privacy Policy</li>
                    <li className="info__item">Terms & Conditions</li>
                </ul>
                <article className="contact">
                    <h4 className="contact__title">Contact</h4>
                    <p className="contact__location">2 Joppa Rd, Edinburgh, EH15 2EU</p>
                    <p className="contact__number"><FaPhoneAlt className="contact__phone"/> 0131 556 7901</p>
                    <p className="contact__location">44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                    <p className="contact__number"><FaPhoneAlt className="contact__phone"/> 01324 629 011</p>
                    <ul className="socials">
                        <li className="socials__item"><a className="socials__link" href="/"><FaFacebookSquare /></a></li>
                        <li className="socials__item"><a className="socials__link" href="/"><FaTwitterSquare /></a></li>
                        <li className="socials__item"><a className="socials__link" href="/"><FaInstagramSquare /></a></li>
                        <li className="socials__item"><a className="socials__link" href="/"><FaYoutubeSquare /></a></li>
                    </ul>
                </article>
            </section>
            <section className="lowerhalf">
                <div className="payments">
                    <p className="payments__card"><FaCcStripe /></p>
                    <p className="payments__card"><FaCcVisa /></p>
                    <p className="payments__card"><FaCcMastercard /></p>
                </div>
                <div className="extra-info">
                    <p className="extra-info__text">HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
                    <p className="extra-info__text">Designed by Milas & Rasmus</p>
                </div>
            </section>
        </footer>
    )
}