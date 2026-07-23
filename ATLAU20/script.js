function mostrarRutina(tipo) {

    // Buscamos la ventana emergente
    const ventana = document.getElementById("ventanaRutina");

    // Buscamos el título de la ventana
    const titulo = document.getElementById("tituloRutina");

    // Buscamos el espacio donde aparecerá la información
    const informacion = document.getElementById("informacionRutina");


    // RUTINA PRINCIPIANTE

    if (tipo === "principiante") {

        titulo.textContent = "🟢 RUTINA PRINCIPIANTE";

        informacion.innerHTML = `
            <p>🔥 Calentamiento — 5 minutos</p>
            <p>🚶 Activación y movilidad — 5 minutos</p>
            <p>💪 Actividad ligera — 5 minutos</p>
            <p>🧘 Estiramiento — 5 minutos</p>
            <p><strong>⏱️ Duración total: 20 minutos</strong></p>
        `;

    }


    // RUTINA INTERMEDIA

    else if (tipo === "intermedia") {

        titulo.textContent = "🟡 RUTINA INTERMEDIA";

        informacion.innerHTML = `
            <p>🔥 Calentamiento — 5 minutos</p>
            <p>💪 Ejercicios de fuerza — 5 minutos</p>
            <p>🏃 Resistencia — 5 minutos</p>
            <p>🧘 Estiramiento — 5 minutos</p>
            <p><strong>⏱️ Duración total: 20 minutos</strong></p>
        `;

    }


    // RETO 20

    else if (tipo === "reto20") {

        titulo.textContent = "⭐ RETO 20";

        informacion.innerHTML = `
            <p>🎯 Realiza 20 minutos de actividad física al día.</p>
            <p>
                Puedes elegir caminar, correr, bailar,
                andar en bicicleta o realizar tu actividad favorita.
            </p>
            <p><strong>💪 ¡Convierte el movimiento en un hábito!</strong></p>
        `;

    }


    // MOSTRAR LA VENTANA

    ventana.style.display = "flex";

}

function cerrarRutina() {

    const ventana = document.getElementById("ventanaRutina");

    ventana.style.display = "none";

}

function cerrarFuera(event) {

    if (event.target.id === "ventanaRutina") {

        cerrarRutina();

    }

}

// =========================================
// VENTANA DE RECETAS
// =========================================

function abrirReceta(tipo) {

    let titulo = "";
    let contenido = "";


    // RECETA 1: SMOOTHIE

    if (tipo === "smoothie") {

        titulo = "🍓 Smoothie de frutos rojos";

        contenido = `
        
            <h4>🥗 Ingredientes</h4>

            <ul>
                <li>1 botella de MOLOTL 20</li>
                <li>1 taza de frutos rojos</li>
                <li>½ taza de yogurt natural</li>
                <li>1 cucharadita de miel</li>
                <li>Hielo al gusto</li>
            </ul>

            <h4>👩‍🍳 Preparación</h4>

            <p>
                Coloca los frutos rojos, el yogurt, la miel,
                el hielo y MOLOTL 20 en una licuadora.
                Licúa hasta obtener una mezcla cremosa
                y homogénea. Sirve inmediatamente y disfruta.
            </p>

            <p>
                ⏱️ <strong>Tiempo:</strong> 5 minutos
            </p>

            <p>
                💪 <strong>Aporte:</strong> Energía y proteína
            </p>

        `;

    }


    // RECETA 2: BOWL DE DURAZNO

    else if (tipo === "durazno") {

        titulo = "🍑 Bowl de durazno y MOLOTL 20";

        contenido = `
        
            <h4>🥗 Ingredientes</h4>

            <ul>
                <li>1 botella de MOLOTL 20</li>
                <li>1 durazno fresco</li>
                <li>1 taza de yogurt natural</li>
                <li>2 cucharadas de granola</li>
                <li>Fruta fresca al gusto</li>
            </ul>

            <h4>👩‍🍳 Preparación</h4>

            <p>
                Coloca el yogurt en un recipiente.
                Agrega el durazno cortado en trozos,
                la granola y la fruta fresca.
                Acompaña con MOLOTL 20 para disfrutar
                un desayuno fresco y nutritivo.
            </p>

            <p>
                ⏱️ <strong>Tiempo:</strong> 10 minutos
            </p>

            <p>
                💪 <strong>Aporte:</strong> Nutritivo y refrescante
            </p>

        `;

    }


    // RECETA 3: PARFAIT

    else if (tipo === "parfait") {

        titulo = "🥣 Parfait energético MOLOTL 20";

        contenido = `
        
            <h4>🥗 Ingredientes</h4>

            <ul>
                <li>1 botella de MOLOTL 20</li>
                <li>1 taza de yogurt natural</li>
                <li>½ taza de granola</li>
                <li>Fruta fresca al gusto</li>
                <li>1 cucharadita de miel</li>
            </ul>

            <h4>👩‍🍳 Preparación</h4>

            <p>
                En un vaso coloca una capa de yogurt,
                agrega granola y fruta fresca.
                Repite las capas hasta llenar el recipiente.
                Añade un poco de miel y acompaña con
                MOLOTL 20 para completar tu snack energético.
            </p>

            <p>
                ⏱️ <strong>Tiempo:</strong> 8 minutos
            </p>

            <p>
                💪 <strong>Aporte:</strong> Energía y nutrientes
            </p>

        `;

    }


    // MOSTRAR LA VENTANA

    document.getElementById("tituloReceta").innerHTML = titulo;

    document.getElementById("contenidoReceta").innerHTML = contenido;

    document.getElementById("ventanaReceta").style.display = "flex";

}


// =========================================
// CERRAR VENTANA DE RECETA
// =========================================

function cerrarReceta() {

    document.getElementById("ventanaReceta").style.display = "none";

}

function pruebaReceta() {
}

// =========================================
// MOSTRAR INFORMACIÓN DE UNA CARRERA
// =========================================

function mostrarCarrera(carrera) {

    const ventana = document.getElementById("ventanaCarrera");
    const titulo = document.getElementById("tituloCarrera");
    const informacion = document.getElementById("informacionCarrera");

    if (carrera === "ti") {

    titulo.textContent = "Ingeniería en Tecnologías de la Información e Innovación Digital";

    informacion.innerHTML = `
        <p>
            La Ingeniería en Tecnologías de la Información e Innovación Digital
            forma profesionales capaces de desarrollar soluciones tecnológicas
            innovadoras para resolver problemas y mejorar procesos.
        </p>

        <p>
            Durante su formación, los estudiantes adquieren conocimientos en
            programación, desarrollo de software, bases de datos, redes,
            tecnologías digitales e innovación.
        </p>

        <p>
            💻 Área: Tecnologías de la Información
        </p>

        <p>
            🚀 Perfil: Desarrollo tecnológico e innovación digital
        </p>
    `;

}

if (carrera === "ma") {

    titulo.textContent = "Ingeniería en Manufactura Avanzada";

    informacion.innerHTML = `
        <p>
            La Ingeniería en Manufactura Avanzada forma profesionales capaces
            de diseñar, desarrollar y optimizar procesos de producción mediante
            el uso de tecnologías modernas y herramientas de innovación.
        </p>

        <p>
            Durante su formación, los estudiantes adquieren conocimientos en
            procesos de manufactura, automatización, robótica, diseño asistido
            por computadora y control de calidad.
        </p>

        <p>
            ⚙️ Área: Manufactura y producción
        </p>

        <p>
            🚀 Perfil: Innovación, automatización y optimización de procesos
        </p>
    `;

}

if (carrera === "ic") {

    titulo.textContent = "Ingeniería Civil";

    informacion.innerHTML = `
        <p>
            La Ingeniería Civil forma profesionales capaces de planear,
            diseñar, construir y supervisar obras de infraestructura que
            contribuyen al desarrollo y bienestar de la sociedad.
        </p>

        <p>
            Durante su formación, los estudiantes adquieren conocimientos en
            estructuras, construcción, hidráulica, geotecnia, vías terrestres
            y administración de proyectos.
        </p>

        <p>
            🏗️ Área: Construcción e infraestructura
        </p>

        <p>
            🚧 Perfil: Diseño, construcción y supervisión de obras civiles
        </p>
    `;

}

if (carrera === "il") {

    titulo.textContent = "Ingeniería Logística";

    informacion.innerHTML = `
        <p>
            La Ingeniería Logística forma profesionales capaces de planear,
            organizar y optimizar el movimiento de productos, materiales
            e información dentro de las cadenas de suministro.
        </p>

        <p>
            Durante su formación, los estudiantes adquieren conocimientos en
            transporte, distribución, almacenamiento, inventarios, gestión de
            cadenas de suministro y optimización de procesos logísticos.
        </p>

        <p>
            🚚 Área: Logística y cadena de suministro
        </p>

        <p>
            📦 Perfil: Planeación, organización y optimización de procesos logísticos
        </p>
    `;

}

if (carrera === "la") {

    titulo.textContent = "Licenciatura en Administración";

    informacion.innerHTML = `
        <p>
            La Licenciatura en Administración forma profesionales capaces de
            planear, organizar, dirigir y controlar los recursos de una
            organización para alcanzar sus objetivos de manera eficiente.
        </p>

        <p>
            Durante su formación, los estudiantes adquieren conocimientos en
            administración, finanzas, mercadotecnia, recursos humanos,
            contabilidad y gestión empresarial.
        </p>

        <p>
            📊 Área: Administración y gestión empresarial
        </p>

        <p>
            💼 Perfil: Gestión, liderazgo y toma de decisiones
        </p>
    `;

}

if (carrera === "ld") {

    titulo.textContent = "Licenciatura en Diseño y Comunicación Digital";

    informacion.innerHTML = `
        <p>
            La Licenciatura en Diseño y Comunicación Digital forma profesionales
            capaces de desarrollar propuestas visuales y estrategias de
            comunicación utilizando herramientas digitales y creativas.
        </p>

        <p>
            Durante su formación, los estudiantes adquieren conocimientos en
            diseño gráfico, comunicación visual, ilustración, fotografía,
            producción audiovisual y creación de contenidos digitales.
        </p>

        <p>
            🎨 Área: Diseño y comunicación digital
        </p>

        <p>
            💻 Perfil: Creatividad, comunicación visual y producción digital
        </p>
    `;

}

if (carrera === "le") {

    titulo.textContent = "Licenciatura en Enfermería";

    informacion.innerHTML = `
        <p>
            La Licenciatura en Enfermería forma profesionales capacitados para
            brindar atención integral y de calidad a las personas, familias y
            comunidades, contribuyendo a la promoción de la salud y la
            prevención de enfermedades.
        </p>

        <p>
            Durante su formación, los estudiantes adquieren conocimientos en
            cuidado de pacientes, promoción de la salud, prevención de
            enfermedades y atención en diferentes áreas del sector sanitario.
        </p>

        <p>
            💗 Área: Salud y atención integral
        </p>

        <p>
            🩺 Perfil: Cuidado, prevención y promoción de la salud
        </p>
    `;

}

if (carrera === "tf") {

    titulo.textContent = "Licenciatura en Terapia Física";

    informacion.innerHTML = `
        <p>
            La Licenciatura en Terapia Física forma profesionales capaces de
            evaluar, prevenir y tratar alteraciones del movimiento y la
            funcionalidad física de las personas, contribuyendo a mejorar
            su calidad de vida.
        </p>

        <p>
            Durante su formación, los estudiantes adquieren conocimientos en
            rehabilitación física, ejercicio terapéutico, anatomía, fisiología
            y técnicas de recuperación funcional.
        </p>

        <p>
            ⚽ Área: Salud y rehabilitación física
        </p>

        <p>
            💪 Perfil: Evaluación, prevención y rehabilitación del movimiento
        </p>
    `;

}

    ventana.style.display = "flex";

}


// =========================================
// CERRAR VENTANA DE CARRERA
// =========================================

function cerrarCarrera() {

    const ventana = document.getElementById("ventanaCarrera");

    ventana.style.display = "none";

}