// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    if (typeof(book) === 'undefined'){
        book = {};
    }
    commandName = command.split(' ');
    function add(name,telephone){
        telephones = telephone.split(',');
        if (book.hasOwnProperty(name))
            book[name] = book[name].concat(telephones);
        else{
            book[name] = [].concat(telephones);
        }
    }
    function SHOW(){
        output  = [];
        PropertyName = Object.keys(book);
        for (i = 0; i < PropertyName.length; i++ ) {
            if (book[PropertyName[i]].length !== 0){
                output[i] = PropertyName[i] + '\: ' + book[PropertyName[i]].join(', ');
            }
        }
        return output.sort(); 
    }
    function REMOVE_PHONE(nomer){
        PropertyName = Object.keys(book);
        for (j = 0; j < PropertyName.length; j++ ) {
            if (book[PropertyName[j]].indexOf(nomer) !== -1){
                book[PropertyName[j]].splice(book[PropertyName[j]].indexOf(nomer),1);
                return true;
            }
        }
    }
    
     switch(commandName[0]){
        case 'ADD':
            return add(commandName[1],commandName[2])
        case 'SHOW':
            return  SHOW()
        case 'REMOVE_PHONE':
            return  REMOVE_PHONE(commandName[1])
    }


};
