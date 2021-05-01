import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container App border p-5 mt-5 shadow">
      <div>
        <Weather />
      </div>
    </div>
  );
}
