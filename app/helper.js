const helper = {};
helper.random = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const Max = 100,
  Min = 1;
helper.UUID = () => {
  return helper.random(Max, Min);
};

export default helper;
