import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";


const FeaturedProducts = ({ type }) => {

    const data = [
        
        {
            id: 1,
            tittle: "Jersey",
            oldPrice: "€49.99",
            price: "€39.99",
            img: "https://images.pexels.com/photos/18305042/pexels-photo-18305042.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            tittle: "Camisa",
            oldPrice: "€39.99",
            price: "€29.99",
            img: "https://images.pexels.com/photos/3379242/pexels-photo-3379242.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 3,
            tittle: "Sombrero",
            oldPrice: "€19.99",
            price: "€14.99",
            img: "https://images.pexels.com/photos/18384083/pexels-photo-18384083.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];
    return (
        <div className="featuredProducts">
            <div className="top">
            <h1>{type} Productos Destacados</h1>

                <p>Descubre nuestra selección de productos destacados. En NonoShop, nos enorgullece presentarte estas excelentes opciones que hemos elegido especialmente para ti. Desde elegantes vestidos hasta cómodos pantalones, nuestros productos destacados te ayudarán a lucir a la moda en cualquier ocasión. ¡Explora y encuentra tu estilo perfecto!</p>
            </div>
            <div className="bottom">
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}

            </div>

        </div>
    )
}

export default FeaturedProducts;