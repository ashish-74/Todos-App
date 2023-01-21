const Action = ({handlePick}) =>(
    <div>
        <button  className='bigButton'
            onClick={handlePick}
            >
            What should I do today ?
        </button>
    </div>
);

export default Action;