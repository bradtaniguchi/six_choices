/**
 * Compares two objects with shallow comparison.
 * @param a object to compare
 * @param b object to compare
 */
export const shallowCompare = (a: any, b: any) => {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length === bKeys.length) {
    return (
      aKeys.every(aKey => a[aKey] === b[aKey]) &&
      bKeys.every(bKey => b[bKey] === a[bKey])
    );
  }
  return false;
};
