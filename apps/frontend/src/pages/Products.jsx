import { FiChevronUp, FiSliders } from "react-icons/fi";
import { Link } from "react-router";

export default function Products(){
    return(
        <>
            <h1 className="main__title">PRODUCTS</h1>
            <section className="products">
                <div className="products-filter">
                    <h2 className="products-filter__title">Sort by</h2>
                    <button className="products-filter__hide-btn">Brand <span><FiChevronUp /></span></button>
                    <form className="filters">
                        <label className="filters__label" htmlFor="placeholder1">placeholder1</label>
                        <input className="filters__checkbox" type="checkbox" id="placeholder1" />
                        <label className="filters__label" htmlFor="placeholder2">placeholder2</label>
                        <input className="filters__checkbox" type="checkbox" id="placeholder2" />
                        <label className="filters__label" htmlFor="placeholder3">placeholder3</label>
                        <input className="filters__checkbox" type="checkbox" id="placeholder3" />
                    </form>
                    <button className="products-filter__hide-btn">Color <span><FiChevronUp /></span></button>
                    <form className="filters">
                        <label className="filters__label" htmlFor="placeholder1">placeholder1</label>
                        <input className="filters__checkbox" type="checkbox" id="placeholder1" />
                        <label className="filters__label" htmlFor="placeholder2">placeholder2</label>
                        <input className="filters__checkbox" type="checkbox" id="placeholder2" />
                        <label className="filters__label" htmlFor="placeholder3">placeholder3</label>
                        <input className="filters__checkbox" type="checkbox" id="placeholder3" />
                    </form>
                    <button className="products-filter__hide-btn">Price <span><FiChevronUp /></span></button>
                    <form className="filters">
                        <input className="filters__price-range" type="range" name="" id="" />
                    </form>
                </div>
                <ul className="products-list">
                    <li className="list-item">
                        <button className="list-item__compare-btn">Compare <FiSliders /></button>
                        <Link className="item-info" to="/details">
                            <img className="item-info__picture" src="https://placehold.co/200x100" alt="" />
                            <h3 className="item-info__title">Auralic Aries G2.1 Streamer</h3>
                            <p className="item-info__type">(Digital Output)</p>
                            <p className="item-info__price">£ 4,799.00</p>
                        </Link>
                        <div className="item-action">
                            <button className="item-action__cart-btn">Add to cart</button>
                            <p className="item-action__stock">In Stock <span></span></p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}