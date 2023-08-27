import { Link } from "react-router-dom";
import NavBar from "./navbar";

export default function AddAlbum(props){

  const getData=()=>{
    const userId=document.getElementById("userid-inp").value;
    const title=document.getElementById("Title-inp").value;
    props.addAlbumList(Number(userId),title);
  }

    return(
      <>
      <NavBar page="Home" path="/"/>
      <h1 className="center">Enter New Album Details</h1>
      <div className="add-album">
      <p>Enter UserId</p>
      <input type="number" id="userid-inp"></input>
      <p>Enter Title</p>
      <input type="text" id="Title-inp"></input>
    <Link to="/"> <button onClick={getData} type="submit">Save</button> </Link>
     </div>
      </>
    );
}