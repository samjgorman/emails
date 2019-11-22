var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

//GET https://api.hunter.io/v2/domain-search?domain=intercom.io&api_key=306e4d3ee6a0be453f6582042fbbcabab996a820
//https://api.hunter.io/v2/domain-search?domain=peerlift.org&api_key=306e4d3ee6a0be453f6582042fbbcabab996a820


let domain;
router.post('/', (req, res, next) => {
    domain = req.body.domain;
    console.log("domain is at POST "+domain)
    //check whether this is a valid URL
    res.end();

  });

/* GET users listing. */
router.get('/', (req, res) => {
    //build api URL with user zip
    const baseUrl = 'https://api.hunter.io/v2/domain-search?domain=';
    //ENTER YOUR API KEY HERE (make sure to no include < >)
    const apiId = '&api_key=de53bd4e47e4049840daf927bcfe43dec6a7c3be';
   //  let domain = 'peerlift.org';

    const userLocation = (url1, url2, domain) => {
       let newUrl = url1 + domain + url2;
       return newUrl;
    };	
     
    const apiUrl = userLocation(baseUrl, apiId, domain);
    console.log("the domain in GET is "+domain);

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
       res.send({ data });
       console.log(data);
    })
    .catch(err => {
       res.redirect('/error');
       console.log(err);
    });
 })

module.exports = router;
