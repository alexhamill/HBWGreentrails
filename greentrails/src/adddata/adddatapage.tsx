import '../styles/style.css'
import React from 'react';
import Top from '../componets/header';
import Treefooter from '../componets/footer';
import Navbar from'../componets/sadnavbar';
import Content from '../componets/content';
import { db } from "../base/firebaseConfig";
import { collection, getDocs, addDoc, updateDoc, doc, setDoc } from "firebase/firestore";

    const Adddatapage: React.FC = () => {


        return (
            <div className="App-header">
                <Navbar />
                <Top message="Add data page" />
                <input className='addmoredata' id='id' type="text" placeholder="id" />
                <input className='addmoredata' id='name' type="text" placeholder="Name" />
                <input className='addmoredata' id='date' type="text" placeholder="date" />
                <input className='addmoredata' id='description' type="text" placeholder="description" />
                <input className='addmoredata' id='link' type="text" placeholder="link" />
                <button className='addmoredata' onClick={() => {
                    const name = (document.getElementById('name') as HTMLInputElement).value;
                    const date = (document.getElementById('date') as HTMLInputElement).value;
                    const description = (document.getElementById('description') as HTMLInputElement).value;
                    const link = (document.getElementById('link') as HTMLInputElement).value;
                    const ids = (document.getElementById('id') as HTMLInputElement).value;
                    const checkIdExists = async (id: string) => {
                        const querySnapshot = await getDocs(collection(db, "opportunities"));
                        let idExists = false;
                        querySnapshot.forEach((doc) => {
                            if (doc.id === id) {
                                idExists = true;
                            }
                        });
                        return idExists;
                    };

                    checkIdExists(ids).then((exists) => {
                        if (exists) {
                            alert("ID already in use. Please choose a different ID.");
                            return;
                        } else {
                            const newDocRef = doc(db, "opportunities", ids);
                            setDoc(newDocRef, { name, date, description, link, signups: [] })
                        }
                    });
                    
                }}>Add opportunity</button>
            </div>
        )
    }
    
    export default Adddatapage;