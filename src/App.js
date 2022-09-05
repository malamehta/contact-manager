import React from 'react';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ContactList from "./components/Contacts/ContactList/ContactList"
import AddContact from './components/Contacts/AddContact/AddContact';
import ViewContact from './components/Contacts/ViewContact/ViewContact';
import EditContact from './components/Contacts/EditContact/EditContact';


let App=()=> {
  return (
   <>
     <NavBar/>
     <Routes>
      <Route path={'/'} element={<Navigate to={'/Contacts/list'}/>}/> 
      <Route path={'/Contacts/list'} element={<ContactList/>}/> 
      <Route path={'/Contacts/add'} element={<AddContact/>}/> 
      <Route path={'/Contacts/view/:id'} element={<ViewContact/>}/> 
      <Route path={'/Contacts/edit/:id'} element={<EditContact/>}/>  
     </Routes>
   </>
    
  );
}

export default App;
