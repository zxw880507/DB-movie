export function getTags(tab) {
  const { type, keyword, sortByType } = tab;
  const tags = (sortByType ? type : keyword).map((el) =>
    el.toLowerCase().replace(/\s/g, "_")
  );
  return { ...tab, tags };
}

export function tagFormatting(tag) {
  if (tag === "tv") {
    return tag.toUpperCase();
  }

  return tag
    .replace(/\w+/g, (x) => x[0].toUpperCase() + x.slice(1))
    .replace(/_/g, " ");
}
