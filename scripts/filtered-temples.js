const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Fukuoka Japan",
      location: "Fukuoka-shi, Fukuoka, Japan",
      dedicated: "2000, June, 11",
      area: 10700,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
    },
    {
      templeName: "Helsinki Finland",
      location: "Espoo, Uusimaa, Finland",
      dedicated: "2006, February, 27",
      area: 16350,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/helsinki-finland/400x225/helsinki-finland-temple-lds-354498-wallpaper.jpg"
    },
    {
      templeName: "Panamá City Panamá",
      location: "Ancon, Panamá, Panama",
      dedicated: "2008, August, 10",
      area: 18943,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/panama-city-panama/400x250/panama-city-temple-lds-569186-wallpaper.jpg"
    },
    {
      templeName: "São Paulo Brazil Temple",
      location: "São Paulo, Brazil",
      dedicated: "1978, October, 30",
      area: 59246,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/1280x800/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
    },
    {
      templeName: "Lisbon Portugal Temple",
      location: "Lisbon, Portugal",
      dedicated: "2019, September, 15",
      area: 23730,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/800x500/03-045a97e8471a9f581e927698521a1d184f4b3753.jpeg"
    },
    {
      templeName: "Praia Cape Verde Temple",
      location: "Praia, Santiago, Cape Verde",
      dedicated: "2022, June, 19",
      area: 8759,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/praia-cape-verde/800x500/praia_cape_verde_temple-main.jpeg"
    }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("temples-container");
    const nav = document.querySelector("nav");
    const title = document.querySelector(".title");
  
    const displayTemples = (templesList) => {
      container.innerHTML = "";
      templesList.forEach((temple) => {
        const card = document.createElement("div");
        card.className = "temple-card";
        card.innerHTML = `
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
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
  
    const filterTemples = (type) => {
      let filtered = temples;
      let titleText = "All Temples";
  
      switch (type) {
        case "old":
          filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
          titleText = "Old Temples";
          break;
        case "new":
          filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
          titleText = "New Temples";
          break;
        case "large":
          filtered = temples.filter(t => t.area > 90000);
          titleText = "Large Temples";
          break;
        case "small":
          filtered = temples.filter(t => t.area < 10000);
          titleText = "Small Temples";
          break;
        case "all":
        default:
          filtered = temples;
          titleText = "All Temples";
          break;
      }
  
      if (title) title.textContent = titleText;
      displayTemples(filtered);
    };
  
    if (nav) {
      nav.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          e.preventDefault();
          const id = e.target.id.toLowerCase();
          filterTemples(id);
        }
      });
    }
  
    displayTemples(temples); 
  
    const yearSpan = document.getElementById('year');
    const modifiedSpan = document.getElementById('lastModified');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
  });
  