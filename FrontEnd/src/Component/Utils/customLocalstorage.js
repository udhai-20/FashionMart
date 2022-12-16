const getData = (key) => {
  // console.log(key);
  try {
    const data = localStorage.getItem(key);

    const datas = JSON.parse(data);
    return datas;
  } catch (e) {
    return null;
  }
};
// to save data
const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export { getData, saveData };
