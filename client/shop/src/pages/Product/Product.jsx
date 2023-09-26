import React from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance"
import { useState } from "react";
const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1);

    const images = [
        "https://images.pexels.com/photos/6992255/pexels-photo-6992255.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    ]


    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt=" " onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} alt=" " onClick={e => setSelectedImg(1)} />
                </div>
            </div>
            <div className="mainImg">
                <img src={images[selectedImg]} alt="" />
            </div>
            <div className="right">
                <h1>Titulo</h1>
                <span>199€</span>
                <p>lorem ipsum</p>

                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>-</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon /> Añadir

                </button>

                <div className="link">
                    <div className="item">
                        <FavoriteBorderIcon /> Lista de deseos
                    </div>
                    <div className="item">
                        <BalanceIcon /> Añadir para comparar
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>





            </div>
        </div>
    )
}

export default Product;