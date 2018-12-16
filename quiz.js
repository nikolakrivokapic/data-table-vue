// Assuming you have already done "npm install fernet"
const fernet = require('fernet');
const secret = new fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=');
// Oh no! The code is going over the edge! What are you going to do?
const message = `gAAAAABcFXX6stnWylkawby4yUTfjd6ztVQvm--bMJR8fMosu_4F2fhcqujwvdwzR7zFtPXEOCaVIr9i8MnFJkUzM8XR53
               LwaHMexn1MZzJlSZlp8gU8niSPaCcgrkj9xNMzOqZsJkT2KfVq4SxWSMloER6O6YqXjzdJyhFfxXvN6AOzltwIJ_mpGVNY
               CFQJaPzr-d08etUs`;
const url = new fernet.Token({secret, token: message, ttl:0});
console.log(url.decode());
