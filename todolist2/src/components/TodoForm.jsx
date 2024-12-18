import React from 'react'

const TodoForm = () => {
    return <div className="todo-form">
        <h2>Criar tarefa:</h2>
        <form>
            <input type="text" placeholder='Digite o titulo' className='esquerda' id='inputcriartarefa'/>
            <select id='selectcriartarefa' className='esquerda'>
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