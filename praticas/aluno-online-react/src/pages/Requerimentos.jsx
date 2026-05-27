import "./Requerimentos.css";
import Tabela from "../components/Tabela";

function Requerimentos() {
  const colunas = ["Tipo", "Status"];

  const dados = [
    {
      Tipo: "Declaração de Matrícula",
      Status: "Em análise",
    },
    {
      Tipo: "Histórico Escolar",
      Status: "Aprovado",
    },
    {
      Tipo: "Segunda Via de Boleto",
      Status: "Pendente",
    },
  ];

  return (
    <div className="requerimentos-page">
      <h1>Requerimentos</h1>

      <h2>Solicitações</h2>

      <div className="requerimentos-card">
        <Tabela titulos={colunas} dados={dados} />
      </div>
    </div>
  );
}

export default Requerimentos;