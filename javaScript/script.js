const containar = document.getElementById("container");

const videoCards = [
  {
    id: 1,
    thumbnail: "./assets/Rectangle 1.png",
    title: "Building a Winning UX Strategy Using the Kano Model",
  },
  {
    id: 2,
    thumbnail: "./assets/Rectangle 1 (1).png",
    title: "Python Full Course for free 🐍",
  },
  {
    id: 3,
    thumbnail: "./assets/Rectangle 1 (2).png",
    title: "Harvard CS50’s Introduction to Programming with Python",
  },
  {
    id: 4,
    thumbnail: "./assets/Rectangle 1 (3).png",
    title: "Building a Winning UX Strategy Using the Kano Model",
  },
  {
    id: 5,
    thumbnail: "./assets/Rectangle 1 (4).png",
    title: "Make A Website With Login And Register | HTML CSS",
  },
  {
    id: 6,
    thumbnail: "./assets/Rectangle 1 (5).png",
    title: "Feels of love Vibes | HT Music | Arijit Singh Songs |Best of",
  },
  {
    id: 7,
    thumbnail: "./assets/Rectangle 1 (6).png",
    title: "5 MUST-KNOW LinkedIn Profile Tips for Job Seekers!",
  },
  {
    id: 8,
    thumbnail: "./assets/Rectangle 1 (7).png",
    title: "Building a Winning UX Strategy Using the Kano Model",
  },
  {
    id: 9,
    thumbnail: "./assets/Rectangle 1 (8).png",
    title: "Lofi Quran: Ultimate stress relief - relaxation - Study",
  },
  {
    id: 10,
    thumbnail: "./assets/Rectangle 1 (9).png",
    title: "SQL - Complete Course in 3 Hours | SQL One Shot using",
  },
  {
    id: 11,
    thumbnail: "./assets/Rectangle 1 (10).png",
    title: "Non-Stop Road Trip Jukebox (Extended) | SICKVED | Best",
  },
  {
    id: 12,
    thumbnail: "./assets/Rectangle 2.png",
    title: "Senior Programmers vs Junior Developers",
  },
];

videoCards.forEach((videoCard) => {
  let innertext = `  <div class="card bg-base-100  shadow-sm">
          <figure>
            <img src="${videoCard.thumbnail}" alt="" />
          </figure>
          <div class="card-body">
            <div class="flex items-center gap-4 justify-between">
              <img class="w-5" src="./assets/channel-logo.png" alt="" />
              <h2 class="text-xl font-semibold">
               ${videoCard.title}
              </h2>
            </div>
            <div class="ml-7">
              <div class="flex items-center">
                LWJ -Learn With Josim
                <img class="w-4 mt-1 ml-1" src="assets/blue-badge.png" alt="" />
              </div>
              <div class="">91k views</div>
            </div>
          </div>
        </div>`;
  containar.innerHTML += innertext;
});
