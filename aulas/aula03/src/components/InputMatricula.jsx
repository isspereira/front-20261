
function inputMatricula ({valor, erro, mudaValor}){
    return (
    <>
  <label htmlFor="matricula">Matricula</label>
        <input 
        type="number" 
        id="matricula" 
        name="matricula" 
        value={valor}
        onChange={mudaValor}
        />
        <p>{erro}</p>
        </>
    );
}

export default inputMatricula;