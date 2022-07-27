const express = require('express');
const Bank_Transaction = require('../models/bank_transaction');
const path = require('path');

function list(req, res, next){
    Bank_Transaction.find().then(objs => res.status(200).json({
        message: res._('Lista de transacciones'),
        obj: objs
    })).catch(ex => res.status(500).json({
        message: res._('No se pudo encontrar la lista de transacciones'),
        obj:ex
    }));
}

function index(req, res, next){
  const id = req.params.idBank_Transaction;
  Unidad.findOne({"_id":id}).then(obj => res.status(200).json({
    message: `Transaccion almacenado con ID ${id}`,
    obj: obj
  })).catch(ex => res.status(500).json({
    message: `No se pudo consultar la información de la transaccion con ID ${id}`,
    obj: ex
  }));
}

function create(req, res, next){
    const name= req.body.name;
    const category= req.body.category;
    const amount = req.body.amount;

    let bank_transaction = new Bank_Transaction({
      name: name,
      category: category,
      amount: amount
    });

    bank_transaction.save().then(obj => res.status(200).json({
        message: 'Transaccion creada correctamente',
        obj: obj
      })).catch(ex => res.status(500).json({
        message: 'No se pudo almacenar la transaccion.',
        obj: ex
      }));
}

function destroy(req, res, next){
  const id = req.params.idBank_Transaction;
  Transaccion.remove({"_id":id}).then(obj => res.status(200).json({
    message:"Transaccion eliminada correctamente",
    obj:obj
  })).catch(ex => res.status(500).json({
    message: 'No se pudo eliminar la transaccion',
    obj: ex
  }));
}

module.exports = {
    list, index, create, destroy
}
