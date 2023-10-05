// import Input from "components/Input/Input";
import MediaButtons from "MediaButtons/MediaButtons";
import LoginForm from "LoginForm/LoginForm";
import Pager from "Pager/Pager";
import Panel from "components/Panel/Panel";
import RadioButtons from "RadioButtons/RadioButtons";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="App-component">
        <header className="App-header">
          Media Buttons Component (Example)
        </header>
        <div className="App-content">
          <MediaButtons />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">
          Notes
        </header>
        <div className="App-content">
          <Panel>
            Note:  I ran out of time on this one, and did not get to the following:
            <ul>
              <li>Updating the page numbering in the pager when you page to a number not shown in the initial list (in this case pg. 3-12)</li>
              <li>Refactoring as noted in the comments</li>
              <li>Any custom styling</li>
            </ul>
          </Panel>
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Login form component</header>
        <div className="App-content">
          <LoginForm />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Pager component (In Progress)</header>
        <div className="App-content">
          <Pager buttonCt="6" pageCt="13" initialPage="2" />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Radio Buttons component</header>
        <div className="App-content">
          <RadioButtons />
        </div>
      </div>
    </div>
  );
};

export default App;
