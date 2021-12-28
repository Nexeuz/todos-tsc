"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.TodoList = void 0;
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [
            {
                status: 'pending',
                description: 'Bananas'
            },
            {
                status: 'pending',
                description: 'Tomatoes'
            },
            {
                status: 'pending',
                description: 'Pinapple'
            }
        ];
    }
    TodoList.prototype.addNewTodo = function (description) {
        this.todos.push({ description: description, status: 'pending' });
    };
    TodoList.prototype.updateStatusTodo = function (status, index) {
        this.todos[index] = __assign(__assign({}, this.todos[index]), { status: status });
    };
    TodoList.prototype.deleteTodo = function (index) {
        this.todos.splice(index, 1);
    };
    return TodoList;
}());
exports.TodoList = TodoList;
var todoList = new TodoList();
console.log('------------ADD PASSIONFRUIT TODOS-------------------');
todoList.addNewTodo('Passionfruit');
console.log(todoList.todos);
console.log('-------------UPDATE TOMATOES TODOS-------------------');
todoList.updateStatusTodo('completed', 1);
console.log(todoList.todos);
console.log('-------------DELETE PINAPPLE TODOS-------------------');
todoList.deleteTodo(2);
console.log(todoList.todos);
console.log('-------------END TODO LIST---------------------------');
