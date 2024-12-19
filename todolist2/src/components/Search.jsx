const Search = ({search, setSearch}) => {
    return (
        <div className="search">
            <h2 id='h2search'>Procurar tarefas:</h2>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisa" className='search' />
        </div>
    )
}

export default Search