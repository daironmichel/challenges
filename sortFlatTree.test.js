const sortCategoriesForInsert = require("./sortFlatTree");

test("sorts input", () => {
  const jsonInput = [
    {
      name: "Accessories",
      id: 1,
      parent_id: 20,
    },
    {
      name: "Watches",
      id: 57,
      parent_id: 1,
    },
    {
      name: "Men",
      id: 20,
      parent_id: null,
    },
  ];

  const output = sortCategoriesForInsert(jsonInput);

  expect(output[0]["id"]).toBe(20);
  expect(output[1]["id"]).toBe(1);
  expect(output[2]["id"]).toBe(57);
});
