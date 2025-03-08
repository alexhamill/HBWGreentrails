import React, { useState, useEffect } from "react"; 
import "../styles/style.css"; 
import "../styles/volenterpage.css"; 
import { db } from "../base/firebaseConfig"; 
import { collection, getDocs } from "firebase/firestore"; 

export interface Opportunity {
    id: string;
    name: string;
    description: string;
    date: string;
    link: string;
    signups: number;
}

const Volbox: React.FC = () => {

    const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchOpportunities = async () => {
          setLoading(true); 
          try {
            const querySnapshot = await getDocs(collection(db, "opportunities")); 
            const fetchedData = querySnapshot.docs.map((doc) => ({
              id: doc.id, 
              ...doc.data(), 
            }));
            setOpportunities(fetchedData); 
          } catch (error) {
            console.error("Error fetching opportunities:", error); 
          }
          setLoading(false); 
        };
        fetchOpportunities();
    }, []);

        if (loading) {
            return <p>Loading opportunities...</p>;
          }
          
          if (opportunities.length === 0) {
            return <p>No upcoming volunteer opportunities available.</p>;
          }
      
      

  return (
  <div>
    {opportunities.map((opportunity) => (
      <div className="box" key={opportunity.id}>
        <h1>{opportunity.name}</h1>
        <p>{opportunity.description}</p>
        <p>{opportunity.date}</p>
        <p>There have been {opportunity.signups} sign-ups from Green Trails members</p>
        <a
          href={opportunity.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign up here with the host
        </a>
      </div>
    ))}
  </div>
    );
};  

export default Volbox;
