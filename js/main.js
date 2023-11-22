var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

function copyTextToClipboard() {
    document.getElementById("textToCopy").select();
    document.execCommand('copy');
    window.alert("Text has been copied to the clipboard.");
    new bootstrap.Tooltip(document.getElementById("textToCopy"), {
        title: "Copied",
        placement: "right"
    }).show();
}
