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
    />

  </Panel>;
};

export default LoginForm;
