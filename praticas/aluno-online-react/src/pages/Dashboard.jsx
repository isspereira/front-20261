import "./Dashboard.css";
import Layout from "../components/Layout";
import Card from "../components/Card";

function Dashboard() {
  return (
    <Layout titulo="Olá, Aluno" subtitulo="Bem-vindo">
      <Card titulo="Avisos" items={["Prova amanhã", "Evento"]} />
      <Card titulo="Disciplinas" items={["Frontend", "DevOps"]} />
    </Layout>
  );
}

export default Dashboard;