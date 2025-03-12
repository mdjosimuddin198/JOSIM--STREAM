let catagory = document.getElementById("catagory");
const containar = document.getElementById("container");

// load catagory
const loadCatagory = async () => {
  let responce = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/categories"
  );
  let catagoryData = await responce.json();
  showCatagory(catagoryData.categories);
};
loadCatagory();

const showCatagory = (categories) => {
  categories.forEach((element) => {
    let navbtn = `
          <li onclick="loadCatagoryVideos(${element.category_id})" class="btn text-xl hover:bg-red-500 hover:text-white transition ">${element.category}</li> `;
    catagory.innerHTML += navbtn;
  });
};

// load videos
const loadVideos = async () => {
  let responce = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/videos"
  );
  let videoData = await responce.json();
  ShowVideos(videoData.videos);
};
// ShowVideos on the display
const ShowVideos = (allvideo) => {
  containar.innerHTML = "";
  allvideo.forEach((video) => {
    let cards = ` <div class="video-card ">
          <figure>
            <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="" />
          </figure>
          <div class="card-body">
            <div class="flex items-center gap-4">
              <div class="avatar">
                <div
                  class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2"
                >
                  <img
                    src="${video.authors[0].profile_picture}"
                  />
                </div>
              </div>
              <h2 class="text-xl font-semibold"> ${video.title}</h2>
            </div>
            <div class="ml-7">
              <div class="flex items-center">
                <h2 class="text-[#17171770]">${video.authors[0].profile_name}</h2>
                <img class="w-4 mt-1 ml-1" src="assets/blue-badge.png" alt="" />
              </div>
              <div class="text-[#17171770]">${video.others.views} views</div>
              <p>${video.others.posted_date}</p>
            </div>
          </div>
        </div>`;
    containar.innerHTML += cards;
  });
  if (allvideo.length == 0) {
    containar.innerHTML += ` <div
          class="flex justify-center items-center col-span-4 flex-col h-[60vh]"
        >
          <img src="./assets/Icon.png" alt="" />
          <h2 class="text-3xl font-bold">
            Oops!! Sorry, There is no content here
          </h2>
        </div>`;
  }
  const click = document.querySelectorAll(".video-card");
  addevent(click);
};
// addEventListener each card
const addevent = (allcards) => {
  allcards.forEach((card) => {
    card.addEventListener("click", () => {
      console.log("Hi");
    });
  });
};

// catagory video display

const loadCatagoryVideos = async (id) => {
  let responce = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
  );
  let catagoryData = await responce.json();
  ShowVideos(catagoryData.category);
};
