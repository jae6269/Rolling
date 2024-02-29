import React, { useState, useEffect } from 'react';
import Card from './Card';

const RecipientList = () => {
  const [recipients, setRecipients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipients = async () => {
      try {
        const response = await fetch(
          'https://rolling-api.vercel.app/0-3/recipients/?limit=8&sort=like',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipients(data.results);
      } catch (error) {
        console.error(
          'There has been a problem with your fetch operation:',
          error,
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRecipients();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipient-list">
      {recipients.map(recipient => (
        <RecipientCard key={recipient.id} {...recipient} />
      ))}
    </div>
  );
};

export default RecipientList;
