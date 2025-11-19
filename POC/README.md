fetch("https://api.com/create", {
    method: "POST",            // 1. Sending data (creating) , whatever http request ur making use of 
    headers: {
        "Content-Type": "application/json"  // 2. Telling server it's JSON
    },
    body: JSON.stringify({     // 3. Sending data , json is havascript onject notation , when sending data in api we cant send data format directly , so we need to convert it into the string 
        name: "Gautham",
        age: 22
    })
});

