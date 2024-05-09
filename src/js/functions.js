export default function sortObject(object, sortBy = []) {
  const data = Object.entries(object).reduce((acc, item) => {
    if (!sortBy.includes(item[0])) {
      acc.push({
        key: item[0],
        value: item[1],
      });
    }

    return acc;
  }, []);
  data.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });
  sortBy.reverse();
  for (let i = 0; i < sortBy.length; i += 1) {
    data.unshift({
      key: sortBy[i],
      value: object[sortBy[i]],
    });
  }

  return data;
}
