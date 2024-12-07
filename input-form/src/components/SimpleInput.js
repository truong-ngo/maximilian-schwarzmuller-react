import useInput from "../hook/use-input";

const isNameValid = name => {
  return name.trim() !== "";
};

const isEmailValid = email => {
  return email.trim() !== "" && email.includes("@");
}

const SimpleInput = (props) => {
  const {
    enteredValue: nameEntered,
    valueIsValid: enteredNameIsValid,
    isTouched: isNameTouched,
    hasError: inputNameIsInvalid,
    onChange: onInputNameChange,
    onBlur: onInputNameBlur,
    reset: resetName
  } = useInput(isNameValid);

  const {
    enteredValue: emailEntered,
    valueIsValid: enteredEmailIsVaild,
    isTouched: isEmailTouched,
    hasError: inputEmailIsInvalid,
    onChange: onInputEmailChange,
    onBlur: onInputEmailBlur,
    reset: resetEmail
  } = useInput(isEmailValid);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    onInputNameBlur();
    onInputEmailBlur();
    resetName();
    resetEmail();
  };

  const inputNameClass = inputNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const inputEmailClass = inputEmailIsInvalid
    ? "form-control invalid"
    : "form-control";
  const formIsValid = enteredNameIsValid && enteredEmailIsVaild;

  let emailMess = "";
  if (emailEntered.trim() === "" && isEmailTouched) {
    emailMess = <p className="error-text">Email must not be empty.</p>;
  } else if (!emailEntered.includes("@") && isEmailTouched) {
    emailMess = <p className="error-text">Must be email format.</p>;
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputNameClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={event => {onInputNameChange(event.target.value)}}
          onBlur={() => {onInputNameBlur()}}
          value={nameEntered}
        />
        {inputNameIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={inputEmailClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={event => {onInputEmailChange(event.target.value)}}
          onBlur={() => {onInputEmailBlur()}}
          value={emailEntered}
        />
        {emailMess}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
