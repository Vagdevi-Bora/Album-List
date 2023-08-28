import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <div className="navbar">
            <Link to={props.path}><button>{props.page}</button></Link>
        </div>
    );
}