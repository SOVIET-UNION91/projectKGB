
var password = "wordpass";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while(response != password && !error){
     if(entryCount < entryLimit){
          response = window.prompt("Enter Your KGB ID:-");
          entryCount++;
     } else {
          error = true;
     }
}

if(error){
     alert("Wrong Passsword,Too many entries. get back to Homepage");

} else {
     alert("Success. Scroll down to the end of page. And click the link to join the server");
}
