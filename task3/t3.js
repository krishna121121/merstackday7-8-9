function divide() {
    try {
      let val1 = document.getElementById("inp1").value;
      let val2= document.getElementById("inp2").value;
      let exp=val1+"/"+val2;
      document.getElementById("ans").innerText = eval(exp);
    } catch (error) {
      alert("Invalid expression");
    }
  }

  
function multiply() {
  try {
    let val1 = document.getElementById("inp1").value;
    let val2= document.getElementById("inp2").value;
    let exp=val1+"*"+val2;
    document.getElementById("ans").innerText = eval(exp);
  } catch (error) {
    alert("Invalid expression");
  }
}
  