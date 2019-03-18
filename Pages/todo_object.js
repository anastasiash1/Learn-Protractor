var todo_object = function() {
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    var completedAmount = element.all(by.css('.done-true'));
    var todoListItem = element(by.model('todoList.todoText'));
    var add = element(by.css('[value="add"]'));

    this.get = async function() {
        await browser.get('https://angularjs.org');
};
    this.createToDoItem = async function(text) {
        await todoListItem.sendKeys(text);
        await add.click();
    };

    this.getToDoItemsQuantity = async function() {
        return await todoList.count();
    };

    this.getSecondItem = async function() {
        return await todoList.get(2).getText();
    };

    this.crossSecondItemOff = async function() {
        await todoList.get(2).element(by.css('input')).click();
    };

    this.getCompletedAmount = async function() {
        return await completedAmount.count();
    }
};
module.exports = new todo_object();