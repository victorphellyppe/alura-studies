
function Lista() {
    const title = 'Estudos do dia';
    const tarefas = [
        {
            tarefa:'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'Javascript',
            tempo: '01:30:00'
        }
    ];
    return (
        <aside>
            <h2> {title} </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li>
                        <h3>{item.tarefa}</h3>
                        <span> {item.tempo} </span>
                    </li>
                ))}
                                
            </ul>
        </aside>
    );
}

export default Lista;