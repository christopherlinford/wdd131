const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Atlanta Georgia",
        location: ", Mexico",
        dedicated: "1981, March, 7",
        area: 34500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Bangkok Thailand",
        location: "Makkasan Ratchathewi, Bangkok",
        dedicated: "2023, October, 22",
        area: 48,525
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg
    },
      {
        templeName: "Manila Philippines",
        location: "Quezon city, Philippines",
        dedicated: "1984, September, 25",
        area: 26,683
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-42957-thumb.jpg
    },
    // Add more temple objects here...
  ];

  // Header hambuger button secction
document.addEventListener('DOMContentLoaded', () => {
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');
  const nameHeader = document.querySelector('.nameHeader');

  hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      hamButton.classList.toggle('open');
      nameHeader.classList.toggle('hidden');
  });
});

const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
      width: "400px",
      height: "250px"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
      width: "400px",
      height: "250px"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
      width: "400px",
      height: "225px"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
      width: "400px",
      height: "250px"
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
      width: "400px",
      height: "250px"
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
      width: "400px",
      height: "250px"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
      width: "400px",
      height: "250px"
  },
  // Add more temple objects here...
  {
      templeName: "Panamá City Panamá",
      location: "Ancon, Panamá, Panama",
      dedicated: "2008, August, 10",
      area: 18943,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/panama-city-panama/400x250/panama-city-temple-lds-569186-wallpaper.jpg",
      width: "400px",
      height: "250px"
  },
  {
      templeName: "Fukuoka Japan",
      location: "Fukuoka-shi, Fukuoka, Japan",
      dedicated: "2000, June, 11",
      area: 10700,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg",
      width: "400px",
      height: "250px"
  },
  {
      templeName: "Helsinki Finland",
      location: "Espoo, Uusimaa, Finland",
      dedicated: "2006, February, 27",
      area: 16350,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/helsinki-finland/400x225/helsinki-finland-temple-lds-354498-wallpaper.jpg",
      width: "400px",
      height: "225px"
  },

];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container.home');
  const navLinks = document.querySelectorAll('.navigation a');
  const titleName = document.querySelector('.title');

  const displayTemples = (filteredTemples) => {
      container.innerHTML = '';
      filteredTemples.forEach(temple => {
          const card = document.createElement('div');
          card.className = 'temple-card';
          card.innerHTML = `
              <img src="${temple.imageUrl}"  loading="lazy"  width="${temple.width}" height="${temple.height}" alt="${temple.templeName} Temple">
              <div class="temple-info">
                  <h2>${temple.templeName}</h2>
                  <p><strong>Location:</strong> ${temple.location}</p>
                  <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                  <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
              </div>
          `;
          container.appendChild(card);
      });
  };

  const filterTemples = (criteria) => {
      let filteredTemples = temples;
      switch (criteria) {
          case 'old':
              filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
              titleName.innerHTML = 'Old Temples';
              break;
          case 'new':
              filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
              titleName.innerHTML = 'New Temples';
              break;
          case 'large':
              filteredTemples = temples.filter(temple => temple.area > 90000);
              titleName.innerHTML = 'Large Temples';
              break;
          case 'small':
              filteredTemples = temples.filter(temple => temple.area < 10000);
              titleName.innerHTML = 'Small Temples';
              break;
          default:
              filteredTemples = temples;
              titleName.innerHTML = 'All Temples';
              break;
      }
      displayTemples(filteredTemples);
  };

  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          navLinks.forEach(nav => nav.classList.remove('active'));
          e.target.classList.add('active');
          filterTemples(e.target.id);
      });
  });

  filterTemples('home-nav');
});


// Footer information
document.addEventListener('DOMContentLoaded', () => {
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;
  const copyrightYearElement = document.getElementById('currentyear');
  const lastModifiedElement = document.getElementById('lastModified');
  copyrightYearElement.textContent = currentYear;
  lastModifiedElement.textContent = `Last update: ${lastModified}`;
});

const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
  { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
  { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
  { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
  { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
  { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" }
];

function displayTemples(filteredTemples) {
  const container = document.getElementById('temple-container');
  container.innerHTML = '';
  filteredTemples.forEach(temple => {
      const card = document.createElement('div');
      card.classList.add('temple-card');
      card.innerHTML = `
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Size:</strong> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
      container.appendChild(card);
  });
}

displayTemples(temples);

function filterTemples(filter) {
  let filteredTemples = temples;
  if (filter === 'old') {
      filteredTemples = temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900);
  } else if (filter === 'new') {
      filteredTemples = temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000);
  } else if (filter === 'large') {
      filteredTemples = temples.filter(t => t.area > 90000);
  } else if (filter === 'small') {
      filteredTemples = temples.filter(t => t.area < 10000);
  }
  displayTemples(filteredTemples);
}

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const templeContainer = document.getElementById("templeContainer");
  
    const displayTemples = (templesArray) => {
      templeContainer.innerHTML = "";
  
      templesArray.forEach((temple) => {
        const card = document.createElement("div");
        card.className = "temple-card";
  
        const name = document.createElement("h1");
        name.textContent = temple.templeName;
        card.appendChild(name);
  
        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);
  
        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);
  
        const area = document.createElement("p");
        area.textContent = `Total Area: ${temple.area} sq ft`;
        card.appendChild(area);
  
        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        card.appendChild(image);
  
        templeContainer.appendChild(card);
      });
    };
  
    const filterByOldTemples = () => {
      const filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() < 1900
      );
      displayTemples(filteredTemples);
    };
  
    const filterByNewTemples = () => {
      const filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() > 2000
      );
      displayTemples(filteredTemples);
    };
  
    const filterByLargeTemples = () => {
      const filteredTemples = temples.filter((temple) => temple.area > 90000);
      displayTemples(filteredTemples);
    };
  
    const filterBySmallTemples = () => {
      const filteredTemples = temples.filter((temple) => temple.area < 10000);
      displayTemples(filteredTemples);
    };
  
    document.querySelector("nav").addEventListener("click", (event) => {
      event.preventDefault();
  
      const filter = event.target.textContent.toLowerCase().trim();
  
      switch (filter) {
        case "old":
          filterByOldTemples();
          break;
        case "new":
          filterByNewTemples();
          break;
        case "large":
          filterByLargeTemples();
          break;
        case "small":
          filterBySmallTemples();
          break;
        case "home":
          displayTemples(temples);
          break;
        default:
          break;
      }
    });
    displayTemples(temples);
  });