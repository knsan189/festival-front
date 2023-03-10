export const parseDate = (dateString?: string) => {
  if (!dateString) return "";
  const temp = dateString.toString().split("");
  temp.splice(4, 0, ".");
  temp.splice(7, 0, ".");
  return temp.join("");
};

export default {};
