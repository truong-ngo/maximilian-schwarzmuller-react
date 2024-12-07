const NewExpenseCreate = (props) => {
    const toggleFormHandler = () => {
        props.onToggleForm();
    }

    return <button type="button" onClick={toggleFormHandler}>Add new expense</button>
}

export default NewExpenseCreate