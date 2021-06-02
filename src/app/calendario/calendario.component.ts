import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calendario",
  templateUrl: "./calendario.component.html",
  styleUrls: ["./calendario.component.scss"],
})
export class CalendarioComponent implements OnInit {
  public weekDays = ["D", "L", "M", "X", "J", "V", "S"];
  public months: AcademicYearMonth[] = [
    {
      name: "Marzo",
      dayAmount: 31,
      year: 2020,
      startingDay: "D",
      startingWeekDay: 1,
    },
    {
      name: "Abril",
      dayAmount: 30,
      year: 2020,
      startingDay: "M",
      startingWeekDay: 3,
    },
    {
      name: "Mayo",
      dayAmount: 31,
      year: 2020,
      startingDay: "D",
      startingWeekDay: 1,
    },
    {
      name: "Junio",
      dayAmount: 30,
      year: 2020,
      startingDay: "D",
      startingWeekDay: 1,
    },
    {
      name: "Julio",
      dayAmount: 31,
      year: 2020,
      startingDay: "D",
      startingWeekDay: 1,
    },
    {
      name: "Agosto",
      dayAmount: 31,
      year: 2020,
      startingDay: "D",
      startingWeekDay: 1,
    },
    {
      name: "Septiembre",
      dayAmount: 30,
      year: 2020,
      startingDay: "D",
      startingWeekDay: 1,
    },
    {
      name: "Octubre",
      dayAmount: 31,
      year: 2020,
      startingDay: "D",
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
      startingDay: "D",
      startingWeekDay: 1,
    },
    {
      name: "Febrero",
      dayAmount: 28,
      year: 2021,
      startingDay: "D",
      startingWeekDay: 1,
    },
    {
      name: "Marzo",
      dayAmount: 31,
      year: 2021,
      startingDay: "D",
      startingWeekDay: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

export interface AcademicYearMonth {
  name: string;
  year: number;
  dayAmount: number;
  startingDay: string;
  startingWeekDay: number;
  holidays?: Holiday[];
  examWeeks?: ExamWeek;
}

export interface Holiday {
  day: number;
  description;
}

export interface ExamWeek {
  startingDay: number;
  endingDay: number;
  description: string;
}
