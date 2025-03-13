let catagory = document.getElementById("catagory");
const containar = document.getElementById("container");
// page loading
const showLoader = () => {
  const loaderBtn = (document.getElementById("loader-btn").style.display =
    "block");
  containar.style.display = "none";
};
const removeLoader = () => {
  const loaderBtn = (document.getElementById("loader-btn").style.display =
    "none");
  containar.style.display = "grid";
};

// load catagory
const loadCatagory = async () => {
  let responce = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/categories"
  );
  let catagoryData = await responce.json();
  showCatagory(catagoryData.categories);
};

// catagory video display
const loadCatagoryVideos = async (id) => {
  showLoader();
  let responce = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
  );
  let catagoryData = await responce.json();
  ShowVideos(catagoryData.category);
  removeActiveClass();
  const activebtn = document.getElementById(`btn-${id}`);
  activebtn.classList.add("active");
  removeLoader();
};
// load videos
const loadVideos = async (searchInput = " ") => {
  showLoader();
  removeActiveClass();
  const allbtn = document.getElementById("btn-all").classList.add("active");
  let responce = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchInput}`
  );
  let videoData = await responce.json();
  ShowVideos(videoData.videos);
  removeLoader();
};
// load videos details
const videoDetails = async (videoId) => {
  let responce = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
  );
  let videodata = await responce.json();
  showVideosDetails(videodata.video);
};
// show catagory
const showCatagory = (categories) => {
  categories.forEach((element) => {
    let navbtn = `
          <li id="btn-${element.category_id}" onclick="loadCatagoryVideos(${element.category_id})" class="btn text-xl hover:bg-red-500 hover:text-white transition ">${element.category}</li> `;
    catagory.innerHTML += navbtn;
  });
};
// remove active class and bg set
const removeActiveClass = () => {
  const activeclass = document.querySelectorAll(".active");
  activeclass.forEach((classRm) => {
    classRm.classList.remove("active");
  });
};

// ShowVideos on the display
const ShowVideos = (allvideo) => {
  containar.innerHTML = "";
  allvideo.forEach((video) => {
    let cards = ` <div class="video-card ">
          <figure>
            <img class="w-full h-[150px] object-cover" src="${
              video.thumbnail
            }" alt="" />
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
              <h2 class="text-[16px] font-semibold"> ${video.title}</h2>
            </div>
            <div class="ml-7">
              <div class="flex items-center">
                <h2 class="text-[#17171770]">${
                  video.authors[0].profile_name
                }</h2>
                 
               ${
                 video.authors[0].verified
                   ? `<img class="w-4 mt-1 ml-1" src="assets/blue-badge.png" />`
                   : ""
               }
              </div>
              <div class="text-[#17171770]">${video.others.views} views</div>
            </div>
            
          </div>
         <button onclick="videoDetails('${
           video.video_id
         }')" class="btn btn-block">See Details</button>
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
};

// ShowVideosDetails on the display
const showVideosDetails = (videodata) => {
  const moreInfo = document.getElementById("moreInfo");
  const details = document.getElementById("details");
  moreInfo.showModal();
  details.innerHTML = ` <div class="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="${videodata.thumbnail}"
      />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${videodata.title}</h2>
    <p>${videodata.description}</p>
  </div>
</div>`;
};

// <p>${video.others.posted_date}</p>

const search = document.getElementById("search");
search.addEventListener("keyup", (e) => {
  loadVideos(e.target.value);
});

loadCatagory();
