import List from "./List";
import NavBar from "./navbar";

export default function AlbumList(props) {

    return (
        <>
            <NavBar page="Add Album" path="add-album" />
            <div className="list-Container">
                {/* send every album as a prop to List component  */}
                {props.data?.map((album) => <List album={album} setUpdate={props.setUpdate} deleteAlbum={props.deleteAlbum} key={album.id} />)}
            </div>
        </>
    );

}


