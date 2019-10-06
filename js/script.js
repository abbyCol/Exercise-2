var btn = document.getElementsByClassName("click-to-open");

for (var i = 0; i < btn.length; i++) {
    var thisBtn = btn[i];
    thisBtn.addEventListener("click", function() {
        var modal = document.getElementById(this.dataset.modal);
        modal.style.display = "block";
    }, false);