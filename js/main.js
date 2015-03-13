$(function(){
	var codeInput = $('textarea.userCode');
	var codeOutput = $('#FormattedCode');

	codeInput.on('keyup',function(){
		var code = codeInput.val();
		codeOutput.empty().append('<pre class="language-javascript"><code class="language-javascript">'+code+'</code></pre>');
		Prism.highlightAll();
	});
})