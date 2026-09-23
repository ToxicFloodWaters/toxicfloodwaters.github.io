const shows = [
  {
    date: "2012-01-03",
    displayDate: "Every Tuesday in 2012 and 2013",
    venue: "St. Roch Tavern",
    city: "New Orleans",
    state: "LA",
    country: "USA",
    time: "9:00 PM",
    crowd: "Not recorded",
    status: "confirmed",
    details: "show-data.html#st-roch-tavern-tuesdays-2012-2013",
    flyer: "Every%20tuesday%20in%202012-13.jpg"
  },
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
  const next = upcomingShows[0];
  nextStop.textContent = next ? `${next.city}, ${next.state}` : "No upcoming dates";

  list.innerHTML = upcomingShows.map((show) => {
    const location = `${show.city}, ${show.state}, ${show.country}`;
    const statusClass = show.status === "confirmed" ? "confirmed" : "tentative";
    const statusLabel = show.status === "confirmed" ? "Confirmed" : "Tentative";
    const showDate = new Date(`${show.date}T00:00:00`);
    const dateLabel = show.displayDate || new Intl.DateTimeFormat("en-US", { weekday: "long", year: "numeric" }).format(showDate);
    return `
      <article class="show-card">
        <div class="show-date"><span class="month">${show.displayDate ? "2012–13" : new Intl.DateTimeFormat("en-US", { month: "short" }).format(showDate)}</span><span class="day">${show.displayDate ? "Every Tuesday" : new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(showDate)}</span><span class="weekday">${dateLabel}</span></div>
        <div class="show-meta">
          ${show.flyer ? `<img class="show-flyer" src="${show.flyer}" alt="Flyer for ${dateLabel}" />` : ""}
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
