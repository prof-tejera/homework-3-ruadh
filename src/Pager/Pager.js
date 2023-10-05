import "./Pager.css";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";

const Pager = () => {
  // To do:  accept an array, maybe nubmer
  return <Panel>
    <Button text="<" />
    <Button text="1" />
    <Button text="2" />
    <Button text="..." />
    <Button text="13" />
    <Button text=">" />
  </Panel>;
};

export default Pager;
