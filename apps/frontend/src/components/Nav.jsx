import { Link } from "react-router";
import { IoAdd, IoCart, IoCloseOutline, IoMenuOutline, IoPerson, IoRemove, IoSearch } from "react-icons/io5";

export default function Nav(){
    return(
        <nav className="nav">
            <section className="navigation-section">
                <header className="header">
                    <Link className="header__link" to="/"><img className="header__logo" src="hifi_logo.png" alt="HiFi logo" /></Link>
                    <button className="header__shop">SHOP</button>
                    <Link className="header__link" to="/about">ABOUT US</Link>
                    <Link className="header__link" to="/contact">CONTACT US</Link>
                </header>
                <search className="searchbar">
                    <input className="searchbar__input" type="text" placeholder="Search Product..."/>
                    <button className="searchbar__btn" type="submit"><IoSearch /></button>
                </search>
                <Link className="navigation-section__profile" to="/profile"><IoPerson /></Link>
                <button className="navigation-section__cart-btn"><IoCart /></button>
                <button className="navigation-section__header-btn"><IoMenuOutline /> <IoCloseOutline /></button>
            </section>
            <section className="cards-section">
                <article className="categories">
                    <h2 className="categories__title">Browse Categories</h2>
                    <ul className="categories-list">
                        <li className="categories-list__category"><Link className="categories-list__link" to="/">Placeholder</Link></li>
                        <li className="categories-list__category"><Link className="categories-list__link" to="/">Placeholder</Link></li>
                        <li className="categories-list__category"><Link className="categories-list__link" to="/">Placeholder</Link></li>
                        <li className="categories-list__category"><Link className="categories-list__link" to="/">Placeholder</Link></li>
                    </ul>
                </article>
                <article className="cart">
                    <h2 className="cart__title">Cart <span>(1 item)</span></h2>
                    <ul className="cart-list">
                        <li>
                            <button><IoCloseOutline /></button>
                            <div>
                                <figure>
                                    <img src="https://placehold.co/200" alt="" />
                                    <figcaption>
                                        <h3>Placeholde name</h3>
                                        <p>In stock<span></span></p>
                                    </figcaption>
                                </figure>
                                <div>
                                    <div>
                                        <button><IoRemove /></button>
                                        <p>1</p>
                                        <button><IoAdd /></button>
                                    </div>
                                    <h4>$2332.00</h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </article>
            </section>
        </nav>
    )
}