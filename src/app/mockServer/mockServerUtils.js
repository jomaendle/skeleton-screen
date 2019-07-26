function generateUUID() {
  let d = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
  });
}

function sendDelayed(res, dataToSend, delay = 600) {
  setTimeout(function () {
    res.send(dataToSend);
  }, delay);
}

function sendNotFoundError(res, message, delay = 100) {
  const errorObject = {
    'error': {
      '@self_type': 'urn:x-hp:2009:software:data_model:opr:type:error',
      '@version': '1.0',
      '@http_code': 404,
      'message_id': 'opr.not_found.error',
      'message': message,
      'exception': 'com.hp.opr.NotFoundException'

    }
  };
  sendDelayed(res.status(404), errorObject, delay);
}

function sendVersionConflictError(res, message, delay = 100) {
  const errorObject = {
    'error': {
      '@self_type': 'urn:x-hp:2009:software:data_model:opr:type:error',
      '@version': '1.0',
      '@http_code': 409,
      'message_id': 'opr.newerversion.error',
      'message': message,
      'exception': 'com.hp.opr.NewerVersionException'
    }
  };
  sendDelayed(res.status(409), errorObject, delay);
}

module.exports.sendDeleyed = sendDelayed;
module.exports.sendVersionConflictError = sendVersionConflictError;
module.exports.sendNotFoundError = sendNotFoundError;
module.exports.generateUUID = generateUUID;
