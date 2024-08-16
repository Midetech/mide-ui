import Button from "@components/Button/Button";
import InputField from "@components/InputField/InputField";

function App() {
  return (
    <>
      <p className="text-4xl">Components</p>

      <Button size="md" variant="success">
        Click me
      </Button>

      <InputField
        placeholder="Enter email"
        className="outline-none"
        label="Email"
      />
    </>
  );
}

export default App;
