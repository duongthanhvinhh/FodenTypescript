let userId: (string | number);
userId = 1001;
userId = "Ryan";

function getCustomerDetails(customerId: (string | number)){
    if(typeof(customerId) === 'number'){
        return customerId + '_foden';
    } else if(typeof(customerId) === 'string'){
        return customerId;
    }
}
console.log(getCustomerDetails(userId));