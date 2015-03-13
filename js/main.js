$(function(){
	var codeInput = $('textarea.userCode');
	var codeOutput = $('#FormattedCode');

	codeInput.on('keyup',function(){
		var code = codeInput.val();
		codeOutput.empty().append('<pre class="language-javascript"><code class="language-javascript">'+code+'</code></pre>');
		Prism.highlightAll();
	});

	$('.copyCode').on('click',function(e){
		e.preventDefault();
        SelectText($('.codeContainer')[0]);
	});

	function SelectText(element) {
	    var text = element;
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
	}
})