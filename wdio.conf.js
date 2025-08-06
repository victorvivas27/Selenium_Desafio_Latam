
export const config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },


    // onPrepare: function (config, capabilities) {
    // },

    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },

    // beforeSession: function (config, capabilities, specs, cid) {
    // },

    // before: function (capabilities, specs) {
    // },

    // beforeCommand: function (commandName, args) {
    // },

    // beforeSuite: function (suite) {
    // },

    // beforeTest: function (test, context) {
    // },

    // beforeHook: function (test, context, hookName) {
    // },

    // afterHook: function (test, context, { error, result, duration, passed, retries }, hookName) {
    // },

    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    // },



    // afterSuite: function (suite) {
    // },

    // afterCommand: function (commandName, args, result, error) {
    // },

    // after: function (result, capabilities, specs) {
    // },

    // afterSession: function (config, capabilities, specs) {
    // },

    // onComplete: function(exitCode, config, capabilities, results) {
    // },

    // afterAssertion: function(params) {
    // }
}   