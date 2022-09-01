/*const user={
  name:'Francisco',
  idade:23,
  address:{
    street:'Rua dos Cães',
    number:37
  }
}

function mostraIdade({name,idade}){
  return name +''+ idade;
}
const {name,idade,...reste}=user

const array=[1,2,4,5,6,6,7]
const [first,second,...rest]=array
*//*
const name='Francisco'
const idade=23;

const user={
  name,
  idade,
  address:{
    street:'djgdkgl'
  }
}

const key='name'

*/
const array=[1,2,3,4,5];

array.map((item)=>{
  if(item %2===0){
    return item*2
  }
  document.body.innerText+=item*2  
})