'use strict';
var util = require('util');

module.exports = {
    login: login
};

function login(req, res) {
    const validResponse = {
        userId: '007',
        userName: 'James Bond',
        userCode: '999',
        phoneNumber: '07555 5555 555',
        phoneNumber2: '',
        phoneNumber3: '',
        phoneNumber4: '',
        phoneNumber5: '',
        email: "gb@me.com",
        defaultLanguage: "en-GB",
        address: 'Penryn Close',
        city: 'Nuneaton',
        zipCode: 'CV11 6FF',
        country: "UK",
        streetNumber: '18'
    }
    // var name = req.swagger.params.name.value || 'stranger';
    const userId = req.swagger.params.login.originalValue.loginId;
    if (userId === '007') {
        res.json(validResponse);        
    }
    console.log(res)
    res.status(404).json({code: ''})
}