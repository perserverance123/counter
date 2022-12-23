let v=0;
let player_count=0;
let v_largest=0;
let c_largest=0;
let alpha=document.getElementById("count");
let beta =  document.getElementById("prev_rec");
function increment()
{
v = v +1;
alpha.innerText=v;
console.log("button was clicked");
}
function save()
{   player_count+=1;
    console.log(v);
    if(v_largest<v)
{
    v_largest=v;
    c_largest=player_count;
}
    alpha.innerText=v;
    beta.innerText+="Player " +player_count +" :- "+v;
    beta.innerHTML+="<br>";
    
    v=0;
}

let topg=document.getElementById("end_match");
function end_the_match()
{
    alert("congratulation player " +c_largest +" "+" you won" );
    document.location.reload();
}
