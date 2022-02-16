function getInputValue(id){
    return document.getElementById(id).value;
}
function setResult(id,value,system){
    document.getElementById(id).textContent=`${value} ${system}`;
}

function getSelectedListOptionValue(id){
    return document.getElementById(id).selectedOptions[0].value;
}
//square code

//Square perimeter
function calculateSquarePerimeter(){
    const perimeter = 4*getInputValue('square');
    const measure=getSelectedListOptionValue('measureS');
    setResult('responseSquarePerimeter',perimeter,measure);  
}
//Square area
function calculateSquareArea(){
    const area= getInputValue('square')**2;
    const measure=getSelectedListOptionValue('measureS');
    setResult('responseSquareArea',area,`${measure}^2`);
}


//triangle code

//triangle perimeter
function calculateTrianglePerimeter(){
    const side1=getInputValue('triangleSide1');
    const side2=getInputValue('triangleSide2');
    const base = getInputValue('triangleBase');
    const perimeter=side1+side2+base;
    const measure=getSelectedListOptionValue('measureT');
    setResult('responseTrianglePerimeter',perimeter,measure);
};

//Triangle area
function calculateTriangleArea(){
    const base=getInputValue('triangleBase');
    const height=getInputValue('triangleHeight');
    const area = base*height/2;
    const measure=getSelectedListOptionValue('measureT');
    setResult('responseTriangleArea',area,`${measure}^2`);
}

//Circle code

const PI= Math.PI;
//circle perimeter
function calculateCirclePerimeter(){
    const radius=getInputValue('radiusCircle');
    const perimeter=2*PI*radius;
    const measure=getSelectedListOptionValue('measureC');
    setResult('responseCirclePerimeter',perimeter,measure);
}

//circle area
function calculateCircleArea(){
    const radius=getInputValue('radiusCircle');
    const area= PI*radius**2;
    const measure=getSelectedListOptionValue('measureC');
    setResult('responseCircleArea',area,`${measure}^2`);
}



/*Isoc triangle */
function isocValidation(l1,l2,l3){
    if(l1==l2 || l1==l3 || l2==l3){
        return true;
    }else{
        return false;
    }   
}
function calculateHeight(l1,l2){
    return Math.sqrt(l1**2-(l2**2/4));
}
function calculatePerimeterIsoc(l1,l2){
    return l1*2+l2;
}

function calculateIsocArea(l1,l2){
    return  l2*calculateHeight(l1,l2)/2;
}

if(isocValidation(8,8,11)){
    console.log(calculatePerimeterIsoc(8,11));
    console.log(calculateIsocArea(8,11));
}else{
    console.error('Incorrect data for isoc triangle');
}
if(isocValidation(15,12,15)){
    console.log(calculatePerimeterIsoc(15,12));
    console.log(calculateIsocArea(15,12));
}else{
    console.error('Incorrect data for isoc triangle');
}
if(isocValidation(22,23,34)){
    console.log(calculatePerimeterIsoc(undefined,undefined));//no se puede, porque no es isoceles .-.
    console.log(calculateIsocArea(undefined,undefined));
}else{
    console.error('Incorrect data for isoc triangle');
}

   

