import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../main";
import Swal from "sweetalert2";

const orderDetailPage = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  const initialState = {
    usuario: "",
    mail: "",
    items: cart.map((game) => ({
      id: game.id,
      nombre: game.nombre,
      precio: game.precio,
      cantidad: game.quantity,
    })),
    total: totalPrice(),
  };

  const [ticket, setTicket] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleOnSumbit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "tickets"), {
      ticket,
    });

    clearCart();

    setTicket(initialState);

    Swal.fire({
      title: "¡listo!",
      text: `Compra realizada con exito, tu numero de compra es: ${docRef.id}`,
      confirmButtonText: "Aceptar",
      width: "800px",
    });
  };

  return (
    <div className="orderDetail">
      <form className="orderDetail__form" onSubmit={handleOnSumbit}>
        <h2 className="f1">Ingrese sus datos para terminar su compra</h2>

        <input
          type="text"
          name="usuario"
          id="usuario"
          value={ticket.usuario}
          placeholder="Ingrese su nombre"
          onChange={handleOnChange}
          required
        />

        <input
          type="text"
          name="mail"
          id="mail"
          value={ticket.mail}
          placeholder="Ingrese su mail"
          onChange={handleOnChange}
          required
        />

        <input
          type="submit"
          value="Confirmar compra"
          className="btnStyle1 f1"
          style={{ width: "160px", fontSize: "1.5rem" }}
        />
      </form>
    </div>
  );
};

export default orderDetailPage;
