import { useParams } from "react-router";
import { useForm } from "react-hook-form"

function Perfil() {
  const { id } = useParams();
  const { register, handleSubmit, formState: {errors} } = useForm();
  const salvar = (data) => console.log(data);
  const regras = {
    nome: { required: "Nome é obrigatório", 
      minLength: { value: 3, message: "Nome tem no minimo 2 caracteres"},
      maxLength: { value: 100, message:"Nome tem no máximo 100 caracteres"}
     },
    email: { 
      required: "Email é obrigatório", 
      pattern: { 
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Email invalido"}
      },
    nascimento: {
      validate: {
      dataMinima: (value) => Date.parse(`${value} 00:00:00 UTC`)> new Date("01/01/1900").getTime || "Data invalida",
      dataMaxima: (value) => Date.parse(`${value} 00:00:00 UTC`)< new Date() .getTime ||"Data superior" 
      },
    },
    telefone: {
      min: { value:0, message: "Telefone invalido" },
      pattern: {
        value: /^(\(?\d{2}\)?[\s.-]?)?(\d{4,5})[\s.-]?(\d{4})$/,
        message: "Telefone invalido"
      },
    },
  };


  return (
    <>
      <h1>Perfil do Usuário {id}</h1>;
      <form onSubmit={handleSubmit(salvar)}>
        <div>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" {...register("nome", regras.nome)}/>
        {errors?.nome && <p>{errors.nome.message}</p>}
        </div>
        <div>
        <label htmlFor="">e-mail</label>
        <input type="email" id="email"  {...register("email", regras.email)}/>
        {errors?.nome && <p>{errors.email.message}</p>}
        </div>
        <div>
        <label htmlFor="">Data de Nascimento</label>
        <input type="date" id="nascimento" {...register("nascimento", regras.nascimento)} />
        {errors?.nome && <p>{errors.nascimento.message}</p>}
        </div>
        <div>
        <label htmlFor="telefone">Telefone</label>
        <input type="tel" id="telefone" {...register("telefone", regras.telefone)}/>
        {errors?.nome && <p>{errors.telefone.message}</p>}
        </div>
        <button></button>
      </form>
    </>
  );
}

export default Perfil;
