const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _idBank_Transaction: mongoose.Types.ObjectId,
  _idUser:String,
  _name: String,
  _category: String,
  _amount: Number
});

class Bank_Transaction{

  constructor(idBank_Transaction, idUser, name, category, amount){
    this._idBank_Transaction = idBank_Transaction;
    this._idUser= idUser;
    this._name = name;
    this._category = category;
    this._amount = amount;

  }

  get idBank_Transaction(){
    return this._idBank_Transaction;
  }

  set idBank_Transaction(v){
    this._idBank_Transaction = v;
  }

  get idUser(){
    return this._idUser;
  }

  set idUser(v){
    this._idUser = v;
  }

  get name(){
    return this._name;
  }

  set name(v){
    this._name = v;
  }

  get category(){
    return this._category;
  }

  set category(v){
    this._category = v;
  }

  get amount(){
    return this._amount;
  }

  set amount(v){
    this._amount = v;
  }

}

schema.loadClass(Bank_Transaction);
module.exports = mongoose.model('Bank_Transaction', schema);
