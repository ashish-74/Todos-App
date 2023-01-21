import React, {useState, useEffect}  from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import axios from "axios";

function MainApp() {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
        setOptions(result.data);
        });
    }, []);

    const onUpdateTodo = (option) => {
        const todoItemIndex = options.findIndex((x) => x.id === option.id);
        const newTodos = [...options];

        const newTodo = newTodos[todoItemIndex];
        newTodo.completed = !newTodo.completed;
        newTodos[todoItemIndex] = newTodo;
        setOptions(newTodos);
    };

    const handleDeleteOption=(optionToRemove)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${optionToRemove}`).then(res =>
            setOptions(options.filter
            (option => optionToRemove !== option.id))
        )
    }

    const handleAddOption=(title)=>{
        if(!title){
            return 'Enter valid todo to add.';
        }
        else if(options.indexOf(title)>-1){
            return 'This option already exits.'
        }
        else{
            axios
            .post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed: false
            })
                .then(res => setOptions([res.data, ...options]))
        }
    }

    const handlePick=()=>{
        const pick = Math.floor(Math.random()*options.length);
        const option = options[pick].title;
        alert(option);
    }

    
    return(
        <div>
            <Header />
            <Action handlePick={handlePick}/>
            <AddOption handleAddOption={handleAddOption}/>
            <Options options={options} handleDeleteOption={handleDeleteOption} onUpdateTodo={onUpdateTodo} />
        </div>
    )
}

export default MainApp;