import React from "react";
import simon from "/simon.png";
import "./styles/home.css";
import { setNamePlayer } from "../store/slices/playerName.Slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { namePlayer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setNamePlayer(e.target.name.value.trim()));
    e.target.name.value = "";
    navigate("/simon");
  };

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__img" src={simon} alt="" />
        <h1 className="home__h1">¡Hi Player!</h1>
        <p className="home__p"> To Start , Tell Me Your Name </p>
        <form className="home__form" onSubmit={handleSubmit}>
          <input
            className="home__input"
            id="name"
            type="text"
            placeholder="Insert name"
          />
          <button className="home__btn"> Start</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
