import React, { useState } from "react";
import { useSelector } from "react-redux";
import simon from "/simon.png";
import "./styles/simon.css";

const SimonSaysGame = () => {
  const { namePlayer } = useSelector((state) => state);
  const [round, setRound] = useState(0); //null
  const [userPosition, setUserPosition] = useState(0); //posicion inicial
  const [totalRounds, setTotalRounds] = useState(5); //numero de jugadas
  const [sequence, setSequence] = useState([]);
  const [speed, setSpeed] = useState(1000);
  const [blockedButtons, setBlockedButtons] = useState(true);//Botones bloqueador 
  const [buttons, setButtons] = useState([]);
  const [errorSound] = useState(new Audio('./sounds/error.wav'));
  const [buttonSounds] = useState([
      new Audio('/sounds/1.mp3'),
      new Audio('/sounds/2.mp3'),
      new Audio('/sounds/3.mp3'),
      new Audio('/sounds/4.mp3'),
  ]);

  /*useEffect(simon => {
  const simonButtons = document.getElementsByClassName('square');
  const startButton = document.getElementById('startButton');
  setButtons(Array.from(simonButtons));

  const simon = {
    round: 0,
    userPosition: 0,
    totalRounds: 5,
    sequence: [],
    speed: 1000,
    blockedButtons: true,
    buttons: Array.from(simonButtons),
    display: {
      startButton,
      round,
    },
    errorSound,
    buttonSounds,
      // Inicia el Simon
      init() {
        this.display.startButton.onclick = () => this.startGame();
      },
      // Comienza el juego
      startGame() {
        this.display.startButton.disabled = true;
        this.updateRound(0);
        setUserPosition(0);
        setSequence(this.createSequence());
        buttons.forEach((element, i) => {
          element.classList.remove('winner');
          element.onclick = () => this.buttonClick(i);
        });
        this.showSequence();
      },
      // Actualiza la ronda y el tablero
      updateRound(value) {
        this.round = value;
        round.textContent = `Round ${this.round}`;
      },
      // Crea el array aleatorio de botones
      createSequence() {
        return Array.from({ length: this.totalRounds }, () =>
          this.getRandomColor()
        );
      },
      // Devuelve un número al azar entre 0 y 3
      getRandomColor() {
        return Math.floor(Math.random() * 4);
      },
      // Ejecuta una función cuando se hace click en un botón
      buttonClick(value) {
        !blockedButtons && this.validateChosenColor(value);
      },
      // Valida si el boton que toca el usuario corresponde a al valor de la secuencia
      validateChosenColor(value) {
        if (this.sequence[userPosition] === value) {
          this.buttonSounds[value].play();
          if (this.round === userPosition) {
            this.updateRound(this.round + 1);
            setSpeed((speed) => speed / 1.02);
            this.isGameOver();
          } else {
            setUserPosition((userPosition) => userPosition + 1);
          }
        } else {
          this.gameLost();
        }
      },
      // Verifica que no haya acabado el juego
      isGameOver() {
        if (this.round === this.totalRounds) {
          this.gameWon();
        } else {
          setUserPosition(0);
          this.showSequence();
        }
      },
      // Muestra la animacón de triunfo y actualiza el simon cuando el jugador gana
    gameWon() {
      this.display.startButton.disabled = false; 
      this.blockedButtons = true;
      this.buttons.forEach(element =>{
          element.classList.add('winner');
      });
      this.updateRound('🏆');
  }
}

const simon = new simon(simonButtons, startButton, round);
simon.init();

  }, []);*/
  
  
  
  return (
    <div className="simon__principal">
      <header>
        <h1>
          <span> Hi {namePlayer}</span>,let the game begin.
        </h1>
      </header>
      <div className="simon">
        <div className="simon__img">
          <img src={simon} alt="" />
        </div>
        <button id="simon__btn"  >Start</button>
        <div className="simon__container">
          <div className="square red"></div>
          <div className="square yellow"></div>
          <div className="square blue"></div>
          <div className="square green"></div>
        </div>
        <div id="Round"></div>
      </div>
    </div>
  );
};

export default SimonSaysGame;
