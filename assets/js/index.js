let banderaM = 0;
let banderaM2 = 0;
let terrestre = 0;
let terrestre2 = 0;
let aereo = 0;
$('#maritimo').click(function () {
    if (banderaM === 0) {
        document.getElementById('txtMaritimo').style.display = 'block';
        document.getElementById('maritimo').innerHTML = 'Ocultar';
        document.getElementById('cardMaritimo').style.height = 'auto';
        banderaM = 1;
    } else {
        document.getElementById('txtMaritimo').style.display = 'none';
        document.getElementById('maritimo').innerHTML = 'Ver mas';
        document.getElementById('cardMaritimo').style.height = '200px';
        banderaM = 0;
    }

})

$('#terrestre').click(function () {
    if (terrestre === 0) {
        document.getElementById('txtTerrestre').style.display = 'block';
        document.getElementById('terrestre').innerHTML = 'Ocultar';
        document.getElementById('cardTerrestre').style.height = 'auto';
        terrestre = 1;
    } else {
        document.getElementById('txtTerrestre').style.display = 'none';
        document.getElementById('terrestre').innerHTML = 'Ver mas';
        document.getElementById('cardTerrestre').style.height = '200px';
        terrestre = 0;
    }
})

$('#aereo').click(function () {
    if (aereo === 0) {
        document.getElementById('txtAereo').style.display = 'block';
        document.getElementById('cardAereo').style.height = 'auto';
        document.getElementById('aereo').innerHTML = 'Ocultar';
        aereo = 1;
    } else {
        document.getElementById('txtAereo').style.display = 'none';
        document.getElementById('cardAereo').style.height = 'auto';
        document.getElementById('aereo').innerHTML = 'Ver mas';
        aereo = 0;
    }

})

$('#maritimo2').click(function () {
    if (banderaM2 === 0) {
        document.getElementById('txtMaritimo2').style.display = 'block';
        document.getElementById('maritimo2').innerHTML = 'Ocultar';
        document.getElementById('cardMaritimo2').style.height = 'auto';
        banderaM2 = 1;
    } else {
        document.getElementById('txtMaritimo2').style.display = 'none';
        document.getElementById('maritimo2').innerHTML = 'Ver mas';
        document.getElementById('cardMaritimo2').style.height = '200px';
        banderaM2 = 0;
    }

})

$('#terrestre2').click(function () {
    if (terrestre2 === 0) {
        document.getElementById('txtTerrestre2').style.display = 'block';
        document.getElementById('terrestre2').innerHTML = 'Ocultar';
        document.getElementById('cardTerrestre2').style.height = 'auto';
        terrestre2 = 1;
    } else {
        document.getElementById('txtTerrestre2').style.display = 'none';
        document.getElementById('terrestre2').innerHTML = 'Ver mas';
        document.getElementById('cardTerrestre2').style.height = '200px';
        terrestre2 = 0;
    }
})