(function () {
  function download (filename, text) {
    var element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    element.setAttribute('download', filename)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  function getFileName () {
    return Date.now().toString().slice(4,10) + '_' + document.title.replace(/\s/g, "_") + '.js'
  }

  function runEditorCode () {
    $('#editorCode').remove()
    $('body').append($('<script id="editorCode"><script').append(editor.getValue()))
  }

  function resetQUnitBanner () {
    // reset qunit-banner's color
    if ($('#qunit-tests b.counts').last().children('.failed').length) {
      var bannerClassName = "qunit-fail"
      var documentTitle = document.title.replace(/^\u2714/i, "\u2716")
    } else {
      var bannerClassName = "qunit-pass"
      var documentTitle = document.title.replace(/^\u2716/i, "\u2714")
    }
    $('#qunit-banner').attr('class', bannerClassName)
    document.title = documentTitle
  }


  $('#commitCode').click(function () {
    let message = '確認下載編輯區的程式碼?'
    if (confirm(message)) {
      download(getFileName(), editor.getValue())
    }
  })

  $('#startQunit').click(function () {
    runEditorCode()
    testCaseUnit()
    resetQUnitBanner()
  })


  // init Ace editor  
  window.editor = ace.edit("codeEditor")
  editor.setTheme("ace/theme/monokai")
  editor.getSession().setMode("ace/mode/javascript")
  editor.setOption("showPrintMargin", false)
  editor.setValue(testCaseInitCode, -1);

  // init code instruction
  $('#instruction').text(testCaseInstruction);

  // 詢問是否要離開頁面
  window.addEventListener('beforeunload', function (e) {
    let confirmationMessage = '編輯區的程式碼無法存擋，是否確定要離開？';
    e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
    return confirmationMessage; // Gecko, WebKit, Chrome <34
  });

})()

