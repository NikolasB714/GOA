const helloPromise = new Promise((resolve) => {
    resolve("Hello, World!");
  });
  
  helloPromise.then((result) => {
    console.log(result);
  });

  const delayPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 2 seconds");
    }, 2000);
  });
  
  delayPromise.then((result) => {
    console.log(result);
  });

  const firstPromise = new Promise((resolve) => {
    resolve("First");
  });
  
  const secondPromise = firstPromise.then((result) => {
    return result + " -> Second";
  });
  
  secondPromise.then((result) => {
    console.log(result);
  });

  const multiStepPromise = new Promise((resolve) => {
    resolve("Initial value");
  });
  
  multiStepPromise
    .then((result) => {
      console.log("Step 1:", result);
      return result + " -> Step 2";
    })
    .then((result) => {
      console.log("Step 2:", result);
      // Add more .then steps if needed
    });

    const errorPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Promise rejected after 1 second"));
        }, 1000);
      });
      
      errorPromise.catch((error) => {
        console.error(error.message);
      });

      function printWithDelay(message, delay) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(message);
            resolve();
          }, delay);
        });
      }
      
      printWithDelay("One", 1000)
        .then(() => printWithDelay("Two", 2000))
        .then(() => printWithDelay("Three", 3000));

        const sequentialPromise = printWithDelay("One", 1000)
  .then(() => printWithDelay("Two", 2000))
  .then(() => printWithDelay("Three", 3000));


  const errorOrSuccessPromise = new Promise((resolve, reject) => {
    const isSuccess = Math.random() < 0.5;
    if (isSuccess) {
      resolve("Promise resolved successfully");
    } else {
      reject(new Error("Promise rejected with a specific error"));
    }
  });
  
  errorOrSuccessPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });

    const messagePromise = new Promise((resolve) => {
        resolve("A resolved message");
      });
      
      messagePromise.then((message) => {
        console.log("Received:", message);
      });

      const intermediatePromise = new Promise((resolve) => {
        resolve(10);
      });
      
      intermediatePromise
        .then((value) => value * 2)
        .then((result) => result + 5)
        .then((finalResult) => {
          console.log("Final result:", finalResult);
        });

        