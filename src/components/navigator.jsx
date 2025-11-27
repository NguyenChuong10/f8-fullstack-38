import { NavLink , Link } from "react-router";

function Navigator(){
    return(
            <header>
                <nav>
                    <ul>
                        <li> <Link to="/">EditAvatar</Link></li>
                        <li> <Link to="/UseRef">UseRef</Link></li>
                        <li> <Link to="/FocusInput">FocusInput</Link></li>
                        <li> <Link to="/JustFocusInput"> JustFocusInput</Link></li>
                        <li> <Link to="/NewTextinput">newTextinput</Link></li>
                        <li> <Link to="/TextInput">Textinput</Link></li>
                        <li> <Link to="/ReactMemo">RM</Link></li>
                    </ul>
                </nav>
            </header>
    );

}

export default Navigator;