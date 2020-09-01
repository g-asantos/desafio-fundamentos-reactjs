const formatDate = (value: number): string => {
  const data = new Date(value);

  const date = `${data.getDate()}/${data.getMonth()}/${data.getUTCFullYear()}`;

  return date;
};

export default formatDate;
