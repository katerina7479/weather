function getTempPromise(location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (false) {
        resolve(79);
      } else { reject('City not found'); }
    }, 1000);
  });
}

getTempPromise('San Francisco').then(function (temp) {
  console.log('Promise success', temp);
}, function (err) {
  console.log('Promise error', err);
});

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if ((typeof a == 'number') && (typeof b == 'number')) {
      resolve([a + b, true]);
    } else {
      reject(['Parameters not numbers', false]);
    }
  })
}

function printMe(a) {
  console.log(a);
}

addPromise(1, 2).then(printMe, printMe)
addPromise(1, "This").then(printMe, printMe)
