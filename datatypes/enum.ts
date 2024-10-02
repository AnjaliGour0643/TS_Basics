// numeric enum

enum Browser{
    Firefox,
    Safari, 
    Edge = getVersion('chrome') * 5,
    Chrome = getVersion('chrome')
}

console.log(Browser.Edge)
console.log(Browser)

function getVersion(browserName : string) : number{
    if(browserName === 'chrome'){
        return 100
    }
    return -1
}


// String enum
console.log('-------------------')

enum environment{
    DEV = 'dev',
    QA = 'qa',
    STAGE = 'stage',
    PROD = 'prod'
}

console.log(environment.DEV)
console.log(environment['STAGE'])


// Heterogenous enum
console.log('-------------------')

enum Status{
    ACTIVE = 'active',
    DEACTIVE = 1,
    PENDING
}

console.log(Status.ACTIVE)
console.log(Status.DEACTIVE)
console.log(Status.PENDING)