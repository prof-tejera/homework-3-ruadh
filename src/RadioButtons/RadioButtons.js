import "./RadioButtons.css";
import Input from "components/Input/Input";
import Panel from "components/Panel/Panel";

const RadioButtons = () => {
  return <Panel>
    {/* TO DO:  Iterate over values list, pass an ID */}
    <Input type="radio" id="val1" name="grouping" value="val1"/>
    <label for ="val1">Value 1</label>
    <Input type="radio" id="val2" name="grouping" value="val2" />
    <label for="val2">Value 2</label>
  </Panel>;
};

export default RadioButtons;
