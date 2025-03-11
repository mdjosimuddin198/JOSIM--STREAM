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
  //   console.log(categories);
  categories.forEach((element) => {
    let navbtn = `
          <li class="btn text-xl hover:bg-red-500 hover:text-white transition ">${element.category}</li> `;
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
loadVideos();

const ShowVideos = (allvideo) => {
  console.log(allvideo);
  allvideo.forEach((video) => {
    let cards = ` <div class="card bg-base-100  shadow-sm">
          <figure>
            <img src="${video.thumbnail}" alt="" />
          </figure>
          <div class="card-body">
            <div class="flex items-center gap-4 justify-between">
              <img class="w-5 rounded-full" src="${video.authors[0].profile_picture}" alt="" />
              <h2 class="text-xl">
                ${video.title}
              </h2>
            </div>
            <div class="ml-7">
              <div class="flex items-center">
                ${video.authors[0].profile_name}
                <img class="w-4 mt-1 ml-1" src="" alt="" />
              </div>
              <div class="">${video.others.views}</div>
            </div>
          </div>
        </div> `;
    containar.innerHTML += cards;
  });
  const click = document.querySelectorAll(".card");
  addevent(click);
};

const addevent = (allcards) => {
  allcards.forEach((card) => {
    card.addEventListener("click", () => {
      console.log("Hi");
    });
  });
};
