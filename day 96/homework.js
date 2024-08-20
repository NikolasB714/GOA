const task1Promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, 2000);
  });
  
  task1Promise.then((result) => {
    console.log(result);
  });

  const task2Promise = new Promise((resolve, reject) => {
    reject(new Error("Task 2 failed"));
  });
  
  task2Promise.catch((error) => {
    console.error(error.message);
  });

  const task3Promise = new Promise((resolve) => {
    resolve(5);
  });
  
  task3Promise
    .then((number) => number * 2)
    .then((doubledNumber) => {
      console.log("Doubled number:", doubledNumber);
    });
    function delayedMessage() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("First");
          }, 2000);
        });
      }
      
      delayedMessage()
        .then((message) => {
          console.log(message);
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve("Second");
            }, 1000);
          });
        })
        .then((secondMessage) => {
          console.log(secondMessage);
        });

        function failingTask() {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                reject(new Error("Task 3 failed"));
              }, 2000);
            });
          }
          
          failingTask().catch((error) => {
            console.error(error.message);
          });

          function randomDelayTask1() {
            const randomDelay = Math.random() * 4000 + 1000; // Random delay between 1 and 5 seconds
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve("Task 1 complete");
              }, randomDelay);
            });
          }
          
          randomDelayTask1().then((result) => {
            console.log(result);
          });

          function randomDelayTask2() {
            const randomDelay = Math.random() * 2000 + 1000; // Random delay between 1 and 3 seconds
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve("First");
              }, randomDelay);
            });
          }
          
          randomDelayTask2()
            .then((message) => {
              console.log(message);
              return new Promise((resolve) => {
                const secondRandomDelay = Math.random() * 2000 + 1000;
                setTimeout(() => {
                  resolve("Second");
                }, secondRandomDelay);
              });
            })
            .then((secondMessage) => {
              console.log(secondMessage);
            });

            function randomDelayTask3() {
                const randomDelay = Math.random() * 3000 + 1000; // Random delay between 1 and 4 seconds
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    reject(new Error("Task 3 failed"));
                  }, randomDelay);
                });
              }
              
              randomDelayTask3().catch((error) => {
                console.error(error.message);
              });

              function randomDelayTask4() {
                const randomDelay = Math.random() * 4000 + 1000; // Random delay between 1 and 5 seconds
                const randomValue = Math.random();
                const message = randomValue > 0.5 ? "Task 1 complete" : "Task 1 was quick";
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(message);
                  }, randomDelay);
                });
              }
              
              randomDelayTask4().then((result) => {
                console.log(result);
              });

              function randomDelayTask5() {
                const randomDelay = Math.random() * 3000 + 1000; // Random delay between 1 and 4 seconds
                const randomValue = Math.random();
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    if (randomValue < 0.3) {
                      reject(new Error("Task 3 failed"));
                    } else {
                      resolve("Task 3 complete");
                    }
                  }, randomDelay);
                });
              }
              
              randomDelayTask5()
                .then((result) => {
                  console.log(result);
                })
                .catch((error) => {
                  console.error(error.message);
                });

                const promise1 = new Promise((resolve) => {
                    setTimeout(() => {
                      resolve("Promise 1");
                    }, 1000);
                  });
                  
                  const promise2 = new Promise((resolve) => {
                    setTimeout(() => {
                      resolve("Promise 2");
                    }, 2000);
                  });
                  
                  const promise3 = new Promise((resolve) => {
                    setTimeout(() => {
                      resolve("Promise 3");
                    }, 3000);
                  });
                  
                  Promise.all([promise1, promise2, promise3])
                    .then((results) => {
                      console.log("All promises resolved:", results);
                    })
                    .catch((error) => {
                      console.error("Error:", error.message);
                    });

                    function getRandomDelay() {
                        return Math.random() * 4000 + 1000; // Random delay between 1 and 5 seconds
                      }
                      
                      const promise4 = new Promise((resolve) => {
                        setTimeout(() => {
                          resolve("Message A");
                        }, getRandomDelay());
                      });
                      
                      const promise5 = new Promise((resolve) => {
                        setTimeout(() => {
                          resolve("Message B");
                        }, getRandomDelay());
                      });
                      
                      const promise6 = new Promise((resolve) => {
                        setTimeout(() => {
                          resolve("Message C");
                        }, getRandomDelay());
                      });
                      
                      Promise.all([promiseA, promiseB, promiseC])
                        .then((results) => {
                          console.log("All promises resolved:", results);
                        })
                        .catch((error) => {
                          console.error("Error:", error.message);
                        });

                        function getRandomDelay() {
                            return Math.random() * 4000 + 1000; // Random delay between 1 and 5 seconds
                          }
                          
                          const promiseA = new Promise((resolve) => {
                            setTimeout(() => {
                              resolve("Message A");
                            }, getRandomDelay());
                          });
                          
                          const promiseB = new Promise((resolve) => {
                            setTimeout(() => {
                              resolve("Message B");
                            }, getRandomDelay());
                          });
                          
                          const promiseC = new Promise((resolve) => {
                            setTimeout(() => {
                              resolve("Message C");
                            }, getRandomDelay());
                          });
                          
                          Promise.all([promiseA, promiseB, promiseC])
                            .then((results) => {
                              console.log("All promises resolved:", results);
                            })
                            .catch((error) => {
                              console.error("Error:", error.message);
                            });

                            const promiseX = new Promise((resolve) => {
                                setTimeout(() => {
                                  resolve("Promise X");
                                }, 1000);
                              });
                              
                              const promiseY = new Promise((resolve, reject) => {
                                setTimeout(() => {
                                  reject(new Error("Promise failed"));
                                }, 2000);
                              });
                              
                              const promiseZ = new Promise((resolve) => {
                                setTimeout(() => {
                                  resolve("Promise Z");
                                }, 3000);
                              });
                              
                              Promise.all([promiseX, promiseY, promiseZ])
                                .then((results) => {
                                  console.log("All promises resolved:", results);
                                })
                                .catch((error) => {
                                  console.error("Error:", error.message);
                                });

                                function getRandomValue() {
                                    return Math.random();
                                  }
                                  
                                  const promiseP = new Promise((resolve, reject) => {
                                    const randomValue = getRandomValue();
                                    if (randomValue > 0.5) {
                                      resolve("Resolved by chance");
                                    } else {
                                      reject(new Error("Rejected by chance"));
                                    }
                                  });
                                  
                                  const promiseQ = new Promise((resolve, reject) => {
                                    const randomValue = getRandomValue();
                                    if (randomValue > 0.3) {
                                      resolve("Resolved by chance");
                                    } else {
                                      reject(new Error("Rejected by chance"));
                                    }
                                  });
                                  
                                  const promiseR = new Promise((resolve, reject) => {
                                    const randomValue = getRandomValue();
                                    if (randomValue > 0.7) {
                                      resolve("Resolved by chance");
                                    } else {
                                      reject(new Error("Rejected by chance"));
                                    }
                                  });
                                  
                                  Promise.all([promiseP, promiseQ, promiseR])
                                    .then((results) => {
                                      console.log("All promises resolved:", results);
                                    })
                                    .catch((error) => {
                                      console.error("Error:", error.message);
                                    });

                                    function getRandomNumber() {
                                        return Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
                                      }
                                      
                                      const numberPromise1 = new Promise((resolve) => {
                                        setTimeout(() => {
                                          resolve(getRandomNumber());
                                        }, getRandomDelay());
                                      });
                                      
                                      const numberPromise2 = new Promise((resolve) => {
                                        setTimeout(() => {
                                          resolve(getRandomNumber());
                                        }, getRandomDelay());
                                      });
                                      