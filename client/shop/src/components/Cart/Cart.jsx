import React from "react";
import "./Cart.scss"; // Asegúrate de incluir la extensión ".scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      tittle: "Jeans ajustados",
      desc:"Jeans ajustados",
      oldPrice: "€49.99",
      price: "€39.99",
      img:
        "https://images.pexels.com/photos/2652959/pexels-photo-2652959.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="cart">
      <h1>Productos en la cesta</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.tittle}</h1>
           
             <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x {item.price}</div>
          </div>
          {/* Mueve className aquí para aplicar la clase correctamente */}
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>€123</span>
      </div>
      <button>PROCEDER AL CHECKOUT</button>
      <span className="reset">Reset cart</span>
    </div>
  );
};

export default Cart;
