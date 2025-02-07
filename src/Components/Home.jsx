import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from '../redux/commonSlice'
import { useEffect, useState } from "react";
import StarRatings from 'react-star-ratings';
import "../styles/home.css"

function Home() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const products = useSelector(state => state.deeCart.data);
    console.log(search)

    useEffect(() => {
        dispatch(fetchApiData());
    }, [dispatch])

    const searchProducts = products.filter((product) => {
        return Object.keys(product).some((key) => 
          product[key].toString().toLowerCase().includes(search.toString().toLowerCase()))
    });
    // console.log(searchProducts,'searchProducts')

    const Truncate = (str, num) => {
        if(!str){
            return null
        }
        if(str.length <= num){
            return str
        }
        return str.slice(0, num) + "..."
    }

    return (
        <div>
            <h1>Welcome to DeeCart</h1>
            <section>
                <div className="container">
                    <input 
                        className="product-input"
                        placeholder="Search for Products" 
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        />
                    <div className="grid">
                        {searchProducts.map((product) => (
                            <div className="card" key={product.id}>
                                <img
                                    className="card-image"
                                    src={product.image}
                                    alt={product.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title"
                                        title={product.title.length >= 50 ? product.title : null}
                                    >
                                      {Truncate(product.title, 55)}
                                    </h5>
                                    <p className="card-price">${product.price}</p>
                                    <div className="card-detail">
                                        <StarRatings 
                                            rating={product.rating.rate}
                                            starDimension="16px"
                                            starSpacing="1px"
                                            starRatedColor="black"
                                        /><br/>
                                        <span>Stock:{product.rating.count}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home