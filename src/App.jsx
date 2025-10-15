import "./App.css";
import NavBar from "./Components/NavBar";
import ListGroup from "./components/ListGroup";
import Form from "./Components/Form";
import RatingCount from "./components/RatingCount";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
   <FeedbackProvider>
      <NavBar />
      <div className="p-12">
        <h1 className="text-center text-2xl font-semibold text-gray-700">
          Enter Your Feedback
        </h1>
        <Form />
        <RatingCount />
        <ListGroup />
      </div>
    </FeedbackProvider>
  );
};

export default App;
