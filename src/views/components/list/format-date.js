const formatDate = inputDate => {
  const year = inputDate.substring(0, 4);
  const month = inputDate.substring(4, 6);
  const day = inputDate.substring(6, 8);
  const formatedDate = `${year}. ${month}. ${day}`;
  return formatedDate;
};

export default formatDate;
