
import Tabela from "../components/Tabelas";
import Layout from "./Layout";

function Requerimentos(){
    return (
        <Layout
            titulo="Meus Requerimentos"
            subtitulo="Faça solicitações online para secretaria"
        >
            <Tabela />
        </Layout>
    );
}

export default Requerimentos;