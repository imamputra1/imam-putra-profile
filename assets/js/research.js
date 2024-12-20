/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title:
      "Republik sebagai Negara Ideal: Kajian Filosofis dari Plato hingga Relevansi Kontemporer",
    authors: "Agus Imam Syahputra",
    conferences: "Kongres Pancasial XII",
    researchYr: 2024,
    citebox: "popup6",
    image: "assets/images/research-page/riste.png",
    citation: {
      vancouver: "-",
    },
    abstract:
      "Republik sudah lama dipandang sebagai model negara ideal dalam tradisi filsafat politik. Pemikiran ini bisa ditelusuri dari Plato hingga Jean-Jacques Rousseau. Dalam karyanya The Republic, Plato membayangkan negara yang dipimpin oleh para filsuf-raja yang fokus pada kepentingan bersama. Di sisi lain, Rousseau dalam The Social Contract lebih menekankan kedaulatan rakyat dan kebebasan sipil, dengan tegas menolak segala bentuk tirani, baik itu monarki absolut maupun oligarki. Gagasan tentang republik menawarkan sistem pemerintahan yang mengedepankan partisipasi politik aktif serta perlindungan hak-hak warga sebagai fondasi kesejahteraan bersamaMakalah ini membahas argumen-argumen filosofis utama yang mendukung republik sebagai konsep negara ideal. Beberapa aspek yang disorot meliputi partisipasi politik, keadilan sosial, dan nilai-nilai konstitusional. Meski konsep ini sudah tua, di era modern gagasan republik tetap relevan, terutama dalam menghadapi tantangan globalisasi dan populisme yang terus berkembang. Demokrasi perwakilan dan tata kelola yang etis menjadi elemen kunci dalam menjaga transparansi dan akuntabilitas pemerintahan.Penelitian ini bertujuan untuk menelusuri perkembangan historis konsep republik dan melihat bagaimana konsep ini diterapkan dalam pemerintahan kontemporer. Dengan demikian, diharapkan penelitian ini bisa membantu memperkaya pemahaman kita tentang teori politik dan relevansi republikanisme dalam menjaga stabilitas serta legitimasi negara di abad ke-21.",
    absbox: "absPopup6",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
