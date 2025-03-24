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
        const [leaderboardData, setLeaderboardData] = React.useState<any[]>([]);
        const [opportunities, setOpportunities] = React.useState<any[]>([]);

        useEffect (() => {
            const fetchLeaderboard = async () => {
                try {
                    const querySnapshot = await getDocs(collection(db, "Users"));
                    const fetchedData = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setLeaderboardData(fetchedData);
                    console.log(fetchedData);

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
                console.log(opportunities);
                opportunities.forEach(opertunity => {
                    console.log(opertunity);
                    if (opertunity.signups.includes(user.id)) {
                        cur += 1;
                        console.log(cur);
                    }
                    updateDoc(doc(db, "Users", user.id), {
                        score: cur,
                    });
                });
                cur=0;

            });
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }

        return (
        <div className='boardcon'>   

                {leaderboardData.map((user) => (
                    <div className='lbentrie' key={user.id}>
                    <p className='username' > {user.Name} {user.score}</p>
                    </div>
                ))}
                <button onClick={(e) => upl(e)} id="">Update leaderboard</button>
        </div>
        )
    }
    export default Table;