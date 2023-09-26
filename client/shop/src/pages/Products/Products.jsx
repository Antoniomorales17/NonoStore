import React, { useState } from "react";
import "./Products.scss"
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {

    const catId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)



    return (
        <div className="products" >
            <div className="left">
                <div className="filterItem">
                    <h2>Categoria de Producto</h2>
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1">Zapatillas</label>

                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2} />
                        <label htmlFor="1">Faldas</label>

                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={4} />
                        <label htmlFor="1">Abrigos</label>


                    </div>
                </div>

                <div className="filterItem">
                    <h2>Filtrar por Precio</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}></input>
                        <span> {maxPrice}</span>


                    </div>
                </div>
                <div className="filterItem">
                    <h2>Ordenar por</h2>
                    <div className="inputItem">

                        <input type="radio" id="asc" value="asc" name="price" onChange={e => setSort("asc")} />
                        <label htmlFor="asc">Precio (Más barato primero)</label>
                    </div>
                    <div className="inputItem">

                        <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("desc")} />
                        <label htmlFor="desc">Precio (Más caro primero)</label>
                    </div>


                </div>
            </div>
            <div className="right">
                <img className="catImg"
                    src="https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />

                <List catId={catId} maxPrice={maxPrice} sort={sort} />
            </div>
        </div>
    )
}

export default Products;