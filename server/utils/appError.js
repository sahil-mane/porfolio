const createError = (message, statuscode) => {
    const error = new Error(message);
    
    error.statuscode = statuscode;
    error.status = `${statuscode}`.startsWith('4') ? 'fail' : 'error';
    
    // Capture the stack trace
    if (Error.captureStackTrace) {
        Error.captureStackTrace(error, createError);
    } else {
        error.stack = (new Error()).stack;
    }
    
    return error;
};

module.exports = createError;