function desarrollo(){
    let total = 0;
    const horas = 
    [{
        "d1":4,   //15 abril    22.00 - 02.00
        "d2":1,  //16 abril     14.30 - 
        "d3":0,   //
        "d4":0,   //
        "d5":0,   //
        "d6":0   //
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
    let fumigacion = document.getElementById("fumigacion");
    let sanitizacion = document.getElementById("sanitizacion");
    let amonio = document.getElementById("amonio");
    let certificacion = document.getElementById("certificacion");

    desratizacion.innerText = `
    Se utilizarán rodenticidas monodosis de última generación, anticoagulantes a base de bromadiolona al 0,005% y flocoumafen al 0,05%, tanto en cebos pellets en el interior como cebos en bloque (estaciones de PVC o caja plástica según preferencia) para el exterior.
    
    También utilizaremos trampas pegajosas para roedores y trampas de captura viva.

    Cabe considerar que  los roedores constituyen un riesgo sanitario importante en la transmisión de múltiples enfermedades, tales como salmonelosis, hantavirosis, tifus murino, triquinosis, etc.

    `;
    
    desinsectacion.innerText = `
    Utilizamos piretroides de última generación, de baja toxicidad para el hombre y animales, los cuales además son de amplio espectro, teniendo efecto en el sistema nervioso de insectos rastreros y voladores, actuando por contacto o ingestión. Según al servicio a realizar se puede ofrecer nebulización de micropartículas (no empapa las superficies con el producto).
    `;

    fumigacion.innerText = `
    Aqui me faltaria una descripción como la de los demás

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore reiciendis recusandae? Voluptates, incidunt esse saepe reprehenderit soluta inventore laudantium minus officia quam sunt tempora et distinctio itaque assumenda animi?
    `;

    sanitizacion.innerText = `
    Se aplican sanitizantes de buen efecto residual con acción fungicida, controlando hongos, bacterias, virus, algas -causantes de diversas enfermedades.

    Eliminación en superficies coronavirus SARS-CoV-2 (COVID-19).

    `;

    amonio.innerText = `
    Aqui me faltaria una descripción como la de los demás

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore reiciendis recusandae? Voluptates, incidunt esse saepe reprehenderit soluta inventore laudantium minus officia quam sunt tempora et distinctio itaque assumenda animi?
    `;

    certificacion.innerText = `
    Aqui me faltaria una texto con la certificacion, un resumen o algo, pero ojalá NO IMAGEN!

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore reiciendis recusandae? Voluptates, incidunt esse saepe reprehenderit soluta inventore laudantium minus officia quam sunt tempora et distinctio itaque assumenda animi?
    `;


}


window.onload=function(){
    desarrollo();
    descripciones();
}