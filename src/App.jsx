import AppLayout from "./layouts/AppLayout";
import Home from "./views/Home";

const App = () => {
  return (
    <AppLayout title="Home">
      <Home />
    </AppLayout>
  );
};

export default App;
