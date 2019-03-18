var todo_object = require('./Pages/todo_object');
var todoObjectData = require('./data/todo_object_data');

describe('angularjs homepage todo list', function() {

    it('should add a todo', async function(){
        await todo_object.get();

        await todo_object.createToDoItem(todoObjectData.text);

        expect(await todo_object.getToDoItemsQuantity()).toEqual(3);
        expect(await todo_object.getSecondItem()).toEqual(todoObjectData.text);
    });

    it('should cross an item off the list', async function(){
        await todo_object.crossSecondItemOff();
        expect(await todo_object.getCompletedAmount()).toEqual(2);
    });
});