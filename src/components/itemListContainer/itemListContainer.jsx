import { Link } from "react-router-dom";

const itemListContainer = ({ game }) => {
  const { img, nombre, precio, id } = game;
  return (
    <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
      <section className="card">
        <img src={`${img}`} alt={`${nombre}`} className="border" />
        <div className="card-data font-inter">
          <p className="text-body text-white ">{nombre}</p>
          <p className="text-body text-black bold bg-yellow border padding card-data-price">
            ${precio}
          </p>
        </div>
      </section>
    </Link>
  );
};

export default itemListContainer;
