let v=0;
let alpha=document.getElementById("count");
let beta =  document.getElementById("prev_rec");
function increment()
{
v = v +1;
alpha.innerText=v;
console.log("button was clicked");
}
function save()
{
    console.log(v);
   
    alpha.innerText=v;
    beta.innerText=beta.innerText+v+"-";
    v=0;
}
