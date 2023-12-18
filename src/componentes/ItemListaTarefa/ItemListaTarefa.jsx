function ItemListaTarefa (props) {
    return (
        <li>
            <label className="checkbox-container">
                <input 
                    type="checkbox"
                    className="checkbox"
                />
                {props.descricao}    
            </label>
        </li>
    )
}

export default ItemListaTarefa