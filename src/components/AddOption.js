import React,{useState}  from 'react';

function AddOption(props) {
    
    const [error,setError] = useState('');

    const handleAddOption=(event)=>{
        event.preventDefault();
        const title = event.target.elements.title.value.trim();
        const error = props.handleAddOption(title);

        setError(error);

        if(!error){
            event.target.elements.title.value = '';
        }
    }
        return(
            <div>
                {error && <p className='error'>{error}</p>}
                <br/>
                <form onSubmit={handleAddOption}>
                    <input className='addText' type='text' name='title'/>&nbsp;&nbsp;&nbsp;
                    <button className='addOption'>Add Todo</button>
                </form>
            </div>
        )
    }

export default AddOption;