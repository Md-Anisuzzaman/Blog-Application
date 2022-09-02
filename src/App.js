import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
// import Searchbar from "./components/Searchbar";
import { Provider } from "react-redux";
import store from "./redux/store";


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navigation />
        {/* <Searchbar /> */}
        <Blogs />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
