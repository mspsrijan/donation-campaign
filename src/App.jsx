import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="fontInter max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default App;
