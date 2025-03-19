import '../styles/style.css'
import '../styles/leaderboard.css'
import React, { use, useEffect } from 'react';
import { db } from '../base/firebaseConfig';
import { collection, getDocs, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

    
    const Table: React.FC = () => {
        const [leaderboardData, setLeaderboardData] = React.useState<any[]>([]);

        useEffect (() => {
            const fetchLeaderboard = async () => {
                try {
                    const querySnapshot = await getDocs(collection(db, "leaderboard"));
                    const fetchedData = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setLeaderboardData(fetchedData);
                    console.log(fetchedData);
                } catch (error) {
                    console.error("Error fetching leaderboard:", error);
                }
            };
            fetchLeaderboard();

        }, []);

        return (
        <div>

                {leaderboardData.map((user) => (
                    <div className='lbentrie' key={user.id}>
                    <p className='username' > {user.name} </p>
                    <p className='userscore' > {user.score} </p>
                    </div>
                ))}
        </div>
        )
    }
    export default Table;