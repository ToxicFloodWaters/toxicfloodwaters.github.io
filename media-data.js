const mediaItems = [
  {
    id: "st-roch-tuesdays-2012-2013",
    title: "Every Tuesday at St. Roch Tavern",
    year: "2012–2013",
    type: "flyer",
    category: "Flyers",
    image: "Every%20tuesday%20in%202012-13.jpg",
    alt: "Every Tuesday flyer for the St. Roch Tavern residency in 2012 and 2013",
    description: "The Chicken Drop headlined the Tuesday-night residency, with Toxic Flood Waters, Jobidiah Hudson and the Roustabouts, and special guests supporting.",
    details: "A recurring weekly residency with an all-local bill and a long-running underground run through New Orleans nightlife."
  },
  {
    id: "siberia-2015",
    title: "Siberia — Jan. 14, 2015",
    year: "2015",
    type: "photo",
    category: "Photos",
    image: "martha%20yes%20maam%20siberia%20jan%2014%202015.jpg",
    alt: "Flyer for the Siberia January 14, 2015 show",
    description: "A preserved flyer from one of the band’s underground New Orleans appearances.",
    details: "This archived flyer documents a past show from the band’s post-2010 New Orleans era and is part of the ongoing historical record."
  },
  {
    id: "video-placeholder",
    title: "Live footage",
    year: "Archive",
    type: "video",
    category: "Video",
    image: "",
    alt: "Video placeholder",
    description: "This space can hold a performance video, rehearsal clip, or guest appearance once the footage is ready to archive.",
    details: "Add a hosted YouTube, Vimeo, or local MP4 embed here when the film is ready."
  }
];

const filterButtons = document.querySelectorAll(".filter-button");
const mediaGrid = document.getElementById("media-grid");
const emptyState = document.getElementById("empty-state");

const buildCard = (item) => `
  <article class="media-card ${item.type}">
    ${item.image ? `<img class="media-thumb" src="${item.image}" alt="${item.alt}" />` : `<div class="video-placeholder"><span>Video clip</span><strong>Add embed</strong></div>`}
    <div class="media-body">
      <div class="media-meta">
        <span class="media-type">${item.category}</span>
        <span class="media-year">${item.year}</span>
      </div>
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <a class="detail-link" href="media-detail.html?id=${item.id}">View details →</a>
    </div>
  </article>
`;

const renderMedia = (filter = "all") => {
  const visibleItems = filter === "all"
    ? mediaItems
    : mediaItems.filter((item) => item.type.toLowerCase() === filter.toLowerCase());

  mediaGrid.innerHTML = visibleItems.map(buildCard).join("");
  emptyState.hidden = visibleItems.length !== 0;
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    renderMedia(button.dataset.filter);
  });
});

renderMedia();
