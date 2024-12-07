import useCustomInput from "../hook/use-custom-input";

const notBlankValidate = (value) => value.trim() !== "";
const emailValidate = (value) => notBlankValidate(value) && value.includes("@");

const BasicForm = (props) => {
  const {
    inputState: fNameInput,
    onChange: onFNameChange,
    onBlur: onFNameBlur,
    reset: resetFName,
  } = useCustomInput(notBlankValidate);

  const {
    inputState: lNameInput,
    onChange: onLNameChange,
    onBlur: onLNameBlur,
    reset: resetLName,
  } = useCustomInput(notBlankValidate);

  const {
    inputState: emailInput,
    onChange: onEmailChange,
    onBlur: onEmailBlur,
    reset: resetEmail,
  } = useCustomInput(emailValidate);

  const isFormValid = fNameInput.valueIsValid && lNameInput.valueIsValid && emailInput.valueIsValid

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onLNameBlur();
    onFNameBlur();
    onEmailBlur();
    if (isFormValid) {
      resetFName();
      resetLName();
      resetEmail();
    }
  };

  const fNameClasses = fNameInput.hasError ? "form-control invalid" : "form-control";
  const lNameClasses = lNameInput.hasError ? "form-control invalid" : "form-control";
  const emailClasses = emailInput.hasError ? "form-control invalid" : "form-control";

  const emailIsBlank = !notBlankValidate(emailInput.enteredValue) && emailInput.isTouched;
  const emailWrongFormat = !emailInput.enteredValue.includes('@') && emailInput.isTouched;
  let emailMess = ''

  if (emailIsBlank) {
    emailMess = <p className="error-text">Must not be left blank</p>
  } else if (emailWrongFormat) {
    emailMess = <p className="error-text">Wrong email format</p>
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={fNameInput.enteredValue}
            onChange={event => onFNameChange(event.target.value)}
            onBlur={() => onFNameBlur()}
          />
          {fNameInput.hasError && (
            <p className="error-text">Must not be left blank</p>
          )}
        </div>
        <div className={lNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lNameInput.enteredValue}
            onChange={event => onLNameChange(event.target.value)}
            onBlur={() => onLNameBlur()}
          />
          {lNameInput.hasError && (
            <p className="error-text">Must not be left blank</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input 
          type="text" 
          id="name" 
          value={emailInput.enteredValue}
          onChange={event => onEmailChange(event.target.value)}
          onBlur={() => onEmailBlur()}  
        />
        {emailMess}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
