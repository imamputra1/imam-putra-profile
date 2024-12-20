AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Founder & Chief executive officer Angkut Ternak Indonesia",
    cardImage: "assets/images/experience-page/logo_ang_ter.png",
    place: "Special Region of Yogyakarta",
    time: "(Feb, 2024 - Present)",
    desp: "<li>Increase average farmer income by 15% through distribution efficiency.</li> <li>Initiated an empowerment program for +20 young breeders in rural areas in D.I. Yogykarta and Central Java.</li> <li>Develop an IoT system “LivestockSense” for monitoring vital signs of livestock during transportation.</li>",
  },
  {
    title: "Owner of the Cipta Website",
    cardImage: "assets/images/experience-page/logo_cw.png",
    place: "Special Region of Yogyakarta",
    time: "(Jun, 2024 - Present)",
    desp: "<li>Led the development of 50+ enterprise projects using Node.js, Python, and Go.</li><li>Develop API gateway with rate limiting and circuit breaker patterns and Build cloud-native infrastructure on AWS and GCP with 20% cost savings.</li><li>Achieve compliance with PCI DSS standards for payment applications and Conduct regular penetration testing and security audits.</li>",
  },
  {
    title: "Leader UI/UX Research Internship",
    cardImage: "assets/images/experience-page/bantu_ternak.jpeg",
    place: "Special Region of Yogyakarta",
    time: "(Aug, 2023 - Jan, 2024)",
    desp: "<li>Lead a team of 12 UI/UX Research interns in conducting in-depth research on 2 main types of users: investors and farmers.</li><li>Initiated “Voice of Farmers” program that resulted in 99+ in-depth interviews with farmers and Identified 15 key pain points in the user journey and came up with a solution that increased conversion rate by 25%.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Startup Recommendation for PrimeStap from ADB Bank 2025",
    cardImage: "assets/images/experience-page/ia_pitching.jpg",
    description:
      "Recognized by ADB Bank for innovative solutions in sustainable business and community empowerment.",
  },
  {
    title: '"30 innovators under 30" 2024',
    cardImage: "assets/images/experience-page/30i_u30.jpg",
    description:
      "I was nominated in the Young Innovator category for my contribution in the field of sustainable technology and digital applications, which focuses on social impact to drive economic growth, in line with the vision of creating positive change in society.",
  },
  {
    title: "Appreciation from the Minister of SMEs and Cooperatives",
    cardImage: "assets/images/experience-page/menkop.jpg",
    description:
      "Awarded by the Minister of SMEs and Cooperatives for My contributions.",
  },
  {
    title: "UGM representative in KMI Expo 2024 in kendari",
    cardImage: "assets/images/experience-page/kmi.jpg",
    description:
      "Represented UGM at the KMI Expo 2024, showcasing innovative business ideas on a national stage.",
  },
  {
    title: "1st place in UGM character festival",
    cardImage: "assets/images/experience-page/f_k.jpg",
    description:
      "Won 1st place in UGM’s Character Festival, highlighting leadership and creativity.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Wirausaha Merdeka Kampus",
    subtitle: "Participants",
    image: "assets/images/experience-page/wmk.jpeg",
    desp: "A national program initiated by the Ministry of Education, Culture, Research and Technology to develop the entrepreneurial spirit of Indonesian students through experiential learning and intensive mentoring.",
    href: "https://wirausahamerdeka.kampusmerdeka.kemdikbud.go.id/info/",
  },
  {
    title: "Global Innovation & Future Technology Summit (GIFTS) 2024",
    subtitle: "Nomination",
    image: "assets/images/experience-page/gifts.webp",
    desp: "The event international that aims to foster innovation and future technologies. The program connects innovators, researchers, and practitioners from various fields to share ideas, expand networks, and collaborate in creating sustainable solutions that are globally relevant.",
    href: "https://ugm.ac.id/id/agenda/global-innovation-future-technology-summit-gifts-2024-women-in-science-technology-engineering-arts-and-management-women-in-stream/",
  },
  {
    title: "Innovation Challenge",
    subtitle: "Participants",
    image: "assets/images/experience-page/ia.jpeg",
    desp: "The Innovative Challenge program is one of Innovative Academy's initiatives that aims to encourage students and young professionals to create creative and innovative solutions to real problems in society.",
    href: "https://ia.ugm.ac.id/innovation-challenge-2024-masterclass-stakeholder-mapping-customer-archetype/",
  },
  {
    title: "INNOVATIVE ACADEMY",
    subtitle: "Ecosystem",
    image: "assets/images/experience-page/iaugm.jpeg",
    desp: "Innovative Academy is a startup incubator program initiated to support the development of a technology-based startup ecosystem in Indonesia.",
    href: "https://ia.ugm.ac.id/",
  },
  {
    title: "Program Pembinaan Mahasiswa Wirausaha",
    subtitle: "Grant Recipient",
    image: "assets/images/experience-page/pmw.png",
    desp: "The Student Entrepreneurship Development Program (P2MW) is a government program that provides grant support to students to develop entrepreneurship-based business ideas.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Entrepreneur-Hub",
    subtitle: "Nomination",
    image: "assets/images/experience-page/ehub-cover.png",
    desp: "Entrepreneur Hub is a program organized by the Coordinating Ministry for Economic Affairs to support the development of entrepreneurship in Indonesia. The program is designed to provide training, mentoring, and access to business networks for young entrepreneurs.</li>",
    href: "https://ehub.kemenkopukm.go.id/",
  },
  {
    title: "Kongres Pancasila XII",
    subtitle: "Speaker",
    image: "assets/images/experience-page/GarudaPancasila.png",
    desp: "The 12th Pancasila Congress is an annual academic forum organized to strengthen the understanding, appreciation, and practice of Pancasila values in various aspects of community life. The program involves academics, practitioners, and students from all over Indonesia to discuss, exchange ideas, and find solutions to national challenges based on the values of Pancasila.",
    href: "https://www.kongrespancasila.com/2024/index.html",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
