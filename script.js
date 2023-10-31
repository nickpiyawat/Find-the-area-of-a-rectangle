let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const long = parseFloat(document.getElementById('long').value);
    const wide = parseFloat(document.getElementById('wide').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(long === '' || isNaN(long) || (long <= 0)){
        document.getElementById('long_error').innerHTML = 'กรุณากรอกตัวเลขให้ถูกต้อง';
    }else{
        document.getElementById('long_error').innerHTML = '';
        long_status=true;
    }

    if(wide === '' || isNaN(wide) || (wide <= 0)){
        document.getElementById('wide_error').innerHTML = 'กรุณากรอกตัวเลขให้ถูกต้อง';
    }else{
        document.getElementById('wide_error').innerHTML = '';
        wide_status=true;
    }

    if(long_status && wide_status){
        const area = (long*wide).toFixed(2);
        result.innerHTML = 'พื้นที่สี่เหลี่ยมจัตุรัสคือ : ' + area;
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});