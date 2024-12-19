import { useState } from 'react'

const TodoForm = ({ addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category);
        setValue("")
        setCategory("")
    }

    return <div className="todo-form">
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder='Digite o titulo' onChange={(e) => setValue(e.target.value)} className='esquerda' id='inputcriartarefa' />
            <select value={category} id='selectcriartarefa' className='esquerda' onChange={(e) => setCategory(e.target.value)}>
            <option value="">Categoria</option>
            <option value="Trabalho">Trabalho </option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
            </select>
            <button type='submit' id='CriarTarefa' className='direita'>Criar tarefa</button>
        </form>
    </div>    
}

export default TodoForm