import { useState } from "react";
import "./LoginForm.css";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Panel from "components/Panel/Panel";

const LoginForm = () => {

  // Track form values in state
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [rememberMe, setRememberMe] = useState(true);

  // Placeholder login function
  const logMeIn = () => {
    alert(`Logging in as user ${userName} with password ${password} and remember me set to ${rememberMe}`);
  } 

  return <Panel>

    <Input
      type='text'
      label='username'
      required
      onChange={(e) => setUserName(e.target.value)}
    />
    <Input
      type='text'
      label='password'
      required
      onChange={(e) => setPassword(e.target.value)}
    />
    <Input
      type='checkbox'
      label='Remember Me'
      value='remember me'
      onChange={(e) => setRememberMe(e.target.checked)}
      checked={rememberMe}  
    />
    <Button
      text="Submit"
      onClick={() => logMeIn()}
    />

  </Panel>;
};

export default LoginForm;
