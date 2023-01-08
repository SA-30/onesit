const os = require('os')

// For info of the user
const user = os.userInfo()
// console.log(user);

// System Uptime
const uptime = os.uptime()

console.log(`The system has been running for ${uptime} seconds`)




