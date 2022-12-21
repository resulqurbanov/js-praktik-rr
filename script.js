// let n = 1;

//     document.getElementById("btn").onclick = () => {
//   setInterval(() => {
//     n++;
//     console.log(n);
//   }, 1000);
// };
// document.getElementById("btn2").onclick =()=>{
//     clearInterval
// }
function main(data) {
    let datam =data
    console.log(datam);
}

async function getData(cb) {
    let ul=document.querySelector("ul")
    let data = await fetch ("https://northwind.vercel.app/api/categories")
    let paresedData = await data.json()
    cb(paresedData)
    let li1 =document.createElement("li")
    let li2 =document.createElement("li")
    let li3 =document.createElement("li")

}
getData(main);