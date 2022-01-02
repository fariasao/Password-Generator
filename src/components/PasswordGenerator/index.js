import "./styles.css";
import { useState, useEffect } from "react";

const PasswordGenerator = () => {

  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [digitsLength, setDigitsLength] = useState(2);
  const [symbolsLength, setSymbolsLength] = useState(2);

  useEffect(() => {
    // Gerar Senha Aleatoria
    const draftPassword = [];

    // popular o draftPassword (letras, digitos e simbolos)
    draftPassword.push("1")
    draftPassword.push("$")
    draftPassword.push("x")
    console.log("enzo")

    setPassword(
      draftPassword
        .slice(0, passwordLength) // cortar o tamanho do array para o tamanho permitido do passwordLength
        .sort(() => Math.random() - 0.5) // ordenar aleatoriamente itens no array 100% aleatorio
        .join("")); // transforma todo o array em uma string
  }, [passwordLength, digitsLength, symbolsLength])
  
  return (
    <>
      <div className="slider">
        <label htmlFor="password-lenght">Tamanho</label>
        <input
          id="password-lenght"
          type="range"
          min={4}
          max={64}
          value={passwordLength}
          onChange={({ target }) => setPasswordLength(parseInt(target.value))}
        />
        <span>{passwordLength}</span>
      </div>

      <div className="slider">
        <label htmlFor="digits-lenght">Digitos</label>
        <input
          id="digit-lenght"
          type="range"
          min={0}
          max={10}
          value={digitsLength}
          onChange={({ target }) => setDigitsLength(parseInt(target.value))}
        />
        <span>{digitsLength}</span>
      </div>

      <div className="slider">
        <label htmlFor="symbols-lenght">Simbolos</label>
        <input
          id="symbols-lenght"
          type="range"
          min={0}
          max={10}
          value={symbolsLength}
          onChange={({ target }) => setSymbolsLength(parseInt(target.value))}
        />
        <span>{symbolsLength}</span>
      </div>

      <h1 style={{ marginTop: "2rem", fontFamily: "monospace", textAlign: "center" }}>
        {password}
      </h1>
    </>
  );
};

export default PasswordGenerator;
