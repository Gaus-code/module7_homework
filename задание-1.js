const getObj = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Ключ: ${key}, Значение: ${obj[key]}`);
    }
  }
}

const object = {
  name: 'Maria',
  age: 350,
  city: 'kaliningrad',
};

getObj(object);