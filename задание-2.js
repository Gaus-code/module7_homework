const checkObj = (str, obj) => {
    return obj.hasOwnProperty(str);
}
const userInfo = {
    name: 'Maria',
    age: 350,
    city: 'Kaliningrad',
};
console.log(checkObj('name', userInfo));
console.log(checkObj('age', userInfo)); 
console.log(checkObj('city', userInfo)); 
console.log(checkObj('gender', userInfo)); 