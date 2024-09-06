let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = true;
let runnerAge = 18;

if(runnerAge > 18 && earlyReg) {
  raceNumber += 1000;
}

if(runnerAge > 18 && earlyReg) {
  console.log(`Runner ${raceNumber} starts at 9:30am.`);
} else if (runnerAge > 18 && !earlyReg) {
  console.log(`Runner ${raceNumber} starts at 11:00am.`)
} else if(runnerAge < 18) {
  console.log(`Runner ${raceNumber} starts at 12:30pm.`)
} else {
  console.log('See the registration desk.')
}
