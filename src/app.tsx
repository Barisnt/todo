import { FluentProvider, webLightTheme, Button, webDarkTheme } from "@fluentui/react-components";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { increment } from "./store/counter/counterSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const counterSelector = useAppSelector(state => state.counter.value);
  return (
    <FluentProvider theme={webLightTheme}>
      <Button
        appearance="primary"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </Button>
      {counterSelector}
    </FluentProvider>
  );
};
export default App;
