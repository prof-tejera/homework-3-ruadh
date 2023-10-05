import { useState } from "react";
import "./RadioButtons.css";
import Input from "components/Input/Input";
import Panel from "components/Panel/Panel";

const RadioButtons = () => {

  // Track form values in state
  const [apple, setApple] = useState(false);
  const [pear, setPear] = useState(false);
  const [orange, setOrange] = useState(false);


  return <Panel>

    {/* TO DO:  refactor to handle the toggling more elegantly */}
    <Input type="radio" id="apple" name="grouping" value="apple" label="Apple" checked={apple}
      onChange={(e) => {
        setApple(e.target.checked);
        setPear(false);
        setOrange(false);
      }} />
    <Input type="radio" id="pear" name="grouping" value="pear" label="Pear" checked={pear}
      onChange={(e) => {
        setApple(false);
        setPear(e.target.checked);
        setOrange(false);
      }} />
    <Input type="radio" id="orange" name="grouping" value="orange" label="Orange" checked={orange}
      onChange={(e) => {
        setApple(false);
        setPear(false);
        setOrange(e.target.checked);
      }} />
  </Panel>;
};

export default RadioButtons;
