declare var api: string;
declare var appSelect: any;
 
export const environment = {
    version: require('../../package.json').version + '-dev',
    production: false,

    api: api,
    serialNumber: false,
    cam: true,
    tokenName: 'bsfJwtToken01',
    appSelect: appSelect,
    hour : +7,


    // api:"https://api-bee.a-morphosys.cloud/",
    // api:"http://localhost/app/bsf-crm/public/",

    // serialNumber : false,
    // cam : true,
    // tokenName : 'beeJwtToken2',
    // appSelect : [ 
    //     {
    //         code:'',
    //         label:'Development', 
    //     }
    // ]


    // api:"http://systemapk.bsfar.com:41021/",
    // serialNumber : false,
    // cam : true,
    // tokenName : 'bsfJwtToken01',
    // appSelect : [
    //     {
    //         code:'api-bsf/v1/',
    //         label:'BSF',  
    //     },
    //     {
    //         code:'api-suf/v1/',
    //         label:'SUF', 
    //     },
    //     {
    //         code:'api-dev/v1/',
    //         label:'Development', 
    //     }
    // ]


};
