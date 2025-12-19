import { useLoaderData, useParams } from "react-router"
import { FiChevronLeft, FiChevronRight, FiSliders, FiPlus, FiMinus } from "react-icons/fi";

export default function Details(){

    const {products: productsdata} = useLoaderData()
    const params = useParams()
    const data = productsdata.find((product) => product.name === params.productId)
    const specificationArray = [
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"},
        {name: "xxxxxxx", info: "xxxxxxx"}
    ]

    return(
        <>
            <h1 className="main__title">PRODUCTS</h1>
            <section className="product-details">
                <figure className="details-slider">
                    <div className="details-images">
                        <button className="details-images__btn"><FiChevronLeft/></button>
                        <img className="details-images__picture" src={data.variants[0].imageURL || "https://placehold.co/200x100"} alt={data.name} />
                        <button className="details-images__btn"><FiChevronRight/></button>
                    </div>
                    <ul className="details-dots">
                        <li className="details-dots__item"></li>
                        <li className="details-dots__item"></li>
                        <li className="details-dots__item"></li>
                    </ul>
                </figure>
                <article className="details-info">
                    <button className="details-info__compare-btn">Compare<FiSliders className="details-info__compare-btn--icon"/></button>
                    <h2 className="details-info__title">{data.name}</h2>
                    <h3 className="details-info__subtitle">(Digital Output)</h3>
                    <p className="details-info__text">{data.description}</p>
                    <ul className="details-color-list">
                        <li className="details-color-list-item">
                            <button className="details-color-list-item__btn details-color-list-item__btn--black"></button>
                            <p className="details-color-list-item__text">Black</p>
                        </li>
                        <li className="details-color-list-item">
                            <button className="details-color-list-item__btn details-color-list-item__btn--silver"></button>
                            <p className="details-color-list-item__text">Silver</p>
                        </li>
                        <li className="details-color-list-item">
                            <button className="details-color-list-item__btn details-color-list-item__btn--gold"></button>
                            <p className="details-color-list-item__text">Gold</p>
                        </li>
                    </ul>
                    <div className="details-pricing">
                        <p className="details-pricing__price">£ {data.price}</p>
                        <p className="details-pricing__stock">In Stock <span className="details-pricing__stock--indicator"></span></p>
                    </div>
                    <div className="details-action">
                        <div className="details-count">
                            <button className="details-count__increment"><FiMinus/></button>
                            <p className="details-count__amount">0</p>
                            <button className="details-count__increment"><FiPlus/></button>
                        </div>
                        <button className="details-action__add-btn">Add to cart</button>
                    </div>
                </article>
            </section>
            <div className="border"></div>
            <section className="specifications">
                <h2 className="specifications__title">PRODUCT SPECIFICATIONS</h2>
                <table className="specification-info-table">
                    <tbody className="specification-info-body">
                        {
                            specificationArray.map((item, index) => {
                                return(
                                    <tr key={item.name + index} className="specification-info-row">
                                        <th className="specification-info-row__name">{item.name}</th>
                                        <td className="specification-info-row__text">{item.info}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}