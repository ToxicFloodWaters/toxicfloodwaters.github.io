const showRecords = [
  {
    id: "st-roch-tavern-tuesdays-2012-2013",
    date: "2012-01-03",
    dateLabel: "Every Tuesday in 2012 and 2013",
    venue: "St. Roch Tavern",
    city: "New Orleans",
    state: "LA",
    country: "USA",
    time: "9:00 PM",
    crowd: "Not recorded",
    status: "Confirmed",
    otherBands: "Toxic Flood Waters; Jobidiah Hudson and the Roustabouts; special guests",
    opener: "Not specified",
    headliner: "The Chicken Drop",
    engagement: "Not recorded",
    pay: "Not recorded",
    setLength: "Not recorded",
    barEarnings: "Not recorded",
    doorEarnings: "Not recorded",
    flyer: "Every%20tuesday%20in%202012-13.jpg"
  },
  {
    id: "martha-yes-maam-siberia",
    date: "2015-01-14",
    venue: "Siberia",
    city: "New Orleans",
    state: "LA",
    country: "USA",
    time: "Not listed",
    crowd: "Not recorded",
    status: "Confirmed",
    otherBands: "Martha; Yes Ma'am",
    opener: "Not listed",
    headliner: "Not listed",
    engagement: "Not recorded",
    pay: "Not recorded",
    setLength: "Not recorded",
    barEarnings: "Not recorded",
    doorEarnings: "Not recorded",
    flyer: "martha%20yes%20maam%20siberia%20jan%2014%202015.jpg"
  },
  {
    id: "st-roch-tavern",
    date: "2026-10-07",
    venue: "St. Roch Tavern",
    city: "New Orleans",
    state: "LA",
    country: "USA",
    time: "8:00 PM",
    crowd: "15–30 predicted",
    status: "Confirmed",
    otherBands: "The Slick Skillet Serenaders",
    opener: "Toxic Flood Waters",
    headliner: "The Broad Street Misdemeanors",
    engagement: "Not yet reported",
    pay: "Undisclosed",
    setLength: "Not yet reported",
    barEarnings: "Unknown",
    doorEarnings: "Unknown",
    flyer: "Oct.%207%202026.jpg"
  }
];

const dataList = document.getElementById("show-data-list");
const showCount = document.getElementById("show-count");

const formatDate = (show) => show.dateLabel || new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric"
}).format(new Date(`${show.date}T00:00:00`));

const renderShowData = () => {
  showCount.textContent = showRecords.length;
  dataList.innerHTML = showRecords.map((show) => `
    <article class="data-card" id="${show.id}">
      <div class="data-card-header">
        <div>
          <p class="eyebrow accent">${formatDate(show)} · ${show.time}</p>
          <h4>${show.venue}</h4>
          <p class="data-location">${show.city}, ${show.state}, ${show.country}</p>
        </div>
        <span class="show-status confirmed">${show.status}</span>
      </div>
      ${show.flyer ? `<img class="show-flyer detail-flyer" src="${show.flyer}" alt="Flyer for ${formatDate(show)}" />` : ""}
      <div class="metric-grid">
        <div class="metric"><span>Other bands</span><strong>${show.otherBands}</strong></div>
        <div class="metric"><span>Opened by</span><strong>${show.opener}</strong></div>
        <div class="metric"><span>Headlined by</span><strong>${show.headliner}</strong></div>
        <div class="metric"><span>Fan engagement</span><strong>${show.engagement}</strong></div>
        <div class="metric"><span>Pay</span><strong>${show.pay}</strong></div>
        <div class="metric"><span>Set length</span><strong>${show.setLength}</strong></div>
        <div class="metric"><span>Venue bar earnings</span><strong>${show.barEarnings}</strong></div>
        <div class="metric"><span>Door earnings</span><strong>${show.doorEarnings}</strong></div>
      </div>
    </article>
  `).join("");
};

renderShowData();
