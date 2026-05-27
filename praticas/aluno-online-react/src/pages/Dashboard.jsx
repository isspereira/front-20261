import "./Dashboard.css";
import Card from "../components/Card";

function Dashboard() {
  return (
    <div>
      <h1>Olá, Aluno 👋</h1>
      <p>Bem-vindo ao sistema acadêmico</p>

      <div className="dashboard-grid">
        <Card titulo="Avisos" items={["Prova amanhã", "Evento"]} />

        <Card
          titulo="Disciplinas"
          items={["Frontend", "DevOps"]}
        />
      </div>
    </div>
  );
}

export default Dashboard;