import { $, $$, getLocalStorage, setLocalStorage } from "js/helper";

const KEY_FONT_SIZE = "site:font-size";

const applyFontSize = (size) => {
  const elHtml = document.documentElement;
  elHtml.style.setProperty("--content-default-font-size", `${size}px`);
  const radio = $(`input[name="font-size"][value="${size}"]`);
  if (radio) radio.checked = true;
  setLocalStorage(KEY_FONT_SIZE, size);
};

const optionFontSize = () => {
  const selected = $(`input[name="font-size"]:checked`);
  if (selected) {
    applyFontSize(selected.value);
  }
};

const initFontSize = () => {
  const storageSize = getLocalStorage(KEY_FONT_SIZE);
  if (!storageSize) {
    applyFontSize(14);
  } else {
    applyFontSize(storageSize);
  }
};

export const fontSizeHandler = () => {
  initFontSize();
  $$('input[name="font-size"]').forEach((el) => {
    el.addEventListener("change", () => {
      optionFontSize();

      // hapus class aktif dari semua label font-size
      $$("label.nav__item--font-size").forEach((lbl) =>
        lbl.classList.remove("nav__item--is-active"),
      );

      // tambahkan class aktif ke label input yang dipilih
      el.closest("label").classList.add("nav__item--is-active");
    });

    // sync saat load awal
    if (el.checked) {
      el.closest("label").classList.add("nav__item--is-active");
    }
  });
};
