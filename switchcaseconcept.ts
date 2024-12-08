let myDay: string = 'Thursday';
switch (myDay.toLowerCase()) {
    case 'thursday':
        console.log(myDay);
        break;
    default:
        break;
}

//use cases
//RBAC (user based on access control) - admin/seller/partner/...
//Multi envs - dev/qa/stage/prod
//Cross browser logic
//Reading multiple JSON/XML/EXCEL files