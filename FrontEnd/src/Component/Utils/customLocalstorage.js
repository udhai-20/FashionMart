const getData = (key) => {
  try {
    const data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (e) {
    return null;
  }
};
// to save data
const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export { getData, saveData };
