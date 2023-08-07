export const environment = {
    version : "V1 development",
    production: false,
    api:"http://localhost/app/bsf/",
    serialNumber : "WEB2023",
    cam : false,
    tokenName : 'bsfJwtToken01',
    appSelect : [
        {
            code:'api-bsf/',
            label:'BSF',  
        },
        {
            code:'api-suf/',
            label:'SUF', 
        },
        {
            code:'api-dev/',
            label:'Development', 
        }
    ]
};
