"use strict";

var clientBudget = prompt("Byudjetingizni kiriting!!!", "1000$");

var expenses = {
  ticketPrice: 500 * 10650.34,
  hotelPrice: 250 * 10650.34,
  parkPrice: 120 * 10650.03,
};

var total =
  expenses.ticketPrice + expenses.hotelPrice + expenses.parkPrice + "sum";

console.log(clientBudget, expenses, total);
alert(`sizning budjetingiz ${clientBudget}` + " - " + `xarajatlar ${total}`);
















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
