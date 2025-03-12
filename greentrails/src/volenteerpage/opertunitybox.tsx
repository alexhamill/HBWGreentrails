// import React, { useState, useEffect } from "react"
// import '../styles/style.css'
// import '../styles/volenterpage.css'
// // import volunteerData from '../data/upcoming.ts';
// import { db } from "../base/firebaseConfig";
// import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";

// const today = new Date();

// export interface Opportunity {
//     id: string; // Firestore document ID
//     name: string;
//     description: string;
//     date: string; // Date stored as a string
//     link: string;
//     signups: number;
//   }

// const Volbox: React.FC = () => {
//     const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
    
//     useEffect(() => {
//         const fetchOpportunities = async () => {
//           try {
//             const querySnapshot = await getDocs(collection(db, "opportunities"));
//             const fetchedData: Opportunity[] = querySnapshot.docs.map((doc) => ({
//               id: doc.id, // Firestore document ID
//               ...(doc.data() as Opportunity), // Ensure the Firestore data matches the Opportunity type
//             }));
//             setOpportunities(fetchedData); // Update the state
//           } catch (error) {
//             console.error("Error fetching data: ", error);
//           }
//         };
      
//         fetchOpportunities();
//       }, []);
      


//     const firstOpportunity = sortedData[0];
//     const secOpportunity = sortedData[1];
//     const thirdOpportunity = sortedData[2];
    

//     return(
//         <div>
//     <div className='box'>
//         <h1>{firstOpportunity.name}</h1>
//         <p>{firstOpportunity.description}</p>
//         <p>{firstOpportunity.date}</p>
//         <p>There have been {firstOpportunity.signups} sign ups from green trails members</p>
//         <a href={firstOpportunity.link} target="_blank">Sign up here with the host</a>
//     </div>
//     <div className='box'>
//     <h1>{secOpportunity.name}</h1>
//         <p>{secOpportunity.description}</p>
//         <p>{secOpportunity.date}</p>
//         <a href={secOpportunity.link} target="_blank">Sign up here</a>
//     </div>
//     <div className='box'>
//     <h1>{thirdOpportunity.name}</h1>
//         <p>{thirdOpportunity.description}</p>
//         <p>{thirdOpportunity.date}</p>
//         <a href={thirdOpportunity.link} target="_blank">Sign up here</a>
//     </div>
//     </div>
//     )
// }

// export default Volbox;