import "./styles.css";
import { useState, useEffect } from "react";
import PasswordBox from '../PasswordBox';

const PasswordGenerator = () => {

  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [digitsLength, setDigitsLength] = useState(2);
  const [symbolsLength, setSymbolsLength] = useState(2);

  useEffect(() => {
    // Gerar Senha Aleatoria
    const draftPassword = [];

    // popular o draftPassword (letras, digitos e simbolos)
    draftPassword.push(...Array.from({ length: digitsLength }, randomDigit))
    draftPassword.push(...Array.from({ length: symbolsLength }, randomSymbol))
    draftPassword.push(...Array.from({ length: passwordLength }, randomLetter))

    setPassword(
      draftPassword
        .slice(0, passwordLength) // cortar o tamanho do array para o tamanho permitido do passwordLength
        .sort(() => Math.random() - 0.5) // ordenar aleatoriamente itens no array 100% aleatorio
        .join("")); // transforma todo o array em uma string
  }, [passwordLength, digitsLength, symbolsLength])
  
  const randomDigit = () => {
    const digits = "0123456789";

    return digits[Math.floor(Math.random() * digits.length)];
  }

  const randomSymbol = () => {
    const symbols = "#$%(+,./;?@[]!{}";

    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  const randomLetter = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    const letter = letters[Math.floor(Math.random() * letters.length)];

    return Math.random() >= 0.5 ? letter : letter.toUpperCase();
  }

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

      <PasswordBox password={password}/>
    </>
  );
};

export default PasswordGenerator;
