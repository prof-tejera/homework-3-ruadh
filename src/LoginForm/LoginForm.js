import { useState } from "react";
import "./LoginForm.css";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Panel from "components/Panel/Panel";

const LoginForm = () => {

  // Track form values in state
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [rememberMe, setRememberMe] = useState('checked');

  return <Panel>
    <div>Username from state: {userName}</div>
    <div>Password from state: {password}</div>
    <div>RememberMe from state: {rememberMe}</div>
    <Input
      required
      onChange={(e) => setUserName(e.target.value)}
    />
    <Input
      required
      onChange={(e) => setPassword(e.target.value)}
    />
    <Input
      type='checkbox'
      value='remember me'
      onChange={(e) => setRememberMe(e.target.checked)}
      checked   // TO DO:  set this properly
    />
    <Button
      text="Submit"
    />
  </Panel>;
};

export default LoginForm;
