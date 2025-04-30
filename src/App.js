import "./App.css";
import Profile from "./componts/Profile"
import img1 from "./assets/download.jpeg"
export default function App() {
  return (
    <div className="App">
      <h1>Hello MUGGLEs </h1>
      <h2>"FACEFOLIO"</h2>
      <p>
        this app it cn mke you a better developer
       </p>
       <div className="card-container ">
        <Profile name = "sam" role = "VIP*" image={img1} />
        <Profile name = "ps"  role = "cyber seurity analysis"image={img1} />
        <Profile name = "TK"  role ="frontend developer"image={img1} />
       </div>
    </div>
  );
}
