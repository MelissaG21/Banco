const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _idUser: mongoose.Types.ObjectId,
  _username: String,
  _email: String,
  _type: String,
  _password: String
});

class User{

  constructor(idUser,username, email, type, password){
    this._idUser = idUser;
    this._username = username;
    this._email = email;
    this._type = type;
    this._password = password;

  }

  get idUser(){
    return this._idUser;
  }

  set idUser(v){
    this._idUser = v;
  }

  get username(){
    return this._username;
  }

  set username(v){
    this._username = v;
  }

  get email(){
    return this._email;
  }

  set email(v){
    this._email = v;
  }

  get type(){
    return this._type;
  }

  set type(v){
    this._type = v;
  }

  get password(){
    return this._password;
  }

  set password(v){
    this._password = v;
  }
}

schema.loadClass(User);
module.exports = mongoose.model('User', schema);
