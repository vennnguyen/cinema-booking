// types/seat.ts
export interface SeatPosition {
  area: number;
  row: number;
  column: number;
}

export enum SeatStatus {
  Available = 0,
  Booked = 1,
}

export enum SeatType {
  Standard = 1,
  Couple = 2,
}

export interface Seat {
  id: string;
  area: number;
  column: number;
  row: number;
  status: SeatStatus;
  ticketPrice: number;
  categoryCode: string;
  description: string;
  type: SeatType;
  seatsInGroup: SeatPosition[];
}

export interface RowSeat {
  name: string; // ví dụ: "P", "O"
  index: number;
  seats: Seat[];
}

export interface SeatMap {
  rows: RowSeat[];
}
