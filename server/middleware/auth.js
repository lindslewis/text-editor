// const express = require('express');
// const { ApolloServer, gql } = require('apollo-server-express');

// no no need the jwt first

const jwt = require('jsonwebtoken');

const secret = "this is the secret, bro";
const expire = '1h';

module.exports = {
    authMidWare: function (req) {
        // am I missing something here???
        let token = req.body.token
    }
}