exports.successRes = function(message,data){
    let obj = {
        statusCode: 200,
        error : false,
        message : message,
        data  :data
    };
    return obj;
}

exports.faliureRes = function(message){
    let obj = {
        statusCode: 400,
        error : true,
        message : message,
        data : ''
    };
    return obj;
}