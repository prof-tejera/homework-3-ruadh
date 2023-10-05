import "./RadioButtons.css";
import Input from "components/Input/Input";
import Panel from "components/Panel/Panel";

const RadioButtons = () => {
  return <Panel>
    {/* TO DO:  Iterate over values list, pass an ID, put the labels in the Input component */}
    <Input type="radio" id="apple" name="grouping" value="apple"/>
    <label for ="apple">Apple</label>
    <Input type="radio" id="pear" name="grouping" value="pear" />
    <label for="pear">Pear</label>
    <Input type="radio" id="orange" name="grouping" value="orange" />
    <label for="orange">Orange</label>
  </Panel>;
};

export default RadioButtons;
