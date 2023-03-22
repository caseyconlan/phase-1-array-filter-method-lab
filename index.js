function findMatching(drivers, lettercase) {
    return drivers.filter(function (driver) {return driver.toLowerCase() == lettercase.toLowerCase()})
  }

  function fuzzyMatch(drivers, firstLetter) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, firstLetter.length) == firstLetter.toLowerCase() })
  }
  
  function matchName(drivers, dupe) {
    return drivers.filter(function (driver) { return driver.name == dupe })
  }