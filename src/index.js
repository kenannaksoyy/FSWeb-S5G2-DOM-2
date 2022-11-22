import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
function random(){
    return Math.floor(Math.random()) * 256;
}
document.querySelector("h1").addEventListener("click",(e)=>{
    alert("Bana Tıkladın");    
});
let baslik=document.querySelector("h1");
baslik.addEventListener("mouseover", (e)=>{
    e.target.style.color="red";
});
baslik.addEventListener("mouseout", (e)=>{
    e.target.style.color="green";
});
document.querySelector(".main-navigation").addEventListener("keydown",(e)=>{
    e.target.style.backgroundColor=`rgb(${random()}, ${random()}, ${random()})`;
});
document.querySelector(".main-navigation").addEventListener("wheel",(e)=>{
    e.target.style.color=`rgb(${random()}, ${random()}, ${random()})`;
});
document.querySelector(".intro").addEventListener("focus" , (e) => {
    e.target.style.backgroundColor = "red";
});