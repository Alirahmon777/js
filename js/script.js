"use strict";

var dollar = 10650.34;
var euro = 10650.03;

var expenses = {
  ticketPrice: 500 * dollar,
  hotelPrice: 250 * dollar,
  parkPrice: 120 * euro,
};
var total = expenses.ticketPrice + expenses.hotelPrice + expenses.parkPrice;

document.querySelector(".button").addEventListener("click", () => {
  card.setAttribute("style", "display: flex;");
  content.setAttribute("class", "col-lg-6 mb-5 mb-lg-0 desc text-end");
  content.setAttribute("style", "transition: all 2s linear");

  title.setAttribute(
    "style",
    "margin: 0 0 20px !important; color: hsl(218, 81%, 95%);"
  );
});

var content = document.querySelector(".desc");
var title = document.querySelector(".title");
var card = document.querySelector(".hidden-card");

document.querySelector(".cancel").addEventListener("click", () => {
  document
    .querySelector(".alert")
    .setAttribute("style", "display: none !important;");

  card.setAttribute("style", "display: none");
  content.setAttribute("class", "col-lg-6 mb-5 mb-lg-0 desc text-center");
  title.setAttribute(
    "style",
    "margin: 3rem 0 !important; color: hsl(218, 81%, 95%);"
  );
});

var alertText = document.querySelector(".text");

document
  .querySelector(".alert")
  .setAttribute("style", "display: none !important;");

document.querySelector(".button-al").addEventListener("click", () => {
  document
    .querySelector(".alert")
    .setAttribute("style", "display: flex !important;");

  var clientSurname = document.getElementsByTagName("input")[1].value;
  var clientName = document.getElementsByTagName("input")[0].value;
  var clientBudget = +document.getElementsByTagName("input")[2].value;
  if (clientBudget < total) {
    alertText.textContent = `${clientSurname} ${clientName} Sizni mablag'ingiz ${clientBudget}sum - xarajatlar ${total}sum Yetarli emas!😒`;
    document
      .querySelector(".alert")
      .setAttribute(
        "style",
        "animation: alert 3s 1 alternate ease;"
      );
    document
      .getElementsByTagName("img")[0]
      .setAttribute("src", "./img/circle-warning.png");
    document.getElementsByTagName("img")[0].setAttribute("width", "80");
    alertText.setAttribute("class", "text text-capitalize m-0");
    alertText.setAttribute(
      "style",
      "color: #FF3E3D !important; font-size: 18px; padding-left: 8px;"
    );
  } else if (clientBudget >= total) {
    alertText.textContent = `${clientSurname} ${clientName} Sizning mablag'ingiz ${clientBudget}sum - xarajatlar ${total}sum Yetarli OQ YO'L 👍`;
    document.querySelector(".alert");
    document
      .querySelector(".alert")
      .setAttribute(
        "style",
        "padding: 15px 10px !important; animation: alert 3s 1 alternate ease;"
      );
    document
      .getElementsByTagName("img")[0]
      .setAttribute("src", "./img/circle-complete.png");
    document.getElementsByTagName("img")[0].setAttribute("width", "60");
    alertText.setAttribute(
      "style",
      "color: #19D873 !important; font-size: 18px; padding-left: 8px;"
    );
    alertText.setAttribute("class", "text text-capitalize m-0");
  }

  console.log(
    `${clientSurname + clientName} qolgan mablag'ingiz `,
    clientBudget - total
  );
});

// startModal();

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// function rememberSeries() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Oxirgi ko'rgan serialingiz"),
//       b = prompt("Nechi baxo berasiz");

//     if (a != null && b != null && a != "" && b != "") {
//       seriesDB.series[a] = b;
//       console.log("done");
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
// }

// rememberSeries();

// function detectLevel() {
//   if (seriesDB.count <= 0) {
//     console.log("siz televizor ko'rmas ekansiz");
//   } else if (seriesDB.count <= 5) {
//     console.log("Siz seriallarni yoqtirmas ekansiz");
//   } else if (seriesDB.count > 5 && seriesDB.count <= 10) {
//     console.log("Siz serialni kam ko'rarkansiz");
//   } else if (seriesDB.count > 10) {
//     console.log("Siz seriallarni ishqibozi ekansiz");
//   }
// }

// detectLevel();

// function privateMode(hidden) {
//   if (!hidden) {
//     // console.log(seriesDB);
//   }
// }
// privateMode(console.log(seriesDB));

// function writeGenres() {
//   for (let i = 0; i <= 2; i++) {
// const ozgarmas = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`);
//     seriesDB.genres[i] = ozgarmas;
//   }
// }

// writeGenres();

// let num = 10;

// for (let i = 1; i <= 10; i++) {
//   console.log(num);
//   num++;
// }

// const user = "Nuraliev Alirahmon";

// console.log(user.slice(0, 8));

// const calc = ("8.5");

// console.log(Math.round(calc));

// const alirahmon = {
//   hair: "light-brown",
//   tShirt: "green",
//   body: "Strong",
//   interest: {
//     IT: {
//       fullstackWebDevelop: "HTML",
//       design: "Moution-Design",
//     },
//     sport: "football",
//   },
// };

// const { hair, tShirt, interest } = alirahmon;

// console.log(hair, tShirt, interest);
