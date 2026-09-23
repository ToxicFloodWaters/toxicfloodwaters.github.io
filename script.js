const shows = [
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
  const next = sortedShows[0];
  nextStop.textContent = `${next.city}, ${next.state}`;

  list.innerHTML = sortedShows.map((show) => {
    const location = `${show.city}, ${show.state}, ${show.country}`;
    const statusClass = show.status === "confirmed" ? "confirmed" : "tentative";
    const statusLabel = show.status === "confirmed" ? "Confirmed" : "Tentative";
    return `
      <article class="show-card">
        <div class="show-date"><span class="month">${new Intl.DateTimeFormat("en-US", { month: "short" }).format(new Date(show.date + "T00:00:00"))}</span><span class="day">${new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(new Date(show.date + "T00:00:00"))}</span><span class="weekday">${new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(new Date(show.date + "T00:00:00"))}</span></div>
        <div class="show-meta">
          ${show.flyer ? `<img class="show-flyer" src="${show.flyer}" alt="Flyer for ${show.venue} on ${show.date}" />` : ""}
          <div>
            <span class="venue">${show.venue}</span>
            <span class="location">${location}</span>
          </div>
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
