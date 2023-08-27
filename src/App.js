
import { Route,Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AddAlbum from "./components/addAlbum";
import AlbumList from "./components/AlbumList";
import { UpdateAlbum } from "./components/updateAlbum";

function App() {

  const [data,setData]=useState([]);
  const [value,setValue]=useState('');

   useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response)=>response.json())
      .then((json)=>setData(json));
     
   },[]);

   const setUpdate=(album)=>{
    setValue(album);
    console.log(value);
   }

   const updateAlbum=async (id,updateUserId,updateTitle,oldAlbum)=>{
    let index=data.indexOf(oldAlbum);
    let updateData=[];
    if(id<=100){
     updateData=await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: updateTitle,
        userId: updateUserId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json);
    }
    else{
    updateData={
      id:id,
      title:updateTitle,
      userId:updateUserId
    }
    }
    data[index]=updateData;
    setData(data=>([...data]));
    }

   const deleteAlbum=(id)=>{
     fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{method:'DELETE',});
     setData(data=>data.filter((album)=>album.id!==id));
   }

   const addAlbumList=async (userId,title)=>{
    let length=data.length;
    let index=data[length-1].id;
    await fetch('https://jsonplaceholder.typicode.com/albums',{method:'PUSH',
    body: JSON.stringify({
      id: index+1,
      title: title,
      userId: userId
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response)=>response.json)
    .then((json)=>json)
    .catch(rejected=>{
      console.log(rejected);
    });
    const album={
    id:index+1,
    title:title,
    userId:userId
    }
    setData(data=>([...data,album]));

    }
   
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<AlbumList data={data} setUpdate={setUpdate} deleteAlbum={deleteAlbum}/>}></Route>
      <Route path="/add-album" element={<AddAlbum addAlbumList={addAlbumList}/>}></Route>
      <Route path='/update-album' element={<UpdateAlbum album={value} updateAlbum={updateAlbum}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
