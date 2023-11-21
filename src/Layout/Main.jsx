import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar/>
<Outlet/>
        </div>
    );
};

export default Main;