import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Create your PopX account</h1>

      <div className="input-group">
        <label>Full Name*</label>
        <input type="text" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Phone number*</label>
        <input type="text" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Email address*</label>
        <input type="email" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Password*</label>
        <input type="password" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Company name</label>
        <input type="text" placeholder="Marry Doe" />
      </div>

      <div className="radio-group">
        <p>Are you an Agency?*</p>

        <label className="radio-label">
          <input type="radio" name="agency" defaultChecked />
          Yes
        </label>

        <label className="radio-label">
          <input type="radio" name="agency" />
          No
        </label>
      </div>

      <button className="primary-btn bottom-btn" onClick={() => navigate("/profile")}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;