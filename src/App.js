// import Input from "components/Input/Input";
import MediaButtons from "MediaButtons/MediaButtons";
import LoginForm from "LoginForm/LoginForm";
import Pager from "Pager/Pager";
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
        <header className="App-header">Login form component (Done except for styling)</header>
        <div className="App-content">
          <LoginForm />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Pager component (In Progress)</header>
        <div className="App-content">
          <Pager buttonCt="6" pageCt="13" />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Radio Buttons component (Done except for styling)</header>
        <div className="App-content">
          <RadioButtons />
        </div>
      </div>
    </div>
  );
};

export default App;
