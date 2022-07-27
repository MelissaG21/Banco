const express = require('express');
const User = require('../models/user');
const path = require('path');

function list(req, res, next){
    User.find().then(objs => res.status(200).json({
        message: res._('Lista de usuarios'),
        obj: objs
    })).catch(ex => res.status(500).json({
        message: res._('No se pudo encontrar la lista de usuarios'),
        obj:ex
    }));
}

function index(req, res, next){
  const id = req.params.idUser;
  User.findOne({"_id":id}).then(obj => res.status(200).json({
    message: `Usuario almacenado con ID ${id}`,
    obj: obj
  })).catch(ex => res.status(500).json({
    message: `No se pudo consultar la información del usuario con ID ${id}`,
    obj: ex
  }));
}

function create(req, res, next){
    const username= req.body.username;
    const email= req.body.email;
    const type = req.body.type;
    const password = req.body.password;

    let user = new User({
      username: username,
      email: email,
      type: type,
      password: password
    });

    user.save().then(obj => res.status(200).json({
        message: 'Usuario creado correctamente',
        obj: obj
      })).catch(ex => res.status(500).json({
        message: 'No se pudo almacenar el usuario.',
        obj: ex
      }));
}

function replace(req, res, next){
  const idUser = req.params.idUser;
  let username= req.body.username;
  let email= req.body.email;
  let type = req.body.type;
  let password = req.body.password;

  let user = new Object({
    _username: username,
    _email: email,
    _type: type,
    _password: password
  });

  User.findOneAndUpdate({"_id":id}, user).then(obj => res.status(200).json({
    message:"Usuario reemplazada correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo remplazar el usuario',
    obj: ex
  }));
}

function edit(req, res, next){
    const idUser = req.params.idUser;
    let username= req.body.username ? req.body.username:"";
    let email= req.body.email ? req.body.email:"";
    let type = req.body.type ? req.body.type:"";
    let password = req.body.password ? req.body.password:"";

  let user = new Object();

  if(username){
    user._username = username;
  }

  if(email){
    user._email = email;
  }

  if(type){
    user._type = type;
  }

  User.findOneAndUpdate({"_id":id}, user).then(obj => res.status(200).json({
    message:"Usuario actualizada correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo actualizar el usuario',
    obj: ex
  }));
}

function destroy(req, res, next){
  const id = req.params.idUser;
  User.remove({"_id":id}).then(obj => res.status(200).json({
    message:"Usuario eliminada correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo eliminar el usuario',
    obj: ex
  }));
}

module.exports = {
    list, index, create, replace, edit, destroy
}
