import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsDescription from './StarWarsDescription';
import './App.css';
import './loader.css';


const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);
  const [showResidents, setShowResidents] = useState(false);

  const fetchResidents = async () => {
    const responses = await Promise.all(planet.residents.map((url) => axios.get(url)));
    setResidents(responses.map((response) => response.data));
  };

  const handleShowResidentsClick = () => {
    if (!showResidents) {
      fetchResidents();
    }
    setShowResidents(!showResidents);
  };

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>{planet.climate}</p>
      <p>{planet.population}</p>
      <p>{planet.terrain}</p>
      <button className='show_resident' onClick={handleShowResidentsClick}>
        {showResidents ? 'Hide' : 'Show'} Residents
      </button>
      {showResidents && (
        <div className="resident">
          <h3>{residents.name}</h3>
          <ul>
            {residents.map((resident) => (
              <li key={resident.name}> Name : {resident.name}  [  Height: {resident.height}, Mass: {resident.mass}, Gender: {resident.gender} ]</li>
              
            ))}
          </ul>
        </div>
      )}
      
    </div>
  );
};

const PlanetsDirectory = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState('https://swapi.dev/api/planets/?format=json');
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchPlanets = async (url) => {
      if (nextPageUrl) {
        const response = await axios.get(nextPageUrl);
        setPlanets(prevPlanets => [...prevPlanets, ...response.data.results]);
        setNextPageUrl(response.data.next);
      } else {
        console.log('No more pages to fetch.');
      }
    };
    fetchPlanets();
  }, [nextPageUrl]);

  const fetchPlanets = async (url) => {
    const response = await axios.get(url);
    setPlanets(prevPlanets => [...prevPlanets, ...response.data.results]);
    setNextPageUrl(response.data.next);
  };
  

  const handleNextPage = () => {
    if (nextPageUrl) {
      setCurrentPage(currentPage + 1);
      fetchPlanets(nextPageUrl);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedPlanets = planets.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="planets-directory">
      <StarWarsDescription />
      {selectedPlanets.map((planet) => (
        <PlanetCard key={planet.name} planet={planet} />
      ))}
      <button className='prev_show' onClick={handlePrevPage}>Prev</button>
      <button className='next_show' onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default PlanetsDirectory;
