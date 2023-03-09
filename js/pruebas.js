function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
    'Validar nombre no validó que el nombre no sea vacío',
    );

  console.assert(
    validarNombre(
        '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
    'Este campo debe tener menos de 50 caracteres',
    'Validar nombre no validó que el nombre sea menor a 50 caracteres',
);

console.assert(
    validarNombre('Andrés') === "",
        "Validar nombre no funcionó con un nombre válido"
    );
}

probarValidarNombre();


function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === "El campo ciudad no puede estar vacío",
        "Validar ciudad no validó que la ciudad no sea un campo vacío",
    );

    console.assert(
        validarCiudad('Buenos Aires') === "",
        "Validar ciudad no funcionó con un nombre de ciudad válido",
    );
}

probarValidarCiudad();


function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === "El campo descripción no puede estar vacío",
        "Validar descripción regalo no validó que la descripción no sea un campo vacío",
    );

    console.assert(
        validarDescripcionRegalo(
            '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        "El campo descripción es demasiado largo", "Validar descripción no validó que la descripción tenga menos de 100 caracteres",
    );

    console.assert(
        validarDescripcionRegalo('un regalo muy lindo') ===  "", 
        "Validar descripción no funcionó con una descripción válida",
    )
}

probarValidarDescripcionRegalo();