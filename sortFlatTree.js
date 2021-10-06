function findDepth(categories, category, depth = 0) {
  if (category["parent_id"] === null) return depth;
  const parent = categories.find((c) => c["id"] === category["parent_id"]);
  return findDepth(categories, parent, depth + 1);
}

module.exports = function sortCategoriesForInsert(inputJson) {
  const properJsonOutput = [...inputJson];
  const depthTable = {};
  properJsonOutput.sort((c1, c2) => {
    if (!(c1["id"] in depthTable)) {
      depthTable[c1["id"]] = findDepth(inputJson, c1);
    }
    if (!(c2["id"] in depthTable)) {
      depthTable[c2["id"]] = findDepth(inputJson, c2);
    }

    if (depthTable[c1["id"]] < depthTable[c2["id"]]) {
      return -1; // c1 before c2
    }
    if (depthTable[c1["id"]] > depthTable[c2["id"]]) {
      return 1; // c2 before c1
    }

    return 0; //
  });

  return properJsonOutput;
};
