// Planet data
const planets = [
  {
    name: 'Mercury',
    size: 6,
    distance: 50,
    color: '#a5a5a5',
    orbitalPeriod: 88
  },
  {
    name: 'Venus',
    size: 14,
    distance: 80,
    color: '#c88e3d',
    orbitalPeriod: 225
  },
  {
    name: 'Earth',
    size: 16,
    distance: 110,
    color: '#2a75f3',
    orbitalPeriod: 365
  },
  {
    name: 'Mars',
    size: 12,
    distance: 140,
    color: '#d14b4b',
    orbitalPeriod: 687
  },
  {
    name: 'Jupiter',
    size: 36,
    distance: 190,
    color: '#e2a354',
    orbitalPeriod: 4333
  },
  {
    name: 'Saturn',
    size: 30,
    distance: 240,
    color: '#d9c766',
    orbitalPeriod: 10759
  },
  {
    name: 'Uranus',
    size: 24,
    distance: 290,
    color: '#7de0f6',
    orbitalPeriod: 30687
  },
  {
    name: 'Neptune',
    size: 22,
    distance: 330,
    color: '#406bce',
    orbitalPeriod: 60190
  }
];

// Get the solar system container
const solarSystem = document.getElementById('solar-system');

// Function to create planets and their orbits
function createPlanets() {
  planets.forEach(planet => {
    // Create orbit
    const orbit = document.createElement('div');
    orbit.className = 'orbit';
    orbit.style.width = `${planet.distance * 2}px`;
    orbit.style.height = `${planet.distance * 2}px`;
    orbit.style.marginLeft = `-${planet.distance}px`;
    orbit.style.marginTop = `-${planet.distance}px`;

    // Create planet
    const planetDiv = document.createElement('div');
    planetDiv.className = 'planet';
    planetDiv.style.width = `${planet.size}px`;
    planetDiv.style.height = `${planet.size}px`;
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.style.marginLeft = `${planet.distance}px`;
    planetDiv.style.marginTop = `-${planet.size / 2}px`;
    planetDiv.setAttribute('data-name', planet.name);

    // Set animation
    const animationDuration = planet.orbitalPeriod / 50; // Scaling down the duration
    planetDiv.style.animation = `orbit ${animationDuration}s linear infinite`;

    // Append planet to orbit, orbit to solar system
    orbit.appendChild(planetDiv);
    solarSystem.appendChild(orbit);
  });
}

// Create keyframes for orbit animation
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
@keyframes orbit {
  from {
    transform: rotate(0deg) translateX(0);
  }
  to {
    transform: rotate(360deg) translateX(0);
  }
}
`;
document.head.appendChild(styleSheet);

// Initialize the simulation
createPlanets();
