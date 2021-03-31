const getData = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";

  try {
    const dataRaw = await fetch(url);
    const data = await dataRaw.json();
    console.log(data.slice(0, 20));
  } catch (error) {
    console.log(error);
  }
};

getData();
