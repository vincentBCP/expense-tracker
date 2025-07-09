import AppProvider from "./context/AppContext";
import AppLayout from "./layouts/AppLayout";
import Home from "./views/Home";

const App = () => {
  return (
    <AppProvider>
      <AppLayout title="Home">
        <Home />
      </AppLayout>
    </AppProvider>
  );
};

export default App;
