import { $, setAttr } from "js/helper";

export const giscus = (theme) => {
  const container = $(".discussion");
  if (!container) return;
  container.innerHTML = "";

  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";

  const data = container.dataset;
  setAttr(script, "data-repo", data.repo);
  setAttr(script, "data-repo-id", data.repoId);
  setAttr(script, "data-category", data.category);
  setAttr(script, "data-category-id", data.categoryId);
  setAttr(script, "data-mapping", data.mapping);
  setAttr(script, "data-strict", data.strict);
  setAttr(script, "data-reactions-enabled", data.reactionsEnabled);
  setAttr(script, "data-emit-metadata", data.emitMetadata);
  setAttr(script, "data-input-position", data.inputPosition);
  setAttr(script, "data-theme", theme);
  setAttr(script, "data-lang", document.documentElement.lang || data.lang);
  script.crossOrigin = "anonymous";
  script.async = true;

  container.appendChild(script);
};
