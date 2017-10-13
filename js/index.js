
function download (filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function getFileName () {
  return Date.now().toString().slice(4,10) + '_' + document.title.replace(/\s/g, "_") + '.js'
}


var initCode = `function foo(items) {
  var x = "All this is syntax highlighted";
  return x;
}`

var editor = ace.edit("codeEditor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
editor.setValue(initCode);


$('#commitCode').on('click', function () {
	let message = 'Are you sure to commit the code?'
	if (confirm(message)) {
		download(getFileName(), editor.getValue())
	}
})

// QUnit.test( "a basic test example", function( assert ) {
//   var value = "hello";
//   assert.equal( value, "hello", "We expect value to be hello" );
// });
