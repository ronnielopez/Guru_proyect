let banderaM = 0;
let banderaM2 = 0;
let terrestre = 0;
let terrestre2 = 0;
let aereo = 0;
$('#maritimo').click(function () {
    if (banderaM === 0) {
        $("#txtMaritimo").fadeIn();
        document.getElementById('maritimo').innerHTML = 'Ocultar';
        document.getElementById('cardMaritimo').style.height = 'auto';
        document.getElementById('cardMaritimo').style.border = 'solid';
        document.getElementById('cardMaritimo').style.borderColor = 'white';
        document.getElementById('cardMaritimo').style.borderRadius = '50px';
        banderaM = 1;
    } else {
        $("#txtMaritimo").fadeOut();
        document.getElementById('cardMaritimo').style.height = 'auto';
        document.getElementById('maritimo').innerHTML = 'Ver mas';
        document.getElementById('cardMaritimo').style.border = 'none';
        banderaM = 0;
    }

})

$('#terrestre').click(function () {
    if (terrestre === 0) {
        $("#txtTerrestre").fadeIn('slow');
        document.getElementById('terrestre').innerHTML = 'Ocultar';
        document.getElementById('cardTerrestre').style.height = 'auto';
        document.getElementById('cardTerrestre').style.border = 'solid';
        document.getElementById('cardTerrestre').style.borderColor = 'white';
        document.getElementById('cardTerrestre').style.borderRadius = '50px';
        terrestre = 1;
    } else {
        $("#txtTerrestre").fadeOut();
        document.getElementById('cardTerrestre').style.height = 'auto';
        document.getElementById('terrestre').innerHTML = 'Ver mas';
        document.getElementById('cardTerrestre').style.border = 'none';
        terrestre = 0;
    }
})

$('#aereo').click(function () {
    if (aereo === 0) {
        $("#txtAereo").fadeIn('slow');
        document.getElementById('cardAereo').style.height = 'auto';
        document.getElementById('aereo').innerHTML = 'Ocultar';
        document.getElementById('cardAereo').style.border = 'solid';
        document.getElementById('cardAereo').style.borderColor = 'white';
        document.getElementById('cardAereo').style.borderRadius = '50px';
        aereo = 1;
    } else {
        $("#txtAereo").fadeOut();
        document.getElementById('cardAereo').style.height = 'auto';
        document.getElementById('aereo').innerHTML = 'Ver mas';
        document.getElementById('cardAereo').style.border = 'none';
        aereo = 0;
    }

})

$('#maritimo2').click(function () {
    if (banderaM2 === 0) {
        $("#txtMaritimo2").fadeIn();
        document.getElementById('maritimo2').innerHTML = 'Ocultar';
        document.getElementById('cardMaritimo2').style.height = 'auto';
        document.getElementById('cardMaritimo2').style.border = 'solid';
        document.getElementById('cardMaritimo2').style.borderColor = 'white';
        document.getElementById('cardMaritimo2').style.borderRadius = '50px';
        banderaM2 = 1;
    } else {
        $("#txtMaritimo2").fadeOut();
        document.getElementById('cardMaritimo2').style.height = 'auto';
        document.getElementById('maritimo2').innerHTML = 'Ver mas';
        document.getElementById('cardMaritimo2').style.border = 'none';
        banderaM2 = 0;
    }

})

$('#terrestre2').click(function () {
    if (terrestre2 === 0) {
        $("#txtTerrestre2").fadeIn();
        document.getElementById('terrestre2').innerHTML = 'Ocultar';
        document.getElementById('cardTerrestre2').style.height = 'auto';
        document.getElementById('cardTerrestre2').style.border = 'solid';
        document.getElementById('cardTerrestre2').style.borderColor = 'white';
        document.getElementById('cardTerrestre2').style.borderRadius = '50px';
        terrestre2 = 1;
    } else {
        $("#txtTerrestre2").fadeOut();
        document.getElementById('cardTerrestre2').style.height = 'auto';
        document.getElementById('terrestre2').innerHTML = 'Ver mas';
        document.getElementById('cardTerrestre2').style.border = 'none';
        terrestre2 = 0;
    }
})

