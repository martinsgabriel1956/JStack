const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise resolved");
    reject("Promise rejected");
  }, 2000);
});

apiCall
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const response = apiCall;
console.log({ apiCall });

async function getPromiseInfo() {
  try {
    const response = await apiCall;
    console.log({ response });
  } catch (error) {
    console.log(error);
  }
}

console.log(getPromiseInfo());
