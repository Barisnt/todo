import { FluentProvider, webLightTheme, Button } from "@fluentui/react-components";

const App = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Button appearance="primary">Hello Fluent UI React</Button>
    </FluentProvider>
  );
};
export default App;
