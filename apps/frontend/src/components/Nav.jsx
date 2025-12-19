import { Link, useLoaderData, useNavigate } from "react-router";
import { IoCaretUpSharp, IoCart, IoClose, IoMenu, IoPerson, IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useAuth } from "../context/Auth.jsx"

export default function Nav() {

  const { categories: categoriesData } = useLoaderData()
  const {products: productsdata} = useLoaderData()
  const [searchData, setSearchData] = useState(null)

  const [headerDisplay, setHeaderDisplay] = useState(false)
  const [searchbarDisplay, setSearchbarDisplay] = useState(false)
  const [categoriesDisplay, setCategoriesDisplay] = useState(false)
  const [searchesDisplay, setSearchesDisplay] = useState(false)
  const [cartDisplay, setCartDisplay] = useState(false)
  const [showLoginOption, setShowLoginOptions] = useState(false)
  const [searchValue, setSearchValue] = useState(null)
  const [searchTrigger, setSearchTrigger] = useState(true)
  
  const { auth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    setSearchData(productsdata.filter((product) => product.name.includes(searchValue)))
  },[searchTrigger])

  const handleHeaderClick = () => {
    if (headerDisplay === false) {
      setHeaderDisplay(true)
      setSearchbarDisplay(false)
      setCartDisplay(false)
      setSearchesDisplay(false)
    } else {
      setHeaderDisplay(false)
      setCategoriesDisplay(false)
    }
  }

  const handleCategoriesClick = () => {
    if (categoriesDisplay === false) {
      setCategoriesDisplay(true)
      setHeaderDisplay(true)
      setSearchbarDisplay(false)
      setCartDisplay(false)
      setSearchesDisplay(false)
    } else {
      setCategoriesDisplay(false)
      navigate("/products")
    }
  }

  const closeCategoryClick = () => {
    if (categoriesDisplay === true) {
      setCategoriesDisplay(false)
      setCartDisplay(false)
    } else {
      setSearchbarDisplay(false)
    }
  }

  const handleSearchbarClick = () => {
    if (window.screen.width < 768) {
      if (searchbarDisplay === false) {
        setSearchbarDisplay(true)
        setHeaderDisplay(false)
        setCategoriesDisplay(false)
        setCartDisplay(false)
      } else {
        setSearchbarDisplay(false)
        setSearchesDisplay(false)
      }
    }else{
        if(searchValue !== null){
            setSearchTrigger(searchTrigger ? false : true)
            setSearchesDisplay(true)
            setCategoriesDisplay(false)
        }
    }
  }

  const handleProfileClick = () => {
    if (!auth) {
      setShowLoginOptions(true);
      return setTimeout(() => {
        document.addEventListener("click", () => {
          setShowLoginOptions(false)
        }, { once: true })

      }, 100)
    }
    navigate("/profile")

  }

  const handleCartClick = () => {
    if (cartDisplay === false) {
      setCartDisplay(true)
      setHeaderDisplay(false)
      setCategoriesDisplay(false)
      setSearchbarDisplay(false)
      setSearchesDisplay(false)
    } else {
      setCartDisplay(false)
    }
  }

  const handleInputKeyPress = (e) => {
    if(e.key === "Enter"){
        setSearchTrigger(searchTrigger ? false : true)
        setSearchesDisplay(true)
        setCategoriesDisplay(false)
        setHeaderDisplay(false)
        setCartDisplay(false)
    }
    
    if(e.key === "Backspace"){
        setSearchesDisplay(false)
    }
  }

  return (
    <nav className="nav">
      <section className="cards-section">
        <article className="categories" style={{ display: categoriesDisplay ? "block" : "none" }}>
          <h2 className="categories__title">Browse Categories</h2>
          <ul className="categories-list">
            {
              categoriesData.map((category) => {
                return <li key={category.id} onClick={() => closeCategoryClick()} className="categories-list__category"><Link className="categories-list__link" to={`/products?category=${category.name}`}>{category.name}</Link></li>
              })
            }
          </ul>
        </article>
        <article className="searches" style={{ display: searchesDisplay ? "flex" : "none" }}>
          <button onClick={() => setSearchesDisplay(false)} className="searches__close-btn"><IoClose/></button>
          <ul className="searches-list">
            { searchData !== null &&
              searchData.map((product) => {
                return(
                    <li key={product.name} className="searches-item">
                        <Link className="searches-link" to={`/details/${product.name}`}>
                            <img className="searches-link__picture" src={product.variants[0].imageURL || "https://placehold.co/200x100"} alt={product.name} />
                            <h2 className="searches-link__title">{product.name}</h2>
                        </Link>
                    </li>
                ) 
              })
            }
          </ul>
        </article>
        <article className="cart" style={{ display: cartDisplay ? "block" : "none" }}>
          <IoCaretUpSharp className="cart__arrow" />
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
        <header className={`header header--display-${headerDisplay}`}>
          <Link className="header__link" to="/"><img className="header__logo" src="/hifi_logo.png" alt="HiFi logo" /></Link>
          <button onClick={() => handleCategoriesClick()} className="header__shop">SHOP</button>
          <Link className="header__link" to="/about">ABOUT US</Link>
          <Link className="header__link" to="/contact">CONTACT US</Link>
        </header>
        <search className="searchbar">
          <input id="search" onKeyDown={(e) => handleInputKeyPress(e)} onChange={(e) => setSearchValue(e.target.value)} className={`searchbar__input searchbar__input--display-${searchbarDisplay}`} type="text" placeholder="Search Product..." />
          <button onClick={() => {handleSearchbarClick()}} className="searchbar__btn" type="submit"><IoSearch className={`searchbar__btn--color-${searchbarDisplay}`} /></button>
        </search>
        <div className="navigation-section__profile">
          <button onClick={() => handleProfileClick()} className="navigation-section__profile__button"><IoPerson /></button>
          <div className={`navigation-section__profile__options ${!showLoginOption ? "hidden" : ""}`}>
            <Link to="/login">
              Login
            </Link>
            <Link to="/Register">
              Register
            </Link>
          </div>
        </div>
        <button onClick={() => handleCartClick()} className="navigation-section__cart-btn"><IoCart className={`navigation-section__cart-btn--color-${cartDisplay}`} /></button>
        <button onClick={() => handleHeaderClick()} className="navigation-section__header-btn"><IoMenu display={headerDisplay ? "none" : "block"} /><IoClose style={{ color: "#FF6900" }} display={headerDisplay ? "block" : "none"} /></button>
      </section>
    </nav>
  )
}
