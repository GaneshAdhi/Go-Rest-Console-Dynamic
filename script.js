//Request Method 

let consoleFormEl = document.getElementById("consoleForm");

// request url 
let requestUrlEl = document.getElementById("requestUrl");

//Error message Url para 
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");

// request method select menu 
let requestMethodEl = document.getElementById("requestMethod");

// Request Body 
let requestBodyEl = document.getElementById("requestBody");

//Resposce Method 

let responseStatusEl = document.getElementById("responseStatus");

let responseBodyEl = document.getElementById("responseBody");

// Url function 


requestUrlEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        requestUrlErrMsgEl.textContent = "Required*"
    } else {
        requestUrlEl.value = "https://gorest.co.in/public-api/users"
    }
});

// Request Method function
let methodOfRequest = "POST"

function defaultMethod(event) {
    methodOfRequest = event.target.value;
    console.log(methodOfRequest)
}

requestMethodEl.addEventListener("change", defaultMethod);

//Request Body Function
let requestBody = ""

function requestbody(event) {
    requestBody = event.target.value

}


requestBodyEl.addEventListener("keyup", requestbody);

// get method funtion 
let details = function() {
    let url = requestUrlEl.value;

    let option = {
        method: methodOfRequest,
        body: JSON.stringify(requestBody)
    }

    fetch(url, option)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            responseStatusEl.value = data.code;
            responseBodyEl.value = JSON.stringify(data)
        })
}

//Response Funtion 

consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    details();
})
