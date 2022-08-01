const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <input
        type={type}
        className="form-input"
        id={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;