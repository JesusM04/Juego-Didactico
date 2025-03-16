const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers-container');
const nextRoundButton = document.getElementById('next-round');

let currentQuestionIndex = 0;
const questions = [
        {
            question: '¿Cuál es la definición más precisa de un Sistema de Información (SI)?',
            answers: [
                { text: 'A. Un conjunto de computadoras conectadas en red.', correct: false },
                { text: 'B. Un software para gestionar bases de datos.', correct: false },
                { text: 'C. Un conjunto de componentes interrelacionados que recopilan, procesan, almacenan y distribuyen información.', correct: true },
                { text: 'D. Una herramienta para crear presentaciones.', correct: false },
                { text: 'E. Un dispositivo para almacenar archivos.', correct: false },
                { text: 'F. Un protocolo de comunicación en internet.', correct: false },
                { text: 'G. Una aplicación para editar imágenes.', correct: false },
                { text: 'H. Un sistema operativo para dispositivos móviles.', correct: false },
                { text: 'I. Una red social para profesionales.', correct: false },
                { text: 'J. Un lenguaje de programación.', correct: false }
            ]
        },
        {
            question: '¿Cuál es el objetivo principal de un Sistema de Información (SI) en una organización?',
            answers: [
                { text: 'A. Reducir el consumo de energía.', correct: false },
                { text: 'B. Aumentar el número de empleados.', correct: false },
                { text: 'C. Generar publicidad para la empresa.', correct: false },
                { text: 'D. Controlar el acceso físico a las instalaciones.', correct: false },
                { text: 'E. Organizar eventos sociales para los empleados.', correct: false },
                { text: 'F. Mantener la limpieza de las oficinas.', correct: false },
                { text: 'G. Apoyar la toma de decisiones y mejorar la eficiencia operativa.', correct: true },
                { text: 'H. Gestionar el transporte de los productos.', correct: false },
                { text: 'I. Supervisar la calidad del aire en los edificios.', correct: false },
                { text: 'J. Elaborar informes financieros para los accionistas.', correct: false }
            ]
        },
        {
            question: '¿Cuál es una característica fundamental de un Sistema de Información (SI) eficaz?',
            answers: [
                { text: 'A. Capacidad para adaptarse a los cambios y proporcionar información oportuna.', correct: true },
                { text: 'A. Complejidad innecesaria.', correct: false },
                { text: 'B. Falta de seguridad en los datos.', correct: false },
                { text: 'D. Dificultad para integrar diferentes módulos.', correct: false },
                { text: 'E. Lentitud en el procesamiento de datos.', correct: false },
                { text: 'F. Interfaz de usuario poco intuitiva.', correct: false },
                { text: 'G. Dependencia de un solo proveedor de software.', correct: false },
                { text: 'H. Falta de documentación del sistema.', correct: false },
                { text: 'I. Incompatibilidad con dispositivos móviles.', correct: false },
                { text: 'J. Generación de informes irrelevantes.', correct: false }
            ]
        },
        {
            question: '¿Cuál es una ventaja clave de implementar un Sistema de Información (SI) en una empresa?',
            answers: [
                { text: 'A. Aumento de la burocracia.', correct: false },
                { text: 'B. Mayor probabilidad de errores humanos.', correct: false },
                { text: 'C. Disminución de la comunicación interna.', correct: false },
                { text: 'D. Incremento en los costos operativos.', correct: false },
                { text: 'E. Reducción de la innovación.', correct: false },
                { text: 'F. Mayor resistencia al cambio.', correct: false },
                { text: 'G. Dificultad para adaptarse a nuevos mercados.', correct: false },
                { text: 'H. Mejora en la eficiencia, productividad y toma de decisiones.', correct: true },
                { text: 'I. Falta de control sobre los datos.', correct: false },
                { text: 'J. Disminución de la satisfacción del cliente.', correct: false }
            ]
        },
        {
            question: '¿Cuál es un ejemplo de un Sistema de Información (SI) utilizado en el sector de la salud?',
            answers: [
                { text: 'A. Sistema de gestión de inventario.', correct: false },
                { text: 'B. Sistema de gestión de relaciones con los clientes (CRM).', correct: false },
                { text: 'C. Sistema de planificación de recursos empresariales (ERP).', correct: false },
                { text: 'D. Sistema de gestión de la cadena de suministro (SCM).', correct: false },
                { text: 'E. Sistema de registro electrónico de pacientes (EHR).', correct: true },
                { text: 'F. Sistema de información geográfica (GIS).', correct: false },
                { text: 'G. Sistema de gestión de aprendizaje (LMS).', correct: false },
                { text: 'H. Sistema de gestión de proyectos (PMS).', correct: false },
                { text: 'I. Sistema de gestión de contenido (CMS).', correct: false },
                { text: 'J. Sistema de gestión de recursos humanos (HRM).', correct: false }
            ]
        },
        {
            question: '¿Cuál es el principal uso de un Sistema de Información (SI) de gestión (MIS)?',
            answers: [
                { text: 'A. Automatizar tareas de producción.', correct: false },
                { text: 'B. Gestionar la relación con los clientes.', correct: false },
                { text: 'C. Planificar recursos empresariales a largo plazo.', correct: false },
                { text: 'D. Analizar datos geográficos.', correct: false },
                { text: 'E. Crear contenido multimedia.', correct: false },
                { text: 'F. Gestionar proyectos de desarrollo de software.', correct: false },
                { text: 'G. Controlar el acceso a la red.', correct: false },
                { text: 'H. Supervisar el rendimiento de los empleados.', correct: false },
                { text: 'I. Apoyar la toma de decisiones operativas y tácticas.', correct: true },
                { text: 'J. Gestionar la logística de la cadena de suministro.', correct: false }
            ]
        },
        {
            question: '¿Qué tipo de Sistema de Información (SI) se utiliza para apoyar decisiones estratégicas de alto nivel?',
            answers: [
                { text: 'A. Sistema de procesamiento de transacciones (TPS).', correct: false },
                { text: 'B. Sistema de información de gestión (MIS).', correct: false },
                { text: 'C. Sistema de soporte a decisiones (DSS).', correct: false },
                { text: 'D. Sistema de información ejecutiva (EIS).', correct: true },
                { text: 'E. Sistema de automatización de oficinas (OAS).', correct: false },
                { text: 'F. Sistema experto (ES).', correct: false },
                { text: 'G. Sistema de gestión de relaciones con los clientes (CRM).', correct: false },
                { text: 'H. Sistema de planificación de recursos empresariales (ERP).', correct: false },
                { text: 'I. Sistema de gestión de la cadena de suministro (SCM).', correct: false },
                { text: 'J. Sistema de inteligencia de negocios (BI).', correct: false }
            ]
        },
        {
            question: '¿Cuál es la función principal de un Sistema de Automatización de Oficinas (OAS)?',
            answers: [
                { text: 'A. Gestionar transacciones financieras.', correct: false },
                { text: 'B. Automatizar tareas administrativas y mejorar la productividad en oficinas.', correct: true },
                { text: 'C. Analizar datos de ventas.', correct: false },
                { text: 'D. Controlar la producción en fábricas.', correct: false },
                { text: 'E. Gestionar la relación con los clientes.', correct: false },
                { text: 'F. Planificar recursos empresariales.', correct: false },
                { text: 'G. Analizar datos geográficos.', correct: false },
                { text: 'H. Crear contenido multimedia.', correct: false },
                { text: 'I. Gestionar proyectos de desarrollo de software.', correct: false },
                { text: 'J. Controlar el acceso a la red.', correct: false }
            ]
        }, 
        {
                question: '¿Qué es un Sistema Experto (ES) en el contexto de los Sistemas de Información (SI)?',
                answers: [
                    { text: 'A. Un sistema que automatiza la gestión de bases de datos.', correct: false },
                    { text: 'B. Un sistema para gestionar la comunicación interna en una empresa.', correct: false },
                    { text: 'C. Un sistema para analizar datos financieros.', correct: false },
                    { text: 'D. Un sistema para controlar el acceso a la red.', correct: false },
                    { text: 'E. Un sistema para gestionar proyectos de desarrollo de software.', correct: false },
                    { text: 'F. Un sistema que simula el razonamiento humano para resolver problemas complejos en un dominio específico.', correct: true },
                    { text: 'G. Un sistema para crear contenido multimedia.', correct: false },
                    { text: 'H. Un sistema para analizar datos geográficos.', correct: false },
                    { text: 'I. Un sistema para automatizar tareas administrativas.', correct: false },
                    { text: 'J. Un sistema para gestionar la logística de la cadena de suministro.', correct: false }
                ]
            },
            // ... (más preguntas) ...
        ];


function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersContainer.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const answerElement = document.createElement('div');
        answerElement.classList.add('answer');
        answerElement.textContent = answer.text;
        answerElement.dataset.correct = answer.correct;

        answerElement.addEventListener('click', () => {
            checkAnswer(answerElement);
        });

        answersContainer.appendChild(answerElement);
    });
}

function checkAnswer(selectedAnswer) {
    selectedAnswer.style.pointerEvents = 'none'; // Deshabilitar clic en la respuesta seleccionada

    if (selectedAnswer.dataset.correct === 'true') {
        selectedAnswer.classList.add('correct');
        disableOtherAnswers(); // Deshabilitar todas las demás respuestas
    } else {
        selectedAnswer.classList.add('incorrect');
        const incorrectAnswers = document.querySelectorAll('.answer.incorrect');
        if (incorrectAnswers.length === document.querySelectorAll('.answer').length - 1) {
            const correct = document.querySelector('.answer[data-correct="true"]');
            correct.classList.add('correct');
        }
    }
}

function disableOtherAnswers() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        if (!answer.classList.contains('correct')) {
            answer.style.pointerEvents = 'none';
        }
    });
}

nextRoundButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert('¡Has completado todas las preguntas!');
    }
});

loadQuestion();






// ... (código anterior) ...

// ... (código anterior) ...

const helpToggle = document.getElementById('help-toggle');
const helpGroups = document.getElementById('help-groups');
const helpOptions = document.getElementById('help-options');
const usedHelp = {};

helpToggle.addEventListener('click', () => {
    helpGroups.style.display = helpGroups.style.display === 'block' ? 'none' : 'block';
    helpOptions.style.display = 'none';
    if (helpGroups.style.display === 'block') { // Si se muestra grupos, re-aplicar clases usadas.
        applyUsedClasses();
    }
});

document.querySelectorAll('.help-group-button').forEach(button => {
    button.addEventListener('click', () => {
        const group = button.dataset.group;
        helpGroups.style.display = 'none';
        helpOptions.style.display = 'block';

        helpOptions.innerHTML = `
            <button class="help-option" data-group="${group}" data-type="50/50">50/50 - Grupo ${group}</button>
            <button class="help-option" data-group="${group}" data-type="Llamada">Llamada - Grupo ${group}</button>
        `;

        document.querySelectorAll('.help-option').forEach(option => {
            option.addEventListener('click', () => {
                const type = option.dataset.type;

                if (!usedHelp[group]) {
                    usedHelp[group] = {};
                }

                if (!usedHelp[group][type]) {
                    usedHelp[group][type] = true;
                    option.classList.add('used');
                    alert(`Ayuda ${type} del grupo ${group} usada`);
                } else {
                    alert(`Ayuda ${type} del grupo ${group} ya usada`);
                }
            });
        });
        applyUsedClasses();
    });
});

function applyUsedClasses() {
    document.querySelectorAll('.help-option').forEach(option => {
        const group = option.dataset.group;
        const type = option.dataset.type;
        if (usedHelp[group] && usedHelp[group][type]) {
            option.classList.add('used');
        }
    });
}

nextRoundButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        window.location.href = 'despedida.html'; // Redirige a final.html
    }
});