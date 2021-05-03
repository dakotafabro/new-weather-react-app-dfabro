import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container App border p-5 mt-2 mb-2 shadow">
      <div>
        <Weather defaultCity="Los Angeles" />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
