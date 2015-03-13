$(function(){
	var codeInput = $('textarea.userCode');
	var codeOutput = $('#FormattedCode');

	codeInput.on('keyup',function(){
		var code = codeInput.val();
		codeOutput.find('code').empty().append(code);
		Prism.highlightAll();
	});

	$('.copyCode').on('click',function(e){
		e.preventDefault();
        SelectText($('.codeContainer')[0]);
	});

	$('.selectLanguage').on('change',function(){
		selectedLang = $(this).val();
		$('pre,code').attr('class','language-'+selectedLang);
		Prism.highlightAll();
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