export function initSearch() {
  const searchInput = document.getElementById("productSearch");
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.trim().toLowerCase();

    document.querySelectorAll("#list-products .col").forEach(col => {
      const title = col.querySelector(".card-title").textContent.toLowerCase();
      const body  = col.querySelector(".card-body").textContent.toLowerCase();

      col.style.display = 
        (title.includes(term) || body.includes(term)) 
          ? "" 
          : "none";
    });
  });
}
