'use strict';

const todoModel = (sequelize, DataTypes) => sequelize.define('Todo', {
  todoId: { type: DataTypes.STRING, required: true },
  assignee: { type: DataTypes.STRING, required: true },
  complete: { type: DataTypes.BOOLEAN, required: true },
  text: { type: DataTypes.STRING, required: true },
});

module.exports = todoModel;