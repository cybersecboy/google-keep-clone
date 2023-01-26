import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';
const App=()=>{
    const [addItem,setAddItem]=useState([])
    const addNote=(note)=>{
        setAddItem((preVal)=>{
            return [...preVal,note];
        });
    }
    const onDelete=(id)=>{
        setAddItem((preData)=>
            preData.filter((curval,ind)=>{
                return ind!==id;
            })
        );
    }
    return(
        <>
            <Header />
            <CreateNote passNote={addNote} />
            {addItem.map((curval,ind)=>{
                return <Note key={ind} id={ind} title={curval.title} content={curval.content} deleteItem={onDelete} />
            })}
            <Footer />
        </>
    );
}

export default App;