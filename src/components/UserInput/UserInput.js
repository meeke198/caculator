const UserInput = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
    const resetHandler = () => {

    }
    const changeHandler = (input, vaue) => {

    }
return (
  <form className="form" onSubmit={onSubmitHandler}>
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input
          type="number"
          id="current-savings"
          onChange={(e) => changeHandler("current-savings", e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input
          type="number"
          id="yearly-contribution"
          onChange={(e) => changeHandler("yearly-contribution", e.target.value)}
        />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">Expected Interest (%, per year)</label>
        <input
          type="number"
          id="expected-return"
          onChange={(e) => changeHandler("expected-return", e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input
          type="number"
          id="duration"
          onChange={(e) => changeHandler("duration", e.target.value)}
        />
      </p>
    </div>
    <p className="actions">
      <button type="reset" className="buttonAlt" onClick={resetHandler}>
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>
);
}
export default UserInput;