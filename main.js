const {app} = require('./lib/src/server');
const {configure} = require('./lib/src/common/config');

async function main(){
    app.listen(configure.PORT, () => {
        console.log(`App is running at http://localhost:${configure.PORT}`)
    });
    console.log("  Press CTRL-C to stop\n");
}

main();