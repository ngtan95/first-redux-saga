const WAITING_TIME = 2000;

export const simulateApiCall = responseData =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('Permission Denied');
      resolve(responseData);
    }, WAITING_TIME);
  });
