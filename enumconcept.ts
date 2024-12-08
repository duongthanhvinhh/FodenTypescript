enum Browser{
    Chrome = getBrowserVersion('chrome'),
    Firefox = getBrowserVersion('firefox'),
    Edge = getBrowserVersion('edge'),
    Safari = getBrowserVersion('safari')
}
console.log(Browser);
console.log(Browser.Edge);

function getBrowserVersion(browserName: string): number{
    if(browserName === 'chrome'){
        return 122;
    }
    return 121;
}

console.log(getBrowserVersion('chrome'));


//string enum
enum environment{
    DEV = 'dev',
    STAGE  = 'stage',
    PROD = 'prod'
}
console.log(environment.DEV);
console.log(environment['DEV']);


//heterogenous enum
enum Status{
    ACTIVE = 'active',
    DEACTIVE = -1,
    PEDNING = 0
}
