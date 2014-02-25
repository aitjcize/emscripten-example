var ConsoleLib = {
  console_log: function(str) {
    var el = document.getElementById("console");
    el.innerHTML += Pointer_stringify(str);
  }
};

mergeInto(LibraryManager.library, ConsoleLib);
