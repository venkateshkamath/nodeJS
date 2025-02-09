//learning os
const os = require("os");

const user = os.userInfo();
console.log(user);

//uptime => how many secs the system / pc was up
console.log(`The system was up for ${os.uptime()} seconds`);

const currentUser = {
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  name: os.type(),
  release: os.release(),
};

console.log(currentUser);
