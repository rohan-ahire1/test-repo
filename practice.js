
const api=async()=>{
const data=await fetch('https://icanhazdadjoke.com/', {
    method:'GET',
    headers: {
        Accept: 'application/json'
    }   
});
const json=await data.json();
console.log(json);
}