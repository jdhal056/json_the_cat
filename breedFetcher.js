const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    const dataObj = data[0];

    if (dataObj) {
      callback(null, dataObj.description);
    } else {
      callback(`${breedName} breed was not found.`, null);
    }

    if (error) {
      callback(`Failed to request due to ${error}`,null);
    }

  });
};

module.exports = { fetchBreedDescription };