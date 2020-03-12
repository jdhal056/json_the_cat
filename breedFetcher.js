const request = require('request');
const args = process.argv.slice(2).toString();

const breedFetcher = function(args) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + args, (error, response, body) => {
    const data = JSON.parse(body);
    const dataObj = data[0];

    if (dataObj) {
      console.log('Description:', dataObj.description);
    } else {
      console.log(`${args} breed was not found.`);
    }

    if (error) {
      console.log(`Request failed due to ${error}`);
    }

  });
};

breedFetcher(args);