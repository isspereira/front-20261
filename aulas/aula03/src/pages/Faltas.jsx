
import Tabela from "../components/Tabelas";
import Layout from "./Layout";

function Faltas(){
    return (
        <Layout
        titulo="Minhas Faltas"
        subtitulo="Historico de Faltas por Semestre"
        >
            <Tabela />
            <Tabela />
            <Tabela />
        </Layout>
    )
    
}

export default Faltas;