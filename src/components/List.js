import {Link} from "react-router-dom";

export default function List(props){
    return(
       <>
       <div className="list">
       <h2>{props.album.title}</h2>
       <div className="buttons">
       <Link to="/update-album"><button onClick={()=>props.setUpdate(props.album)}>Update</button></Link>
        <button onClick={()=>props.deleteAlbum(props.album.id)}>Delete</button>
       </div>
       </div>
       </>
    );
}