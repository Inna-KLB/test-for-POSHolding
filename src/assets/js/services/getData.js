const getData = async() => {
  let responce = await fetch('db.json');
  return await responce.json();
};
export default getData;