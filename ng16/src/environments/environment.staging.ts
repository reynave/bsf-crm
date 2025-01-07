declare var api: string;
declare var appSelect: any;

export const environment = {
    version: require('../../package.json').version+ '-prod',
    production: false,  
    api: api,
    serialNumber: false,
    cam: true,
    tokenName: 'bsfJwtToken01',
    appSelect: appSelect ,
    hour : -1,
};
