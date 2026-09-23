const shows = [
  {
    date: "2015-01-14",
    venue: "Siberia",
    city: "New Orleans",
    state: "LA",
    country: "USA",
    time: "Not listed",
    crowd: "Not recorded",
    status: "confirmed",
    details: "show-data.html#martha-yes-maam-siberia",
    flyer: "martha%20yes%20maam%20siberia%20jan%2014%202015.jpg"
  },
  {
    date: "2026-10-07",
    venue: "St. Roch Tavern",
    city: "New Orleans",
    state: "LA",
    country: "USA",
    time: "8:00 PM",
    crowd: "15-30 predicted",
    status: "confirmed",
    details: "show-data.html#st-roch-tavern",
    flyer: "Oct.%207%202026.jpg"
  }
];

const list = document.getElementById("show-list");
const nextStop = document.getElementById("next-stop");

const renderShows = () => {
  const sortedShows = [...shows].sort((a, b) => new Date(a.date) - new Date(b.date));
  const upcomingShows = sortedShows.filter((show) => new Date(`${show.date}T23:59:59`) >= new Date());
  const next = upcomingShows[0] || sortedShows[sortedShows.length - 1];
  nextStop.textContent = next ? `${next.city}, ${next.state}` : "No dates scheduled";

  list.innerHTML = sortedShows.map((show) => {
    const location = `${show.city}, ${show.state}, ${show.country}`;
    const statusClass = show.status === "confirmed" ? "confirmed" : "tentative";
    const statusLabel = show.status === "confirmed" ? "Confirmed" : "Tentative";
    const showDate = new Date(`${show.date}T00:00:00`);
    return `
      <article class="show-card">
        <div class="show-date"><span class="month">${new Intl.DateTimeFormat("en-US", { month: "short" }).format(showDate)}</span><span class="day">${new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(showDate)}</span><span class="weekday">${new Intl.DateTimeFormat("en-US", { weekday: "long", year: "numeric" }).format(showDate)}</span></div>
        <div class="show-meta">
          ${show.flyer ? `<img class="show-flyer" src="${show.flyer}" alt="Flyer for ${show.venue} on ${show.date}" />` : ""}
          <div><span class="venue">${show.venue}</span><span class="location">${location}</span></div>
        </div>
        <div class="show-time">${show.time}</div>
        <div class="show-crowd">${show.crowd}</div>
        <div class="show-status ${statusClass}">${statusLabel}</div>
        <a class="details-link" href="${show.details}">View show data →</a>
      </article>
    `;
  }).join("");
};

renderShows();
