let abc123 : string[] = ["1", "2","3","4", "5","6","7", "8","9","0", "a","b","c", "d","e","f", "g","h","i", "j","k","l", "m","n","o", "p","q","r", "s","t","u", "v","w","x", "y","z", "?","*","&", "-","+","/", ".","@","<", ">",",","{", "}","[","]", "đ","Đ","ł", "Ł","$","ß", "¤","|","€", "÷","ˇ","~", "^","˘","°", "`","˙","˙", "˝","¨","'", "!","%","/", "=","(",")"]
let symbolsException : string[] = ["$$", "==", "__", "--", "++", ",,", "<<", ">>", "..", "''"];
document.addEventListener('DOMContentLoaded', () => {
    console.log("Elindult");
    document.getElementById('username')!.addEventListener('click', () =>{
      alert('Ez a nevHibauzenet');
      console.log('Ez a nevHibauzenet');
    })
    document.getElementById('username')!.addEventListener('input', (e) => {
        let elem = e.currentTarget as HTMLInputElement;
        document.body.style.backgroundColor = elem.value;
        alert('Ez a nevHibauzenet');
        
        
        console.log(elem.value);
        
        let isValidUsername : Boolean = true;
        if(elem.value.toString().startsWith(".")){
          isValidUsername = false
        }
        for(let i = 0; i < elem.value.toString().length-1; i++){
          if(!abc123.includes(elem.value.toString()[i] + elem.value.toString()[i+1])){
            isValidUsername = false;
            document.getElementById('nevHibauzenet')?.textContent == "Nem megfelelő felhasználónevet adott meg";
          }
        }
        for(let i = 0; i < elem.value.toString().length; i++){
          if(!abc123.includes(elem.value.toString()[i])){
            isValidUsername = false;
            document.getElementById('nevHibauzenet')?.textContent == "Nem megfelelő felhasználónevet adott meg";
          }
        }
        if(elem.value.toString()[1]){

        }
        elem.pattern.includes('[a-zA-Z\-0-9]')
        
    })
    const validateEmail = (email : string) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
});
