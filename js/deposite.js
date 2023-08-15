document.getElementById('btn-deposite').addEventListener("click", function(){
   let ammount = document.getElementById('depositeField').value;
   
   ammount = parseInt(ammount);
   
   if(ammount>0)
   {
    const intial = document.getElementById('deposite').innerText;
    const x= parseInt(intial)+ammount;
    document.getElementById('deposite').innerText=x;

    const intialTotal = document.getElementById('total').innerText;
    const y= parseInt(intialTotal)+ammount;
    document.getElementById('total').innerText=y;

    document.getElementById('depositeField').value='';
   }
   else{
    alert("Invalid Your Ammount");
    }
})



document.getElementById('btn-withdraw').addEventListener("click", function(){
    let ammount = document.getElementById('withdrawField').value;
    
    ammount = parseInt(ammount);
    let intialTotal = document.getElementById('total').innerText;
    if(ammount>0 && ammount<=intialTotal)
    {
     const intial = document.getElementById('withdraw').innerText;
     const x= parseInt(intial)+ammount;
     document.getElementById('withdraw').innerText=x;
 
     const intialTotal = document.getElementById('total').innerText;
     const y= parseInt(intialTotal)-ammount;
     document.getElementById('total').innerText=y;
 
     document.getElementById('withdrawField').value='';
    }
    else{
     alert("Invalid Your Ammount");
     }
 })

 document.getElementById('btn-logout-yes').addEventListener("click", function(){
      window.location.href = "index.html";
 })
 document.getElementById('btn-logout-no').addEventListener("click", function(){
    window.location.href = "dashboard.html";
})