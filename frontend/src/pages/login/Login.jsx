import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>TransitOps</h1>
        <p>Smart Transport Operations Platform</p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;