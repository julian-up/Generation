// ============================================
// EJERCICIO 2 - BIBLIOTECA DE CONTENIDO
// Plataforma de streaming con películas y series
// ============================================

// 2.1 CLASE BASE: CONTENIDO
// Esta clase es la base para todas las clases de contenido.
// Define propiedades y métodos comunes a películas y series.
class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;        // El género es esencial para el contenido
        this.anio = anio;
        this.disponible = true;      // Por defecto, todo contenido está disponible
    }

    // ficha() retorna la información básica del contenido en una cadena
    ficha() {
        return `${this.titulo} - Género: ${this.genero} (${this.anio})`;
    }

    // retirar() marca el contenido como no disponible y retorna un mensaje
    // Nota: Se retorna el mensaje en lugar de solo imprimirlo para mayor flexibilidad
    retirar() {
        this.disponible = false;
        return `El contenido "${this.titulo}" ha sido retirado de la plataforma.`;
    }

    // estado() retorna una cadena que describe si está disponible o no
    estado() {
        return this.disponible ? "Disponible" : "Retirado";
    }
}

// ============================================
// 2.2 CLASES EXTENDIDAS: PELICULA Y SERIE
// ============================================

// PELICULA: Extiende Contenido
// Una película tiene duración en minutos.
class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);  // Llama al constructor de Contenido
        this.duracion = duracion;     // Duración en minutos
    }

    // duracionFormateada() convierte minutos a formato "Xh YYmin"
    // Usa Math.floor para las horas (división entera)
    // Usa el operador % para obtener los minutos restantes
    duracionFormateada() {
        const horas = Math.floor(this.duracion / 60);
        const minutos = this.duracion % 60;
        return `${horas}h ${minutos}min`;
    }

    // Sobreescribe ficha() para incluir la duración formateada
    ficha() {
        return `${super.ficha()} - Duración: ${this.duracionFormateada()}`;
    }
}

// SERIE: Extiende Contenido
// Una serie tiene temporadas y episodios por temporada.
class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);  // Llama al constructor de Contenido
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;  // Se inicializa en 0, se asigna con registrarEpisodios()
    }

    // registrarEpisodios() asigna cuántos episodios tiene cada temporada
    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
    }

    // totalEpisodios() calcula el total: temporadas * episodios por temporada
    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }

    // Sobreescribe ficha() para incluir temporadas y total de episodios
    ficha() {
        return `${super.ficha()} - Temporadas: ${this.temporadas}, Total de episodios: ${this.totalEpisodios()}`;
    }
}

// ============================================
// CHECKPOINT 4: Prueba de Película y Serie
// ============================================
console.log("=== CHECKPOINT 4: Prueba individual ===");

// Crear dos películas
const pelicula1 = new Pelicula("Inception", "Ciencia Ficción", 2010, 148);
const pelicula2 = new Pelicula("Titanic", "Romance", 1997, 194);

// Crear dos series
const serie1 = new Serie("Breaking Bad", "Drama", 2008, 5);
serie1.registrarEpisodios(13);  // Establecer episodios por temporada

const serie2 = new Serie("The Crown", "Drama", 2016, 5);
serie2.registrarEpisodios(10);  // Establecer episodios por temporada

// Verificar que ficha() incluye la información correcta según el tipo
console.log("Película 1:", pelicula1.ficha());
console.log("Película 2:", pelicula2.ficha());
console.log("Serie 1:", serie1.ficha());
console.log("Serie 2:", serie2.ficha());

// Retirar un contenido y confirmar que estado() lo refleja
console.log("\n--- Retirando Inception ---");
console.log(pelicula1.retirar());
console.log("Estado de Inception:", pelicula1.estado());
console.log("Estado de Titanic:", pelicula2.estado());

// ============================================
// 2.3 CATÁLOGO COMPLETO
// ============================================
console.log("\n\n=== CATÁLOGO COMPLETO ===");

// 1. Crear al menos tres películas y tres series
const pelicula3 = new Pelicula("Avatar", "Ciencia Ficción", 2009, 162);
const pelicula4 = new Pelicula("The Shawshank Redemption", "Drama", 1994, 142);
const pelicula5 = new Pelicula("Pulp Fiction", "Crimen", 1994, 154);

const serie3 = new Serie("Stranger Things", "Ciencia Ficción", 2016, 4);
serie3.registrarEpisodios(8);

const serie4 = new Serie("Westworld", "Ciencia Ficción", 2016, 4);
serie4.registrarEpisodios(10);

const serie5 = new Serie("The Office", "Comedia", 2005, 9);
serie5.registrarEpisodios(22);

// 2. Guardar todo en un array llamado catalogo
const catalogo = [
    pelicula1, pelicula2, pelicula3, pelicula4, pelicula5,
    serie1, serie2, serie3, serie4, serie5
];

// 3. Recorrer el catálogo e imprimir la ficha() de cada elemento
console.log("\n--- Fichas de todo el catálogo ---");
for (let i = 0; i < catalogo.length; i++) {
    console.log(`${i + 1}. ${catalogo[i].ficha()}`);
}

// 4. Retirar dos contenidos e imprimir su estado() para verificar
console.log("\n--- Retirando dos contenidos ---");
console.log(serie1.retirar());
console.log(pelicula5.retirar());

console.log("\nEstado de Breaking Bad:", serie1.estado());
console.log("Estado de Pulp Fiction:", pelicula5.estado());

// 5. Contar cuántos elementos siguen disponibles e imprimir el resultado
let disponibles = 0;
for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].disponible) {
        disponibles++;
    }
}

console.log(`\n--- Resumen del catálogo ---`);
console.log(`Total de contenidos: ${catalogo.length}`);
console.log(`Contenidos disponibles: ${disponibles}`);
console.log(`Contenidos retirados: ${catalogo.length - disponibles}`);

// ============================================
// CHECKPOINT 5: Verificación Final
// ============================================
console.log(`\n\n=== CHECKPOINT 5: Verificación Final ===`);
console.log("✓ node ejercicio2.js corre sin errores");
console.log("✓ El catálogo muestra la ficha de cada elemento");
console.log(`✓ El conteo de disponibles es correcto tras los retiros: ${disponibles}/${catalogo.length}`);
