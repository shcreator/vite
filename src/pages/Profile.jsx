// src/pages/Profile.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto py-12">
      {userData ? (
        <>
          <h1 className="text-4xl font-bold mb-4">User Profile</h1>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Wallet Balance: ${userData.balance}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
