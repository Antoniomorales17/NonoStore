import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";


const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            tittle: "Camiseta de algodón",
            oldPrice: "€29.99",
            price: "€19.99",
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 2,
            tittle: "Jeans ajustados",
            oldPrice: "€49.99",
            price: "€39.99",
            img: "https://images.pexels.com/photos/2652959/pexels-photo-2652959.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 3,
            tittle: "Vestido floral",
            oldPrice: "€39.99",
            price: "€29.99",
            img: "https://images.pexels.com/photos/3379242/pexels-photo-3379242.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id: 4,
            tittle: "Chaqueta de cuero",
            oldPrice: "€89.99",
            price: "€69.99",
            img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
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