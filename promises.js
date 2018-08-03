const SERVER = "https://api.magicthegathering.io/v1/cards?page="

var getCards = function(station) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: SERVER + station,
      dataType: 'json',
      method: 'GET',
      success: function(result) {
        resolve(result);
        console.log(result)
        //console.log(result)
      },
      error: function(error, err, status) {
        reject(error, err, status);
      }
    });
  });
}
