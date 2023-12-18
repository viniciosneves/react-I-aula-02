import { useState } from 'react'
import ItemListaTarefa from '../ItemListaTarefa/ItemListaTarefa'

function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState('')

    function armazenaValorInput (evento) {
        setNovaTarefa(evento.target.value)
    }

    function manipularSubmissaoDoForm (evento) {
        evento.preventDefault()
        setTarefas([...tarefas, novaTarefa])
        setNovaTarefa('')
        console.log('enviando o formulario')
    }

    // retornando o JSX do componente
    return (
        <div className="container">
            <h1>Tarefas</h1>
            <form onSubmit={manipularSubmissaoDoForm}>
                <input 
                    type="text" 
                    onChange={armazenaValorInput} 
                    value={novaTarefa} 
                    placeholder='Digite o nome da tarefa e pressione enter.'
                    className='input-tarefa'
                />
            </form>
            <ul>
                {tarefas.map(
                    (tarefa, indice) => {
                        return (<ItemListaTarefa key={indice} descricao={tarefa}/>)
                    }
                )}
            </ul>
        </div>
    )
}

export default ListaDeTarefas