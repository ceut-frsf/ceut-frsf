import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeportesComponent implements OnInit {

  listaDeportes: Deporte[] = [
    {
      icono: 'futbol.png',
      nombre: 'Fútbol 5',
      horario: 'Miércoles 15/5 - 13:00 a 16:00',
      equipos: 'El torneo constará de 8 equipos de 7 jugadores (5 + 2 suplentes).',
      reglas: 'Se jugarán 8 partidos de 2 tiempos de 6 minutos cada uno.',
      descripcion: []
    },
    {
      icono: 'basket.png',
      nombre: 'Básquet',
      horario: 'Viernes 17/5 - 16:00 a 17:30',
      equipos: 'El torneo constará de 8 equipos de 3 jugadores (5 + 2 suplentes).',
      reglas: 'Se jugarán 6 partidos de 7 minutos cada uno.',
      descripcion: []
    },
    {
      icono: 'truco.png',
      nombre: 'Truco',
      horario: 'Viernes 17/5 - Desde las 10:00',
      equipos: '',
      reglas: '',
      descripcion: ['Cada equipo contará con dos jugadores']
    },
    {
      icono: 'lol.png',
      nombre: 'League of Legends',
      horario: 'Semana del 14/5 al 17/5 - Fixture con partidas desde las 22:00',
      equipos: 'Cada equipo estará compuesto por 5 personas, pudiendo ser a los sumo 3 de cada equipo externos a la facultad, Se jugarán las partidas en el mapa Grieta del Invocador.',
      reglas: 'Se jugará en dos zonas de 4 equipos cada una. Cada equipo jugará contra los 3 restantes de su zona',
      descripcion: ['Todos los partidos excepto la final se disputarán fuera de la facultad, en la semana desde el 14/5 al 17/5, comenzando desde las 22:00 en un fixture que se adjuntará a la brevedad.']
    },
    {
      icono: 'cs.png',
      nombre: 'Counter-Strike 1.6',
      horario: 'Viernes 17/5 - Comenzando desde las 10:00',
      equipos: 'Se jugará en equipos de 3 personas cada uno.',
      reglas: 'El torneo constará de 8 equipos con dos zonas de 4 cada una. En cada zona los equipos jugarán entre sí, clasificando los dos mejores a la semifinal.',
      descripcion: ['Se jugarán al mejor de 3 partidas de 5, en cinco mapas ya predefinidos. Cada partida constará de 9 rondas de un minuto y medio, siendo ganador el equipo que gane 5 rondas de 9', 'Los mapas elegidos para formar parte del torneo son iceworld, de_dust2_largo, aim_map, awp_map, fy_pool_day, fy_snow y mini_dust_pro.']
    },
    {
      icono: 'volleyball.png',
      nombre: 'Volley',
      horario: 'Miércoles 15/5 - 16:00 a 17:30',
      equipos: '',
      reglas: '',
      descripcion: ['Se jugarán 6 partidos de 2 tiempos de 5 minutos cada uno.', 'El torneo constará de 6 equipos de 6 jugadores.']
    },
    {
      icono: 'handball.png',
      nombre: 'Handball',
      horario: 'Viernes',
      descripcion: ['Handball', 'Handball']
    },
    {
      icono: 'ping-pong.png',
      nombre: 'Ping Pong',
      horario: 'Viernes',
      descripcion: ['Ping ', 'Ping ']
    },
    {
      icono: 'ajedrez.png',
      nombre: 'Ajedrez',
      horario: 'Viernes',
      descripcion: ['Ajedrez', 'Ajedrez']
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

export class Deporte {
  icono: string;
  nombre: string;
  horario: string;
  equipos?: string;
  reglas?: string;
  descripcion: string[];
}