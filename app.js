function Show_Value() {
    let magac = document.getElementById('magac').value;
    let fasal = document.getElementById('semester').value;
    let id= document.getElementById('id').value;
    let result = `My name is ${magac} i'm on semester ${fasal} and my id is ${id}`;
    document.getElementById('write').innerHTML = result;
  }//end