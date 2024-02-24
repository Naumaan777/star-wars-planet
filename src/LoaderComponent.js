import React, { useState, useEffect } from 'react';
import './loader.css';

function LoaderComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="LoaderComponent">
      
    </div>
  );
}

export default LoaderComponent;
