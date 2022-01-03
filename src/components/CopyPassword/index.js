import "./styles.css"

const CopyPassword = ({ password }) => {

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
  }

  return ( 
    <div className="actions">
      <button className="copy-password" onClick={copyPasswordToClipboard}>
        Copiar para Area de Transferencia
      </button>
    </div>
  )
};

export default CopyPassword;