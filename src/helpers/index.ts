export const isInEnum = (
  value: string,
  possibleValues: Record<string, string>
): boolean => {
  const values = Object.values(possibleValues);
  const isValid = values.includes(value);
  if (!isValid) {
    console.warn(`${value} is not valid! Use one of those values:`);
    values.map((val) => console.warn(`${val}`));
  }
  return isValid;
};
