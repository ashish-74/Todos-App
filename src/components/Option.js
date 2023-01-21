const Option=(props)=>(
    <div className='container'>            
        {props.option.completed ? <span className="completeTodo">{props.option.title}</span> : props.option.title}
        <input
            type="checkbox"
            checked={props.option.completed}
            onChange={() => props.onUpdateTodo(props.option)}
        />
        <button className='optionBtn' onClick={(e)=>{
            props.handleDeleteOption(props.option.id);
        }}>
            Delete
        </button>
    </div>
);

export default Option;