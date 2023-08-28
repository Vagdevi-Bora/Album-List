import { Link } from "react-router-dom";
import NavBar from "./navbar";
export function UpdateAlbum(props) {

    const getUpdate = () => {
        const id = props.album.id;
        let updateUserId = document.getElementById("userId-inp").value;
        let updateTitle = document.getElementById("title-inp").value;

        if (updateUserId === '') {
            updateUserId = props.album.userId;
        }
        if (updateTitle === '') {
            updateTitle = props.album.title;
        }
        props.updateAlbum(id, updateUserId, updateTitle, props.album);
    }

    return (
        <>
            <NavBar page="Home" path="/" />
            <h1 className="center">Enter Updating Details</h1>
            <div className="update-container">
                <div className="inp-container">
                    <p>Enter UserId</p>
                    <input type="number" id="userId-inp"></input>
                </div>
                <div className="inp-container">
                    <p>Enter Title</p>
                    <input type="text" id="title-inp"></input>
                </div>
                <Link to="/"><button onClick={getUpdate}>Save</button></Link>
            </div>
        </>
    )

}