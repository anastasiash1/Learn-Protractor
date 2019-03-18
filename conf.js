exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo_spec.js'],
    capabilities: {
        browserName: 'chrome'
    }
    //Uncomment for running in both browsers
    // multiCapabilities: [{
    //     browserName: 'firefox'
    // }, {
    //     browserName: 'chrome'
    // }]
};

