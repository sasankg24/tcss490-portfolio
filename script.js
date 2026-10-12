// Builds one card per entry in CARDS (see cards.js).
function renderCards() {
  const grid = document.getElementById("cards");
  for (const card of CARDS) {
    const el = document.createElement("article");
    el.className = "card " + (card.status === "done" ? "card-done" : "card-idea");

    const label = document.createElement("p");
    label.className = "card-label";
    label.textContent = "Artifact " + card.number + (card.status === "done" ? "" : " · Idea");

    const title = document.createElement("h3");
    title.textContent = card.title;

    const body = document.createElement("p");
    body.className = "card-body";
    body.textContent = card.reflection;

    el.append(label, title, body);

    if (card.link) {
      const a = document.createElement("a");
      a.href = card.link;
      a.className = "card-link";
      a.textContent = "View artifact →";
      el.append(a);
    }
    grid.append(el);
  }
}
document.getElementById("year").textContent = new Date().getFullYear();
renderCards();
