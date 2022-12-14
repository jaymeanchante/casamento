// source: https://stackoverflow.com/a/30810322

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
};

function copyEvent(id) {  
  // copy text
  var str = document.getElementById(id);
  var pix = str.innerHTML;
  copyTextToClipboard(pix);
  // update toast
  var toast = document.getElementById('toast-'+id);
  toast.removeAttribute("hidden");
  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  delay(1000).then(() => toast.setAttribute("hidden", true));
};