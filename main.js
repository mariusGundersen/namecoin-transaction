var conv = require('binstring');
var hash = require('crypto-hashing');
var base58 = require('bs58');

module.exports = {
  newName: function(name, random, address){
        
    name = conv(name, {in: 'binary', out:'hex'});
    address = base58.decode(address).toString('hex').substr(2, 40);
    var hash = hash160(conv(random + name, {in: 'hex', out:'bytes'})).toString('hex');
    
    return [
      '1',
      hash,
      'OP_2DROP',
      'OP_DUP',
      'OP_HASH160',
      address,
      'OP_EQUALVERIFY',
      'OP_CHECKSIG'
    ].join(' ');
  },
  nameFirstUpdate: function(name, random, value, address){
    
    name = conv(name, {in: 'binary', out:'hex'});
    value = conv(value, {in: 'binary', out:'hex'});
    address = base58.decode(address).toString('hex').substr(2, 40);
    
    return [
      '2',
      name,
      random,
      value,
      'OP_2DROP',
      'OP_2DROP',
      'OP_DUP',
      'OP_HASH160',
      address,
      'OP_EQUALVERIFY',
      'OP_CHECKSIG'
    ].join(' ');
  },
  nameUpdate: function(name, value, address){
    name = conv(name, {in: 'binary', out:'hex'});
    value = conv(value, {in: 'binary', out:'hex'});
    address = base58.decode(address).toString('hex').substr(2, 40);
    
    return [
      '3',
      name,
      value,
      'OP_2DROP',
      'OP_DROP',
      'OP_DUP',
      'OP_HASH160',
      address,
      'OP_EQUALVERIFY',
      'OP_CHECKSIG'
    ].join(' ');
  }  
};



function hash160(value){
  return hash.ripemd160(hash.sha256(value));
}
/*

console.log("hashtest");
console.log("1baa8c92fae059f5bcd69566c6c25771fa392133");

console.log(hash160(conv('467e5b41d4bcb8c100642f72616964', {in: 'hex', out:'bytes'})).toString('hex'));*/