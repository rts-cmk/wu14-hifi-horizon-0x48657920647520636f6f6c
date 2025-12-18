import { useEffect, useState } from "react";
import { FiCheck, FiChevronDown, FiChevronUp, FiSliders } from "react-icons/fi";
import { Link, useLoaderData, useSearchParams } from "react-router";

export default function Products(){

    const {products: productsdata} = useLoaderData()
    const {categories: categoriesdata} = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const paramsCategory = searchParams.get("category")

    const [categoriesDisplay, setCategoriesyDisplay] = useState("flex")
    const [colorDisplay, setColorDisplay] = useState("none")
    const [priceDisplay, setPriceDisplay] = useState("none")

    const [categoryBtnColor, setCategoryBtnColor] = useState(paramsCategory || null)
    const [priceBtnColor, setPriceBtnColor] = useState(null)

    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedPrice, setSelectedPrice] = useState(null)
    const [filteredData, setfilteredData] = useState(productsdata)

    useEffect(() => {
        let data = productsdata.filter((product) => paramsCategory ? product.category.name === paramsCategory : product)

        if (selectedCategory) {
            data = data.filter(
                product => product.category.name === selectedCategory
            )
        }

        if (selectedPrice) {
            const { min, max } = selectedPrice
            data = data.filter(product => max ? product.price > min && product.price < max : product.price > min)
        }

        setfilteredData(data)
    }, [selectedCategory, selectedPrice, productsdata])

    const pricesArray = [
        {name: "Min - 500", min: 0, max: 500}, 
        {name: "501 - 1000", min: 501, max: 1000}, 
        {name: "1001 - 2000", min: 1001, max: 2000}, 
        {name: "2001 - 3000", min: 2001, max: 3000}, 
        {name: "3001 - Max", min: 3001}
    ]
    
    const handleCategoryClick = (name) => {
        if(categoryBtnColor === name){
            setCategoryBtnColor(null)
            setSearchParams(``)
            setSelectedCategory(null)
        } else{
            setCategoryBtnColor(name)
            setSearchParams(`category=${name}`)
            setSelectedCategory(name)
        }
    }

    const handlePriceClick = (min, max, name) => {
        if(priceBtnColor === name){
            setPriceBtnColor(null)
            setSelectedPrice(null)
        } else{
            setPriceBtnColor(name)
            setSelectedPrice({ min, max })
        }
    }

    return(
        <>
            <h1 className="main__title">PRODUCTS</h1>
            <section className="products">
                <div className="products-filter">
                    <h2 className="products-filter__title">Sort by</h2>
                    <button onClick={() => setCategoriesyDisplay(categoriesDisplay === "none" ? "flex" : "none")} className="products-filter__hide-btn">Category <span className="products-filter__hide-btn--icon"><FiChevronUp display={categoriesDisplay === "none" ? "block" : "none"} /><FiChevronDown display={categoriesDisplay === "none" ? "none" : "block"}/></span></button>
                    <ul className="filters" style={{display: categoriesDisplay}}>
                        {
                            categoriesdata.map((category => {
                                return(
                                    <li key={category.name} className="filters__item">
                                        <p className="filters__title">{category.name}</p>
                                        <button style={{color: categoryBtnColor === category.name ? "#008000" : "#ffffff"}} onClick={() => handleCategoryClick(category.name)} className="filters__checkbox"><FiCheck /></button>
                                    </li>
                                )
                            }))
                        }
                    </ul>
                    <button onClick={() => setColorDisplay(colorDisplay === "none" ? "flex" : "none")} className="products-filter__hide-btn">Color <span className="products-filter__hide-btn--icon"><FiChevronUp display={colorDisplay === "none" ? "block" : "none"} /><FiChevronDown display={colorDisplay === "none" ? "none" : "block"}/></span></button>
                    <ul className="filters" style={{display: colorDisplay}}>
                        <li className="filters__item">
                            <p className="filters__title">White</p>
                            <button className="filters__checkbox"><FiCheck /></button>
                        </li>
                        <li className="filters__item">
                            <p className="filters__title">Black</p>
                            <button className="filters__checkbox"><FiCheck /></button>
                        </li>
                        <li className="filters__item">
                            <p className="filters__title">Grey</p>
                            <button className="filters__checkbox"><FiCheck /></button>
                        </li>
                    </ul>
                    <button onClick={() => setPriceDisplay(priceDisplay === "none" ? "flex" : "none")} className="products-filter__hide-btn">Price <span className="products-filter__hide-btn--icon"><FiChevronUp display={priceDisplay === "none" ? "block" : "none"} /><FiChevronDown display={priceDisplay === "none" ? "none" : "block"}/></span></button>
                    <ul className="filters" style={{display: priceDisplay}}>
                        {
                            pricesArray.map((data) => {
                                return(
                                    <li key={data.name} className="filters__item">
                                        <p className="filters__title">{data.name}</p>
                                        <button style={{color: priceBtnColor === data.name ? "#008000" : "#ffffff"}} onClick={() => handlePriceClick(data.min, data.max, data.name)} className="filters__checkbox"><FiCheck /></button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ul className="products-list">
                    {
                        filteredData.map((product, index)=> {
                            return(
                                <li key={product.name} className="list-product">
                                    <button className="list-product__compare-btn">Compare <FiSliders className="list-product__compare-btn--icon"/></button>
                                    <Link className="product-info" to={`/details/${product.name}`}>
                                        <img className="product-info__picture" src={product.variants[0].imageURL || "https://placehold.co/200x100"} alt={product.name} />
                                        <h3 className="product-info__title">{product.name}</h3>
                                        <p className="product-info__type">(Digital Output)</p>
                                        <p className="product-info__price">£ {product.price}</p>
                                    </Link>
                                    <div className="product-action">
                                        <button className="product-action__cart-btn">Add to cart</button>
                                        <p className="product-action__stock">In Stock <span className="product-action__stock--indicator"></span></p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}