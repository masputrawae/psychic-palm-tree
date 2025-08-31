import { $, $$, byId } from "js/helper";

export const viewContentHandler = () => {
  $$("[data-view]").forEach((btn) => {
    const targetId = btn.getAttribute("data-view");

    btn.addEventListener("click", () => {
      $$("[data-view]").forEach((e) => {
        e.classList.remove("view-control__btn--is-active");
      });
      $(`.view-control__btn[data-view="${targetId}"]`).classList.add(
        "view-control__btn--is-active",
      );

      $$(".view-content").forEach((e) => {
        e.classList.remove("view-content--is-active");
      });
      byId(targetId).classList.add("view-content--is-active");
    });
  });
};