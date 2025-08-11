document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800, // Animation speed in ms
    once: true, // Animate only once
  });

  document.getElementById("curYear").textContent = new Date().getFullYear();

  const scrollDown = document.querySelector(".scroll-down");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      scrollDown.style.display = "none";
    } else {
      scrollDown.style.display = "";
    }
  });

  const counters = document.querySelectorAll(".counter");
  const speed = 200; // Lower = faster

  const animateCounters = () => {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Trigger when in view
  const section = document.querySelector(".india-numbers");
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(section);
});

const svgPaths = document.querySelectorAll("svg path");
const infoCard = document.getElementById("info-card");
const cardTitle = document.getElementById("card-title");
const cardDescription = document.getElementById("card-description");

const stateData = {
  INAN: {
    name: "Andaman and Nicobar",
    description:
      "Exploring the potential for digital connectivity and infrastructure in a remote island ecosystem, focusing on submarine fiber optic cables for high-speed internet access.",
  },
  INTG: {
    name: "Telangana",
    description:
      'A leading tech hub in India, home to "Cyberabad," with a focus on IT, pharmaceutical research, and a thriving startup ecosystem for a diverse range of technical solutions.',
  },
  INAP: {
    name: "Andhra Pradesh",
    description:
      "Developing as an emerging tech and education hub with a focus on fintech and software development, and the establishment of new universities and research centers.",
  },
  INAR: {
    name: "Arunachal Pradesh",
    description:
      "Utilizing digital mapping and satellite imagery for resource management, and deploying a digital infrastructure to connect remote communities to the national digital grid.",
  },
  INAS: {
    name: "Assam",
    description:
      "Leveraging GIS technology for disaster management and agriculture, and developing digital platforms to promote local crafts and eco-tourism.",
  },
  INBR: {
    name: "Bihar",
    description:
      "Focused on digital literacy initiatives and establishing technology centers to train a new generation of coders and digital service providers.",
  },
  INCH: {
    name: "Chandigarh",
    description:
      "A well-planned city serving as a model for smart city projects, integrating IoT and data analytics for efficient urban governance and public services.",
  },
  INCT: {
    name: "Chhattisgarh",
    description:
      "Implementing e-governance solutions and digital platforms to improve public service delivery and promote technical education in rural and tribal areas.",
  },
  INDH: {
    name: "Dādra and Nagar Haveli and Damān and Diu",
    description:
      "Developing smart infrastructure for industrial zones and leveraging technology to improve port management and coastal trade efficiency.",
  },
  INDL: {
    name: "Delhi",
    description:
      "A major center for software development, startups, and innovation. It is a critical node in India's digital economy and national cyber infrastructure.",
  },
  INGA: {
    name: "Goa",
    description:
      "Known for its growing tech startup scene, particularly in tourism and hospitality tech, as well as a focus on digital art and design.",
  },
  INGJ: {
    name: "Gujarat",
    description:
      "A manufacturing powerhouse adopting industry 4.0 standards. It is a leader in technology-driven industrial processes and renewable energy solutions.",
  },
  INHR: {
    name: "Haryana",
    description:
      "A hub for global tech companies and research centers, contributing significantly to India's IT services and automotive technology sectors.",
  },
  INHP: {
    name: "Himachal Pradesh",
    description:
      "Utilizing cloud computing for government services and developing applications for sustainable tourism and agriculture in a mountainous region.",
  },
  INJH: {
    name: "Jharkhand",
    description:
      "Focusing on digital transformation in the mining and steel industries. It is also expanding digital literacy to empower its rural population.",
  },
  INKA: {
    name: "Karnataka",
    description:
      'The undisputed "Silicon Valley of India," home to thousands of tech companies, startups, and research institutions that are at the forefront of AI and software engineering.',
  },
  INKL: {
    name: "Kerala",
    description:
      "A leader in digital education and e-literacy. It has a robust IT park network and a strong focus on semiconductor and hardware manufacturing.",
  },
  INMP: {
    name: "Madhya Pradesh",
    description:
      "Implementing digital solutions for agricultural supply chains and using remote sensing technology for forest and wildlife management.",
  },
  INMH: {
    name: "Maharashtra",
    description:
      "India's financial capital and a major tech hub. Mumbai and Pune are home to a diverse array of fintech, edtech, and entertainment tech companies.",
  },
  INMN: {
    name: "Manipur",
    description:
      "Utilizing mobile technology for public services and developing digital platforms to promote its unique cultural heritage and local arts.",
  },
  INML: {
    name: "Meghalaya",
    description:
      "Implementing digital health and education services in remote areas and exploring tech-based solutions for environmental monitoring and conservation.",
  },
  INMZ: {
    name: "Mizoram",
    description:
      "Using GIS for land management and planning. It is also building a digital infrastructure to connect its remote communities to the national network.",
  },
  INNL: {
    name: "Nagaland",
    description:
      "Developing digital platforms to preserve and promote its unique cultural traditions and a digital framework for government services.",
  },
  INOR: {
    name: "Orissa",
    description:
      "A growing hub for IT and a leader in technology-driven disaster management systems, leveraging data analytics for flood and cyclone prediction.",
  },
  INPY: {
    name: "Puducherry",
    description:
      "A hub for emerging tech startups and a center for technical education, particularly in software development and digital services.",
  },
  INPB: {
    name: "Punjab",
    description:
      "A leader in agri-tech and smart farming solutions. The state is using IoT sensors and data analytics to optimize crop yields and water usage.",
  },
  INRJ: {
    name: "Rajasthan",
    description:
      "Using technology for e-governance and heritage preservation. It is also developing smart city initiatives in major urban centers.",
  },
  INSK: {
    name: "Sikkim",
    description:
      "Focusing on sustainable and eco-friendly technology, such as using GIS for forest cover mapping and promoting digital payments in its tourism sector.",
  },
  INTN: {
    name: "Tamil Nadu",
    description:
      "A major manufacturing and IT powerhouse, known for its software development and automotive research. Chennai is a key hub for tech education and innovation.",
  },
  INTR: {
    name: "Tripura",
    description:
      "Implementing e-governance and digital literacy programs to empower its citizens and connect rural areas to the wider digital infrastructure.",
  },
  INUP: {
    name: "Uttar Pradesh",
    description:
      "A major contributor to India's IT workforce and a growing hub for startups. It is a key player in the nation's digital education and e-governance initiatives.",
  },
  INUT: {
    name: "Uttaranchal",
    description:
      "Using satellite technology for environmental conservation and developing digital platforms for pilgrims and tourists visiting its famous shrines and mountains.",
  },
  INWB: {
    name: "West Bengal",
    description:
      "A hub for software development and IT services, with a rich intellectual and technical heritage. It is home to many prominent tech universities and research institutions.",
  },
  INLD: {
    name: "Lakshadweep",
    description:
      "Focused on developing a digital-first ecosystem for tourism and marine biology, with an emphasis on satellite-based communication and data collection.",
  },
  INJK: {
    name: "Jammu and Kashmir",
    description:
      "Implementing digital education and e-health services for remote areas, and using geo-tagging and satellite imagery for sustainable resource management.",
  },
  INLA: {
    name: "Ladakh",
    description:
      "Utilizing satellite communication to bridge digital divides in a high-altitude, remote region, and employing drones for mapping and infrastructure projects.",
  },
};

svgPaths.forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    const stateId = item.id;
    const data = stateData[stateId];

    if (data) {
      cardTitle.textContent = data.name;
      cardDescription.textContent = data.description;

      const x = event.clientX + window.scrollX;
      const y = event.clientY + window.scrollY;
      infoCard.style.left = `${x + 15}px`;
      infoCard.style.top = `${y - infoCard.offsetHeight - 15}px`;
      infoCard.style.display = "block";
    }
  });

  item.addEventListener("mouseout", () => {
    infoCard.style.display = "none";
  });

  const paths = document.querySelectorAll("svg path");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const path = entry.target;
          path.style.animation = "draw 15s ease forwards";
          observer.unobserve(path); 
        }
      });
    }, {
      threshold: 0.4 
    });

    paths.forEach(path => {
      observer.observe(path);
    });
});
