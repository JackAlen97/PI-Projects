import "./login.css"

export default function login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginleft">
            <h3 className="loginlogo">MetaShot</h3>
            <span className="logindesc">
                Connect with friends around you on MetaShot
            </span>

        </div>
        <div className="loginright">
            <div className="loginbox">
                <input placeholder="Email" className="logininput" />
                <input placeholder="Password" className="logininput" />
                <button className="loginbutton">log in</button>
                <span className="loginforgot">Forgot Password</span>
              <button className="loginregister">Create a New Acount</button>
            </div>
        </div>
      </div>
    </div>
  )
}
