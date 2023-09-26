import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
    const data = [
        {
            id: 1,
            tittle: "Jeans ajustados",
            oldPrice: "€49.99",
            price: "€39.99",
            img: "https://images.pexels.com/photos/2652959/pexels-photo-2652959.jpeg?auto=compress&cs=tinysrgb&w=1600",
            
        },
        {
            id: 2,
            tittle: "Chaqueta",
            oldPrice: "€49.99",
            price: "€39.99",
            img: "https://images.pexels.com/photos/18362124/pexels-photo-18362124.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 3,
            tittle: "Camisa",
            oldPrice: "€29.99",
            price: "€20.99",
            img: "https://images.pexels.com/photos/3379242/pexels-photo-3379242.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 4,
            tittle: "Vestido",
            oldPrice: "€49.99",
            price: "€29.99",
            img: "https://images.pexels.com/photos/18350584/pexels-photo-18350584.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ]

    return(
        <div className="list">{data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
        </div>

    )
}

export default List;