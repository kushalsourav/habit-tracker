
import ContextProvider from "./Contexts/ContextProvider";
import Router from "./Router/Router";

function App() {
  return (
    <div>
      <ContextProvider>
      <Router />
      </ContextProvider>

    </div>
  );
}

export default App;
