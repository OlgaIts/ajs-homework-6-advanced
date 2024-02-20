export default function orderByProps(obj, sortOrder) {
  const sortedProps = [];
  const otherProps = [];

  for (const prop in obj) {
    if (sortOrder.includes(prop)) {
      sortedProps.push({ key: prop, value: obj[prop] });
    } else {
      otherProps.push({ key: prop, value: obj[prop] });
    }
  }

  sortedProps.sort(
    (a, b) => sortOrder.indexOf(a.key) - sortOrder.indexOf(b.key),
  );

  otherProps.sort((a, b) => (a.key < b.key ? -1 : 1));

  const result = sortedProps.concat(otherProps);

  return result;
}
