const getpromise=() => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               const success = true; // Simulate success or failure
               if (success) {
                    resolve("Data fetched successfully!");
               } else {
                    reject("Error fetching data.");
               }
          }, 3000);
     });
}
let result = getpromise();
result
     .then(data => {
          console.log("promise resolved", data);  // This will run if the promise is resolved
     })
     .catch(error => {
          console.error("Promise rejected", error); // This will run if the promise is rejected
     });
     function asyncFunc1(){
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Async Function 1 completed");
          }, 2000);
     });       

}
function asyncFunc2(){
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Async Function 2 completed");
          }, 3000);
     });
}

function getData(id) {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log("Fetching data for id:",id);
            resolve(id);
        },1000);
    });
}

async function fetchData() {
    try {
        const data1 = await getData(101);
        console.log("First fetch:",data1);
        const data2 = await getData(102);
        console.log("second fetch:", data2);
        const data3 = await getData(103);
        console.log("Third fetch:", data3);


    } catch (error) {
        console.error("Error occurred:",error);
    }
}
fetchData ();

async function getnextdata() {
    console.log("getting data 1 ...");
    await getData(1);
    console.log("getting data 2 ...");
    await getData(2);
    console.log("getting data 3 ..."); 
    await getData(3); 

}
getnextdata();


    


