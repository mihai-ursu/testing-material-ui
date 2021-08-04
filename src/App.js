import "./App.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <ButtonGroup>
        <Button
          startIcon={<SaveIcon />}
          size="large"
          variant="contained"
          color="primary"
        >
          Save
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          size="large"
          variant="contained"
          color="secondary"
        >
          Discard
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
