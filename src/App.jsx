import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

export default function App() {

  return (
    <>
      <div className="font-sans text-gray-800">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}