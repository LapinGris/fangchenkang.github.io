(function () {
  const pages = document.querySelectorAll("[data-library-filter]");

  pages.forEach((grid) => {
    const page = grid.closest(".library-page");
    if (!page) return;

    const buttons = page.querySelectorAll("[data-filter]");
    const cards = Array.from(grid.querySelectorAll(".library-card"));
    const empty = page.querySelector(".library-empty");

    const applyFilter = (filter) => {
      let visibleCount = 0;

      cards.forEach((card) => {
        const category = card.dataset.category || "";
        const tags = card.dataset.tags || "";
        const matched = filter === "all" || category === filter || tags.split(/\s+/).includes(filter);
        card.hidden = !matched;
        if (matched) visibleCount += 1;
      });

      if (empty) empty.hidden = visibleCount !== 0;
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.classList.toggle("active", item === button));
        applyFilter(button.dataset.filter || "all");
      });
    });
  });
})();
