// console.log('Alert Is here')

// alert("Amu Is Comming");

const maComming = () =>{
    alert('Ammu is Comming. Open The Books');
};

const askPicnic = () =>{
    const res = confirm('Are You Going to Picnic?');
    console.log(res);
    if( res === true){
        alert('Amake Fee Ta B-kash kre de')
    }else{
        alert('DGM!! Doore Giya Mor!!')
    }
};

const askName = () =>{
   const mess = prompt("Give Me Your Email");
   if(mess){
       alert(`${mess} Wel Come User`)
   }else{
       alert("please Enter A Valid Email")
   }
} 