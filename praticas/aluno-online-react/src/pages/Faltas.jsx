import "./Faltas.css";
import Tabela from "../components/Tabela";

function Faltas() {
  const colunas = ["Disciplina", "Faltas"];

  const dados = [
    { Disciplina: "Frontend", Faltas: 2 },
    { Disciplina: "DevOps", Faltas: 1 },
  ];

  return (
    <div>
      <h1>Faltas</h1>
      <p>Histórico de faltas</p>

      <Tabela titulos={colunas} dados={dados} />
    </div>
  );
}

export default Faltas;