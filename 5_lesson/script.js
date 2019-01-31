
var myNodeList = document.getElementsByTagName('li'),
	close = document.getElementsByClassName('close'),
	list = document.querySelector('ul'),
  done = document.getElementsByClassName('done')

for (var i = 0; i<myNodeList.length; i++) {
	var span = document.createElement('span'),
		txt = document.createTextNode('\u00D7');


  span.className = 'done'
	span.className = 'close'
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}

for (var i = 0; i<close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = 'none';
	}
}
for (var i = 0; i<done.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = 'done';
  }
}



function newElem() {
	var li = document.createElement('li'),
		inputValue = document.getElementById('input').value,
		t = document.createTextNode(inputValue);
	li.appendChild(t);

	if (inputValue === "") {
		alert('Ошибка')
	} else {
		document.getElementById('ul').appendChild(li);
	}

	document.getElementById('input').value = "";

	var span = document.createElement('span'),
		txt = document.createTextNode('\u00D7');

  span.className = 'done'
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);

	for (var i = 0; i<close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = 'none';
		}
	}
  for (var i = 0; i<done.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = 'done';
    }
  }

}
