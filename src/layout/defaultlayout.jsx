
import { Outlet } from "react-router";
import Header from "@/components/Header";
function Defaultlayout() {
     return(
        <div className="w-[1000px] h-full bg-amber-200">
            <Header/>
            <main>
                <Outlet></Outlet>
            </main>
        </div>    
    );
};

export default Defaultlayout;