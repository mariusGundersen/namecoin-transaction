# namecoin-transaction

Create the three standard [namecoin transactions](https://wiki.namecoin.info/index.php?title=Client_API#Identifier_Registration). 

## Installation

```
npm install --save namecoin-transaction
```

## Usage

### `newName(name, random, address)`

Preorder a `name` and transfer the ownership to `address`. For example:

```js
namecoinTransaction.newName('d/raid', '467e5b41d4bcb8c100', 'N2c1SDkTsPUiWsrtTxFUG32umhmKp3kdpo')
//1 1baa8c92fae059f5bcd69566c6c25771fa392133 OP_2DROP OP_DUP OP_HASH160 422040870cb08ff6afe48220042bf0b370274f75 OP_EQUALVERIFY OP_CHECKSIG
```

### `nameFirstUpdate(name, random, value, address)`

Register the `name` and associate `value` with it. This must be done 12 blocks after `newName`. Use the same `name` and `random` values here as in `newName`. The ownership of the name is transferred to `address`. For example:

```js
namecoinTransaction.nameFirstUpdate('d/raid', '467e5b41d4bcb8c100', JSON.stringify({"ip":"212.232.51.96","email":"namecoin@mail.com","map":{"":"212.232.51.96","www":"212.232.51.96"}}), 'NDkrT5eEmMgfmZVxST6zqCQv62on4LNwYK')
//2 642f72616964 467e5b41d4bcb8c100 7b226970223a223231322e3233322e35312e3936222c22656d61696c223a226e616d65636f696e406d61696c2e636f6d222c226d6170223a7b22223a223231322e3233322e35312e3936222c22777777223a223231322e3233322e35312e3936227d7d OP_2DROP OP_2DROP OP_DUP OP_HASH160 bc75e0ff697fa018ab75ab93ddaa6b8cbe3d8277 OP_EQUALVERIFY OP_CHECKSIG
```

### `nameUpdate(name, value, address)`

Update the `value` associated with a `name`. The ownership of the name is transferred to `address`. For example:

```js
namecoinTransaction.nameUpdate('d/raid', JSON.stringify({"ip":"212.232.51.96","map":{"*":"212.232.51.96"},"email":"namecoin@mail.com"}), 'N7ykABB1KLSScMyinV7ZSapygpVKLMwTzL')
//3 642f72616964 7b226970223a223231322e3233322e35312e3936222c226d6170223a7b222a223a223231322e3233322e35312e3936227d2c22656d61696c223a226e616d65636f696e406d61696c2e636f6d227d OP_2DROP OP_DROP OP_DUP OP_HASH160 7d1547a461df0e192b1ee884ae510f0a0bf685d3 OP_EQUALVERIFY OP_CHECKSIG'
```

