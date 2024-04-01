const cartIcon=document.querySelector('#cart-icon');
const close=document.querySelector('.close');
const closeBtn=document.querySelector('.close-btn')
const cart=document.querySelectorAll('.cart')
const container=document.querySelector('.container');
const foodbox=document.querySelectorAll('.food-box');
const result=document.querySelector('.result');

const search=document.getElementById('search');
search.addEventListener('keyup',(e)=>{
const value=e.target.value.toLowerCase()
  foodbox.forEach(foo=>{
  const data=foo.dataset.item;
    if(value.includes(data)){
      foo.style.display='block';
    }else
      foo.style.display='none';
  })
})

let items=[];


cartIcon.addEventListener('click',()=>{
 
close.classList.add('active')
})
closeBtn.addEventListener('click',()=>{
 
  close.classList.remove('active')
  })
  let total=0;
cart.forEach((cartnum)=>{

  cartnum.addEventListener('click',()=>{

    const list= cartnum.parentElement.parentElement
    const imgtag=list.querySelector('.img-tag')
    const imgsrc=imgtag.querySelector('img').src;
    const price=list.querySelector('.price').innerHTML;
    const result=document.querySelector('.result');
    const foodname=list.querySelector('.food-name').innerHTML;
  
   

    let p= parseFloat(cartnum.parentElement.querySelector('.price').innerHTML.replace("Rs.",""));
  console.log(p)
    total +=p;
    console.log(total)
    
    if(items.find((el)=>el==foodname)){
      alert('hi');
      return;
     }
     else{
      items.push(foodname)
   
     }
    const createElement=document.createElement('div');
    createElement.className='container1';
    createElement.innerHTML=`<div class="remove"><i class="fa-solid fa-trash"></i></div>
    <div class="img">
    <img src="${imgsrc}" alt="">
  </div>
  
  <div class="food-name">${foodname}
   </div>
  
    <div class="price">${price}</div>
  <div><input type="number" class="quantity"></div>`
    container.appendChild(createElement);

    result.innerHTML=total;
    qty();
    removeItem();
 
    updateTotal();
       
   
  })


  })

  function removeItem(){

    const remove=document.querySelectorAll('.remove');
  remove.forEach(r=>{
   
   r.addEventListener('click',()=>{
    const foo=r.parentElement.querySelector('.food-name').innerHTML;
 
    r.parentElement.remove()

    items=items.filter(item=>item == foo)

   })
    
  })
  }

  function qty(){
const quan=document.querySelectorAll('.quantity');

quan.forEach(q=>{
  q.value=1;
  q.style.width="30px";
  q.addEventListener('change',()=>{



  if(q.value<1){
    q.value =1;
  }
 
  updateTotal()

})

})
  }
  function updateTotal(){
 
    const result=document.querySelector('.result');
    const foodbox=document.querySelectorAll('.food-box');
    const quan=document.querySelectorAll('.quantity');
    foodbox.forEach(food=>{
   food.addEventListener('click',()=>{
    const price= parseFloat(food.querySelector('.price').innerHTML.replace('Rs.',''));

quan.forEach(q=>{
  q.value=1;
  q.addEventListener('change',()=>{
    result.innerHTML=q.value*price
  })


})




   })
    })

  }