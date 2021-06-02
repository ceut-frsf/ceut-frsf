import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calendario",
  templateUrl: "./calendario.component.html",
  styleUrls: ["./calendario.component.scss"],
})
export class CalendarioComponent implements OnInit {
  public generateWeekDays(month: AcademicYearMonth, week: number): number[] {
    // Índice del día primero de mes. Los días restantes "se corren" en base a este índice
    const startingDayOffset = this.weekDays.indexOf(month.startingDay) + 1;
    const startingWeekDay = week === 1 ? startingDayOffset : 1;

    if (startingWeekDay > month.dayAmount) {
      return [];
    }

    return this.fillDaysOfAWeek(startingDayOffset, week, month.dayAmount);
  }

  private fillDaysOfAWeek(
    startingDayOffset: number,
    week: number,
    daysInMonth: number
  ) {
    let weekdays: string[] = [];
    //Cantidad de fechas no vacías (columnas) en una fila del calendario
    const daysInWeek =
      week === 1 || startingDayOffset === 1 ? 7 - startingDayOffset + 1 : 7;
    //Día de comienzo de la semana a generar
    const startingDay =
      week === 1 ? 1 : 7 * (week - 1) + 1 - (startingDayOffset - 1);

    for (let i = startingDay; i < startingDay + daysInWeek; i++) {
      if (i <= daysInMonth) {
        weekdays = weekdays.concat(i.toString());
      } else {
        weekdays = weekdays.concat("");
      }
    }
    // TODO: Llenar con vacíos cuando los días asignados sean mayores a los que tiene el mes
    const lengthDifference = 7 - weekdays.length;
    return new Array(lengthDifference).fill("").concat(weekdays);
  }

  public weekDays = ["D", "L", "M", "X", "J", "V", "S"];
  public weeksInMonth = [1, 2, 3, 4, 5, 6];
  public months: AcademicYearMonth[] = [
    {
      name: "Marzo",
      dayAmount: 31,
      year: 2020,
      startingDay: "D",
      startingWeekDay: 1,
      holidays: [
        { day: 23, description: "Puente Turístico" },
        {
          day: 24,
          description: "Día Nacional de la Memoria por la Verdad y la Justicia",
        },
      ],
    },
    {
      name: "Abril",
      dayAmount: 30,
      year: 2020,
      startingDay: "X",
      startingWeekDay: 3,
      holidays: [
        {
          day: 2,
          description: "Día de los Veteranos y Caídos en la Guerra de Malvinas",
        },
        {
          day: 10,
          description: "Viernes Santo",
        },
        {
          day: 12,
          description: "Domingo de Pascuas",
        },
      ],
    },
    {
      name: "Mayo",
      dayAmount: 31,
      year: 2020,
      startingDay: "V",
      startingWeekDay: 1,
      highlightedDates: [
        {
          startingDay: 26,
          endingDay: 29,
          classes: [],
          description: "Dictado de clases para el 1er Nivel",
          symbol: "*",
        },
      ],
      holidays: [
        {
          day: 1,
          description: "Día del Trabajador",
        },
        {
          day: 25,
          description: "Revolución de Mayo",
        },
      ],
    },
    {
      name: "Junio",
      dayAmount: 30,
      year: 2020,
      startingDay: "L",
      startingWeekDay: 1,
    },
    {
      name: "Julio",
      dayAmount: 31,
      year: 2020,
      startingDay: "X",
      startingWeekDay: 1,
    },
    {
      name: "Agosto",
      dayAmount: 31,
      year: 2020,
      startingDay: "S",
      startingWeekDay: 1,
    },
    {
      name: "Septiembre",
      dayAmount: 30,
      year: 2020,
      startingDay: "M",
      startingWeekDay: 1,
    },
    {
      name: "Octubre",
      dayAmount: 31,
      year: 2020,
      startingDay: "J",
      startingWeekDay: 1,
    },
    {
      name: "Noviembre",
      dayAmount: 30,
      year: 2020,
      startingDay: "D",
      startingWeekDay: 1,
    },
    {
      name: "Diciembre",
      dayAmount: 31,
      year: 2020,
      startingDay: "M",
      startingWeekDay: 1,
    },
    {
      name: "Febrero",
      dayAmount: 28,
      year: 2021,
      startingDay: "X",
      startingWeekDay: 1,
    },
    {
      name: "Marzo",
      dayAmount: 31,
      year: 2021,
      startingDay: "L",
      startingWeekDay: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

// Representa un mes dentro del calendario académico
export interface AcademicYearMonth {
  name: string;
  year: number;
  dayAmount: number;
  startingDay: WeekDay;
  startingWeekDay: number;
  highlightedDates?: HighlightedDate[];
  holidays?: Holiday[];
  examWeeks?: ExamWeek[];
}

// Día feriado
export interface Holiday {
  day: number;
  description: string;
}

// Semana de exámenes
export interface ExamWeek {
  startingDay: number;
  endingDay: number;
  description: string;
}

// Fecha particular, señalada en el calendario
export interface HighlightedDate {
  startingDay: number;
  endingDay: number;
  description: string;
  classes: string[];
  symbol: string;
}

export type WeekDay = "D" | "L" | "M" | "X" | "J" | "V" | "S";
