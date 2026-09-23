const showRecords = [
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

const formatDate = (dateString) => new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric"
}).format(new Date(`${dateString}T00:00:00`));

const renderShowData = () => {
  showCount.textContent = showRecords.length;
  dataList.innerHTML = showRecords.map((show) => `
    <article class="data-card" id="${show.id}">
      <div class="data-card-header">
        <div>
          <p class="eyebrow accent">${formatDate(show.date)} · ${show.time}</p>
          <h4>${show.venue}</h4>
          <p class="data-location">${show.city}, ${show.state}, ${show.country}</p>
        </div>
        <span class="show-status confirmed">${show.status}</span>
      </div>

      ${show.flyer ? `<img class="show-flyer detail-flyer" src="${show.flyer}" alt="Flyer for ${show.venue} on ${formatDate(show.date)}" />` : ""}

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
