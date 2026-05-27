import "./Notas.css";
import Tabela from "../components/Tabela";

function Notas() {
  const colunas = ["Disciplina", "Nota"];

  const dados = [
    {
      Disciplina: "Frontend",
      Nota: 8.5,
    },
    {
      Disciplina: "DevOps",
      Nota: 9.0,
    },
    {
      Disciplina: "Banco de Dados",
      Nota: 7.8,
    },
  ];

  return (
    <div className="notas-page">
      <h1>Notas</h1>

      <h2>Histórico Acadêmico</h2>

      <div className="notas-card">
        <Tabela titulos={colunas} dados={dados} />
      </div>
    </div>
  );
}

export default Notas;