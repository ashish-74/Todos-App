import Option from "../components/Option"

const Options =(props)=> (
    <div>
        {props.options.length ===0 && <p className='error'>Please add an option to proceed.</p>}
        {
            props.options.map((option)=> 
            <Option 
                option={option} 
                key={option.id}
                handleDeleteOption={props.handleDeleteOption}
                onUpdateTodo={props.onUpdateTodo}
            />)
        }
    </div>
);

export default Options;