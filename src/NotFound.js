import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Oops, you seem to be lost!</h1>
      <p>Here are some useful links:</p>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/contact/signup">Signup</NavLink>
    </div>
  );
}


function App() {
    return (
        <Routes>
        <Route path='*' element={<NotFound />}/>
        </Routes>
    )
}
