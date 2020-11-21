function shuffleSort(type) {
    var container = document.getElementById("container");
    var allColumns = container.getElementsByClassName('column');
    var elementsArray = Array.prototype.slice.call(allColumns);
    elementsArray.forEach(function (element) {
        container.removeChild(element);
    })
    if (type === true) {
        shuffle(elementsArray);
    } else {
        sort(elementsArray);
    }
    elementsArray.forEach(function (element) {
        container.appendChild(element);
    })
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function sort(array) {
    for (var i = 0; i < array.length; i++) {
        var temp = array[i];
        for (var j = 0; j < array.length; j++) {
            if (parseInt(array[j].innerText) === i + 1) {
                array[i] = array[j];
                array[j] = temp;
                break;
            }
        }
    }
    
}