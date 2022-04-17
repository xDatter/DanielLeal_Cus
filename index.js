function desarrollo(){
    let total = 0;
    const horas = 
    [{
        "d1":4,     //15 abril  22.00 - 02.00
        "d2":5,     //16 abril  14.30 - 19.30
        "d3":2.5,   //17 abril  01.30 - 04.00
        "d4":0.5,     //17 abril  14.00 - 14.30
        "d5":0,     //
        "d6":0      //
    }];
    let diasTrabajados = Object.keys(horas[0]).length;
    for (let cont = diasTrabajados; cont > 0; cont--){
        total+= horas[0][`d${cont}`]
    }
    console.log(`Total de horas de desarrollo hasta el último commit: ${total} horas`);
}

function descripciones(){
    let desratizacion = document.getElementById("desratizacion");
    let desinsectacion = document.getElementById("desinsectacion");
    let sanitizacion = document.getElementById("sanitizacion");
    let certificacion = document.getElementById("certificacion");
    let somos = document.getElementById("somos");

    desratizacion.innerText = `
    Se utilizarán rodenticidas monodosis de última generación, anticoagulantes a base de bromadiolona al 0,005% y flocoumafen al 0,05%, tanto en cebos pellets en el interior como cebos en bloque (estaciones de PVC o caja plástica según preferencia) para el exterior. También utilizaremos trampas pegajosas para roedores y trampas de captura viva.
    
    Cabe considerar que los roedores constituyen un riesgo sanitario importante en la transmisión de múltiples enfermedades, tales como salmonelosis, hantavirosis, tifus murino, triquinosis, etc.
    `;
    
    desinsectacion.innerText = `
    Utilizamos insecticidas de última generación, de baja toxicidad para el hombre y animales, los cuales además son de amplio espectro, teniendo efecto en el sistema nervioso de insectos rastreros y voladores, actuando por contacto o ingestión. 
    
    Según el servicio a realizar se puede ofrecer nebulización de micropartículas (no empapa las superficies con el producto).
    `;

    sanitizacion.innerText = `
    Se aplican sanitizantes de amonio cuaternario con micropartículas de cobre, de buen efecto residual con acción contra hongos, bacterias, virus y algas causantes de diversas enfermedades.

    Eliminación en superficies coronavirus SARS-CoV-2 (COVID-19).

    Staphylococcus Aureus. Es una de las bacterias principales causantes de mastitis clínica crónica o recurrentes en vacas de lechería. Provocando pérdidas económicas de consideración.
    `;


    certificacion.innerText = `
    Servicio de control de plagas en planteles de animales bajo certificación oficial P.A.B.C.O.

    Autorizada para uso de plaguicidas mediante la resolución exenta 21397/2020 de la Seremi de salud de Los Lagos.

    Autorizada para el uso de desinfectantes mediante la resolución exenta 19971/2020 de la Seremi de salud de los Lagos.
    `;


    somos.innerText = `
    Sanirat, LTDA. es una empresa familiar que nace respondiendo a las distintas necesidades del mercado actual, para dar soluciones de saneamiento industrial y residencial en la región de Los Lagos y sus alrededores. Con una diversa cantidad de servicios los cuales se otorgan con una óptima ejecución y calidad, dando así tranquilidad a nuestros clientes. El hecho de escoger Sanirat brinda una excelente relación con el cliente por estar en constante contacto  por cualquier necesidad o eventualidad que pueda surgir a lo largo del convenio.
    `;
}

function contactos(){
    let marca = document.getElementById("marca");
    let tel1 = document.getElementById("tel1");
    let tel2 = document.getElementById("tel2");
    let correo1 = document.getElementById("correo1");
    let correo2 = document.getElementById("correo2");
    let redSocial1 = document.getElementById("redSocial1");
    let redSocial2 = document.getElementById("redSocial2");

    let social1 = "https://www.facebook.com/Sanirat-control-de-plagas-100292669338098/"
    let social2 = "https://www.instagram.com/sanirat.osorno/"


    marca.innerText = `
    Region de los Lagos
    Sitio en construcción
    Developed by Ignacio_c_dev
    340`

    tel1.innerHTML = `<i class="fa-brands fa-whatsapp"></i> <p>+56 9 8773 4447</p>`
    tel2.innerHTML = `<i class="fa-solid fa-phone"></i><p></p> +64 2 64 1032`
    correo1.innerHTML = `<i class="fa-regular fa-envelope"></i><p></p> ventas@sanirat.cl`
    correo2.innerHTML = `<p></p>`
    redSocial1.innerHTML = `<a href="${social1}" target="_blank"><i class="fa-brands fa-facebook"></i><p></p>  Ver en Facebook</a>`
    redSocial2.innerHTML = `<a href="${social2}" target="_blank"><i class="fa-brands fa-instagram"></i><p></p> Ver en Instagram</a>`


}


window.onload=function(){
    desarrollo();
    descripciones();
    contactos();
}