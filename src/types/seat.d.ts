export interface Seat {
  seatId: number;
  seatTypeId: number;
  roomId: number;
  seatRow: string;
  seatColumn: number;
  status: boolean;
}
export interface SeatResponse {
  data: Seat[];
}
