import './App.css';
import logo from './assets/hero.png'

function Cabecalho () {
  return (
    <header>
      <h1>Titulo</h1>
    </header>
  );
}
function App() {
      {
  // //   <div>
  // //     <Cabecalho />
  // // <div>{2 + 2}</div>
  // // <img src={logo} alt="" />
  // // <p></p>
  // // </div>
   }
  return (

   <main>
      <img src="/learn.svg.svg" alt="Icone de um chapeu de formatura"/>
      <h1>Aluno Online</h1>
      <label htmlFor="Matricula">Matrícula</label>
      <input type="number" id="Matricula"
       name="Matricula" />
       <p id="matriculaErro"></p>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha"
      name="senha"/>
      <p id="senhaErro"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}

export default App;