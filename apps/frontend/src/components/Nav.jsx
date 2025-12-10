import { Link, useNavigate } from "react-router";
import { IoAdd, IoCart, IoClose, IoMenu, IoPerson, IoRemove, IoSearch } from "react-icons/io5";
import { useState } from "react";

export default function Nav(){

    const [headerDisplay, setHeaderDisplay] = useState("none")
    const [searchbarDisplay, setSearchbarDisplay] = useState("none")
    const [categoriesDisplay, setCategoriesDisplay] = useState("none")
    const [cartDisplay, setCartDisplay] = useState("none")
    const [headerBtnChange, setHeaderBtnChange] = useState(true)

    const navigate = useNavigate()

    const handleHeaderClick = (e) => {
        if(headerDisplay === "none"){
            setHeaderDisplay("flex")
            setSearchbarDisplay("none")
            setCartDisplay("none")
            setHeaderBtnChange(false)
            e.target.style.color = "#FF6900"
        }else{
            setHeaderDisplay("none")
            setCategoriesDisplay("none")
            setHeaderBtnChange(true)
            e.target.style.color = "#FFFFFF"
        }
    }

    const handleSearchbarClick = (e) => {
        if(searchbarDisplay === "none"){
            setSearchbarDisplay("block") 
            setHeaderDisplay("none")
            setCategoriesDisplay("none")
            setCartDisplay("none")
            e.target.style.color = "#FF6900"
        }else{
            setSearchbarDisplay("none")
            e.target.style.color = "#FFFFFF"
        }
    }

    const handleCartClick = (e) => {
        if(cartDisplay === "none"){
            setCartDisplay("block") 
            setHeaderDisplay("none")
            setCategoriesDisplay("none")
            setSearchbarDisplay("none")
            e.target.style.color = "#FF6900"
        }else{
            setSearchbarDisplay("none")
            e.target.style.color = "#FFFFFF"
        }
    }

    return(
        <nav className="nav">
            <section className="cards-section">
                <article className="categories" style={{display: categoriesDisplay}}>
                    <h2 className="categories__title">Browse Categories</h2>
                    <ul className="categories-list">
                        <li className="categories-list__category"><Link className="categories-list__link" to="/">Placeholder</Link></li>
                        <li className="categories-list__category"><Link className="categories-list__link" to="/">Placeholder</Link></li>
                        <li className="categories-list__category"><Link className="categories-list__link" to="/">Placeholder</Link></li>
                        <li className="categories-list__category"><Link className="categories-list__link" to="/">Placeholder</Link></li>
                        <li className="categories-list__category"><Link className="categories-list__link" to="/">Placeholder</Link></li>
                        <li className="categories-list__category"><Link className="categories-list__link" to="/">Placeholder</Link></li>
                        <li className="categories-list__category"><Link className="categories-list__link" to="/">Placeholder</Link></li>
                        <li className="categories-list__category"><Link className="categories-list__link" to="/">Placeholder</Link></li>
                    </ul>
                </article>
                <article className="cart" style={{display: cartDisplay}}>
                    <h2 className="cart__title">Cart <span className="cart__title-amount">(1 item)</span></h2>
                    <ul className="cart-list">
                        <li className="cart-list__item">Placeholder</li>
                        <li className="cart-list__item">Placeholder</li>
                    </ul>
                    <article className="cart-price">
                        <h3 className="cart-price__text">Sub total:</h3>
                        <p className="cart-price__number">£ 3,122.00</p>
                    </article>
                    <div className="cart-action">
                        <button onClick={() => navigate("/cart")} className="cart-action__btn">Go to cart</button>
                        <button onClick={() => navigate("/payment")} className="cart-action__btn">Go to payment</button>
                    </div>
                </article>
            </section>
            <section className="navigation-section">
                <header className="header" style={{display: headerDisplay}}>
                    <Link className="header__link" to="/"><img className="header__logo" src="hifi_logo.png" alt="HiFi logo" /></Link>
                    <button onClick={() => setCategoriesDisplay(categoriesDisplay === "none" ? "block" : "none")} className="header__shop">SHOP</button>
                    <Link className="header__link" to="/about">ABOUT US</Link>
                    <Link className="header__link" to="/contact">CONTACT US</Link>
                </header>
                <search className="searchbar">
                    <input style={{display: searchbarDisplay}} id="search" className="searchbar__input" type="text" placeholder="Search Product..."/>
                    <button onClick={(e) => handleSearchbarClick(e)} className="searchbar__btn" type="submit"><IoSearch /></button>
                </search>
                <Link className="navigation-section__profile" to="/profile"><IoPerson /></Link>
                <button onClick={(e) => handleCartClick(e)} className="navigation-section__cart-btn"><IoCart /></button>
                <button onClick={(e) => handleHeaderClick(e)} className="navigation-section__header-btn"><IoMenu display={headerBtnChange ? "block" : "none"}/><IoClose display={headerBtnChange ? "none" : "block"}/></button>
            </section>
        </nav>
    )
}