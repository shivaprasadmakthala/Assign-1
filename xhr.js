//  //set up http request
var xhr = new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/users/");
xhr.send();

//Set up a listner where server listen to our request
xhr.onload = function() {
     //process the request and server will return the data in response
     if(xhr.status>=200 && xhr.status<=300) {
         //convert raw into js notation format
         var data = JSON.parse(xhr.response);
        //  console.log(data);
        for(var i=0; i<data.length; i++) {
            console.log(data[i].name);
            console.log(data[i].email);
            console.log(data[i].address);
        }
     } else {
         //you should print the error
         console.log("Data is not available")
     }
}