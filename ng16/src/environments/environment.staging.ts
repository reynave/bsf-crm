export const environment = {
    version : "V1.231105.1 Staging",
    production: false, 
    api:"http://systemapk.bsfar.com:41021/",
    serialNumber : false,
    cam : false,
    tokenName : 'bsfJwtToken01',
    appSelect : [
        {
            code:'api-bsf/v1/',
            label:'BSF',  
        },
        {
            code:'api-suf/v1/',
            label:'SUF', 
        },
        {
            code:'api-dev/v1/',
            label:'Development', 
        }
    ]
};
