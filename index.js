// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function (driver) {
    return driver.toLowerCase();
  })
}

function lowerCaseDrivers(arr) {
  return arr.map(function (driver) {
    let driverArr = driver.split(" ")
    return Object.assign({}, {firstName: driverArr[0]}, {lastName: driverArr[1]})
  })
}
