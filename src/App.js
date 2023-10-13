
import Toast from "./Components/Toast/Toast";
import ContextProvider from "./Contexts/ContextProvider";
import { useData } from "./Contexts/DataContext/DataContext";
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
