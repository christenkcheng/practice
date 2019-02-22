function Temperature(file, element) {
  this.file_name = file;
  this.element_id = element;
  this.temp = null;
  this.interval = 5000;
}

function read_text (updater) {
  let xhttp = new XMLHttpRequest ();
  xhttp.onreadystatechange = function() {
    set_value(updater.element_id, this.responseText);
    setTimeout(read_text, updater.interval, updater);
  }
  xhttp.open("GET", updater.file_name, true);
  xhttp.send();
}

function set_value(id, value) {
  document.getElementById(id).innerHTML = value;
}

window.onload = function() {
  let updater = new Temperature("temp.txt", "temp");
  setTimeout(read_text, updater.interval, updater);
};

