const items = ["b", "c", "d"]

test("Push returns the new length of the array correctly", () => {
  const i = [...items]
  expect(i.push("e")).toEqual(4)
  expect(i).toEqual(["b", "c", "d", "e"])
}); //przechodzi

test("Unshift returns the new length of the array correctly", () => {
  const i = [...items]
  expect(i.unshift("a")).toEqual(4)
  expect(i).toEqual(["a", "b", "c", "d"])
}); //naprawic
