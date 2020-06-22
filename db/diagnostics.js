const os = require('os');
const fs = require('fs');
const monitor = require('pg-monitor');

monitor.setTheme('matrix');


const $DEV = process.env.NODE_ENV === 'development';


const logfiles = './db/errors.log';


monitor.setLog((msg, info) => {



    if(info.event === 'error') {
        let logText = os.EOL + msg;
        if (info.time) {
            logText = os.EOL + logText;
        }
        fs.appendFileSync(logfiles, logText)
    }


    if ($DEV) {
        info.display = false;
    }
    
});


class Diagnostics {
    // Monitor initialization function;
    static init(options) {
        if ($DEV) {
            // In a DEV environment, we attach to all supported events:
            monitor.attach(options);
        } else {
            // In a PROD environment we should only attach to the type of events
            // that we intend to log. And we are only logging event 'error' here:
            monitor.attach(options, ['error']);
        }
    }
}


module.exports = {Diagnostics}