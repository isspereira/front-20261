function Tabela ({titulos, dados}) {
    return (
        <table>
            <thead>
                <tr>
                    {titulos.map()}
                    <td>Coluna 1</td>
                    <td>Coluna 2</td>
                    <td>Coluna 3</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Valor 1</td>
                    <td>Valor 2</td>
                    <td>Valor 3</td>
                </tr>
                <tr>
                    <td>Valor 1</td>
                    <td>Valor 2</td>
                    <td>Valor 3</td>
                </tr>
                <tr>
                    <td>Valor 1</td>
                    <td>Valor 2</td>
                    <td>Valor 3</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Tabela;