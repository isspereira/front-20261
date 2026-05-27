import "./Boletos.css";
import Tabela from "../components/Tabela";

function Boletos() {
  const colunas = ["Vencimento", "Valor"];

  const dados = [
    {
      Vencimento: "01/04/2026",
      Valor: "R$ 500,00",
    },
    {
      Vencimento: "01/05/2026",
      Valor: "R$ 500,00",
    },
    {
      Vencimento: "01/06/2026",
      Valor: "R$ 500,00",
    },
  ];

  return (
    <div className="boletos-page">
      <h1>Boletos</h1>

      <h2>Pagamentos</h2>

      <div className="boletos-card">
        <Tabela titulos={colunas} dados={dados} />
      </div>
    </div>
  );
}

export default Boletos;