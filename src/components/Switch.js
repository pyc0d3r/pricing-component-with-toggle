function Switch({ active, onChange }) {
  return (
    <div className="toggle">
      <label className="switch">
        <div className="section">
          <span>Annually</span>
          <input type="checkbox" checked={active} onChange={onChange} />
          <span className="slider round"></span>
          <span>Monthly</span>
        </div>
      </label>
    </div>
  );
}

export default Switch;