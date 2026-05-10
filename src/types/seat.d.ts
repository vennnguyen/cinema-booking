export interface SeatType {
  seatTypeId: number;
  seatTypeName: string;
  description: string;
  status: boolean;
}
export interface Price {
  priceTicketId: number;
  ticketTypeId: number;
  ticketTypeName: string;
  price: number;
}

export type SeatStatus = "AVAILABLE" | "HOLDING" | "BOOKED";

export interface Seat {
  showTimeSeatId: number;
  seatId: number;
  seatRow: string;
  seatColumn: number;
  seattype: SeatType;
  seatTypeId: number;
  status: SeatStatus;
  heldUntil: string | null;
  prices: Price[];
  isPrimary?: boolean; // dùng để không tính tiền 2 lần ghế đôi
}

export interface SeatResponse {
  data: Seat[];
}
