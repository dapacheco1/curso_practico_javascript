const coupons=[
    {
        code:'15A789RTY',
        percentage:15,
    },
    {
        code:'20B8ASD45',
        percentage:20,
    },
    {
        code:'50DER5952',
        percentage:50,
    }
];
function calcularPrecioConDescuento(precio,descuento){
    return (precio*(100-descuento))/100;
}
function validateCoupon(coupon){
    const result=coupons.find(item=>item.code===coupon);
    if(result==undefined){
        return 0;
    }else{
        return result.percentage;
    }
    }
    

function onClickButtonPriceDiscount(){
    const modal=document.getElementsByClassName('modal')[0];
    modal.style='visibility:visible';
    const cont=setTimeout(()=>{
        const price=document.getElementById('InputPrice').value;
        const discount=document.getElementById('InputDiscount').value;
        const coupon=document.getElementById('InputCoupon');
        const result=document.getElementById('OutputDiscount');
        const error=document.getElementById('couponError');
        const perCoupon=validateCoupon(coupon.value);
        if(perCoupon!=0){
            const subresult=calcularPrecioConDescuento(price,discount);
            error.textContent='';
            coupon.style="none"
            result.value='$'+calcularPrecioConDescuento(subresult,perCoupon);
        }else{
            coupon.style="background-color:var(--bg-error);"
            
            error.style="color:red;"
            error.textContent='El código de cupón ingresado no es valido,ha caducado o no ha sido ingresado';
            result.value='$'+calcularPrecioConDescuento(price,discount);
        }
        
        
        
        modal.style='visibility:hidden';
        clearInterval(cont);
    },1500);
    
}