import '../styles/style.css'
import '../styles/leaderboard.css'
import React, { use, useEffect } from 'react';
import { db } from '../base/firebaseConfig';
import { collection, getDocs, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Button, Container } from 'react-bootstrap';
import { addDoc, setDoc } from "firebase/firestore";


    const Signupgui: React.FC = () => {
        const [leaderboardData, setLeaderboardData] = React.useState<any[]>([]);
        const [opportunities, setOpportunities] = React.useState<any[]>([]);    
    
        useEffect(() => {
            
        }, []);

        function adduser(event: React.MouseEvent<HTMLButtonElement>) {
            
            const Name = (document.getElementById('name') as HTMLInputElement).value;
            console.log(Name);
                    const checkIdExists = async (id: string) => {
                        const querySnapshot = await getDocs(collection(db, "Users"));
                        let idExists = false;
                        querySnapshot.forEach((doc) => {
                            if (doc.id === id) {
                                idExists = true;
                            }
                        });
                        return idExists;
                    };

                    checkIdExists(Name).then((exists) => {
                        if (exists) {
                            alert("name already in use. Please choose a different name.");
                            return;
                        } else {
                            if (Name.trim() !== "") {
                                const newDocRef = doc(collection(db, "Users"), Name);
                                setDoc(newDocRef, { Name , score: 0 });
                            } else {
                                alert("Name cannot be empty. Please enter a valid name.");
                            }
                        }
                    });
            
        }

        return (
            <div>
                <div className="signup">
                        <input id="name" type="text" placeholder='please enter your name' />
                        <button  type="submit" onClick={e => adduser(e)}>Submit</button>
                </div>
            </div> 
        );
    };
export default Signupgui;