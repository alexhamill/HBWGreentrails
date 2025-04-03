import '../styles/style.css'
import '../styles/leaderboard.css'
import React, { use, useEffect } from 'react';
import { db } from '../base/firebaseConfig';
import { collection, getDocs, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Button, Container } from 'react-bootstrap';


    
    const Table: React.FC = () => {
        interface User {
            id: string;
            score: number;
            Name: string;
        }

        const [leaderboardData, setLeaderboardData] = React.useState<User[]>([]);
        const [opportunities, setOpportunities] = React.useState<any[]>([]);

        useEffect (() => {
            const fetchLeaderboard = async () => {
                try {
                    const querySnapshot = await getDocs(collection(db, "Users"));
                    const fetchedData = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        score: doc.data().score,
                        Name: doc.data().Name,
                    })) as User[];
                    setLeaderboardData(fetchedData.sort((a, b) => b.score - a.score));

                    const qs = await getDocs(collection(db, "opportunities")); 
                    const fd = qs.docs.map((doc) => ({
                        id: doc.id, 
                        ...doc.data(), 
                    }));
                    setOpportunities(fd);
                } catch (error) {
                    console.error("Error fetching leaderboard:", error);
                }
            };
            fetchLeaderboard();

        }, []);

        function upl(event: React.MouseEvent<HTMLButtonElement>) {
            let cur = 0;
            leaderboardData.forEach(user => {
                opportunities.forEach(opertunity => {
                    if (opertunity.signups.includes(user.id)) {
                        cur += 1;
                    }
                    updateDoc(doc(db, "Users", user.id), {
                        score: cur,
                    });
                });
                cur=0;

            });
            // setTimeout(() => {
            //     window.location.reload();
            // }, 1000);
            console.log('Done updating leaderboard');
        }

        return (
        <div id='events-table'>
                <h3 id='events-title'>Events Attended</h3>
                <div id='events-leaderboard' className='boardcon'> 
                {leaderboardData.map((user, index) => (
                    <div className='lbentrie' key={user.id}>
                    <p className='place'>{index+1}.</p>
                    <p className='username'>{user.Name}</p>
                    <p className='userscore'>{user.score}</p>
                    <p className='username' >  </p>
                    </div>
                ))}
                <button onClick={(e) => upl(e)} id="">Update leaderboard</button>
                </div>
        </div>
        )
    }
    export default Table;