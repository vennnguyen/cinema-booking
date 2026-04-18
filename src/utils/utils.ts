import type { SelectedCombo } from "../types/combo";
import type { Seat } from "../types/seat";
import type { Showtime } from "../types/showtime";
import type { User } from "../types/user";
const getAge = (dob: string) => {
  const birth = new Date(dob);
  if (isNaN(birth.getTime())) return null;

  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();

  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};
const getPriceByAge = (seat: Seat, age: number | null) => {
  const normalPrice = Number(seat.prices?.[0]?.price ?? 0);
  const specialPrice = Number(seat.prices?.[1]?.price ?? normalPrice);

  if (age !== null && (age <= 22 || age >= 60)) {
    return specialPrice;
  }

  return normalPrice;
};
export const calculateTotalPrice = (
  selectedSeats: Seat[],
  selectedCombos: SelectedCombo[] = [],
  user: User | null
) => {
  const age = user?.dateOfBirth ? getAge(user.dateOfBirth) : null;

  const seatTotal = selectedSeats
    .filter((s) => s.isPrimary !== false)
    .reduce((sum, s) => sum + getPriceByAge(s, age), 0);

  const comboTotal = selectedCombos.reduce(
    (sum, c) => sum + Number(c.price) * c.quantity,
    0
  );

  return seatTotal + comboTotal;
};
export const formatTime = (timeStr: string|undefined) => {
  if (!timeStr) return "";

  if (timeStr.includes(":") && timeStr.length <= 8) {
    return timeStr.slice(0, 5);
  }

  return new Date(timeStr).toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  });
};
//chia loại ghế theo hàng Ghế thường D1,D2,D3 Vip H1,H2
export const groupSelectedSeats = (
  selectedSeats: Seat[],
  user: User | null
) => {
  const primary = selectedSeats.filter((s) => s.isPrimary !== false);

  // ===== TÍNH TUỔI =====
  const getAge = (dob: string) => {
    const birth = new Date(dob);
    if (isNaN(birth.getTime())) return null;

    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();

    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  };

  const age = user?.dateOfBirth ? getAge(user.dateOfBirth) : null;

  // ===== CHỌN GIÁ =====
  const getPriceByAge = (seat: Seat) => {
    const normalPrice = Number(seat.prices?.[0]?.price ?? 0);
    const specialPrice = Number(seat.prices?.[1]?.price ?? normalPrice);

    if (age === null) return normalPrice;

    if (age <= 22 || age >= 60) {
      return specialPrice;
    }

    return normalPrice;
  };

  // ===== GROUP GHẾ =====
  const thuong = primary.filter((s) => s.seatTypeId === 1);
  const vip = primary.filter((s) => s.seatTypeId === 2);
  const doi = primary.filter((s) => s.seatTypeId === 3);

  const result = [];

  // ===== GHẾ THƯỜNG =====
  if (thuong.length) {
    result.push({
      label: "Ghế thường",
      seatLabel: thuong.map((s) => `${s.seatRow}${s.seatColumn}`).join(", "),
      price: thuong.reduce((sum, s) => sum + getPriceByAge(s), 0),
      count: thuong.length,
    });
  }

  // ===== GHẾ VIP =====
  if (vip.length) {
    result.push({
      label: "Ghế VIP",
      seatLabel: vip.map((s) => `${s.seatRow}${s.seatColumn}`).join(", "),
      price: vip.reduce((sum, s) => sum + getPriceByAge(s), 0),
      count: vip.length,
    });
  }

  // ===== GHẾ ĐÔI =====
  if (doi.length) {
    result.push({
      label: "Ghế đôi",
      seatLabel: doi
        .map((s) => {
          const partnerColumn =
            s.seatColumn % 2 === 0 ? s.seatColumn - 1 : s.seatColumn + 1;

          const partner = selectedSeats.find(
            (p) =>
              p.isPrimary === false &&
              p.seatRow === s.seatRow &&
              p.seatColumn === partnerColumn
          );

          return `${s.seatRow}${s.seatColumn}·${s.seatRow}${
            partner?.seatColumn ?? "?"
          }`;
        })
        .join(", "),
      price: doi.reduce((sum, s) => sum + getPriceByAge(s), 0),
      count: doi.length,
    });
  }
  return result;
};

export const calculateTotalPriceOneRow = (selectedSeats: Seat[]) => {
  return selectedSeats
    .filter((s) => s.isPrimary !== false)
    .reduce((sum, s) => sum + Number(s.prices?.[0]?.price ?? 0), 0);
};

export const groupSeatsByRow = (seats: Seat[]): Record<string, Seat[]> => {
  return seats.reduce(
    (acc, s) => {
      if (!acc[s.seatRow]) acc[s.seatRow] = [];
      acc[s.seatRow].push(s);
      return acc;
    },
    {} as Record<string, Seat[]>,
  );
};

export const filterShowtimesByDate = (
  showtimes: Showtime[],
  selectedDate: string | null,
): Showtime[] => {
  if (!selectedDate) return showtimes;
  return showtimes.filter((show) => {
    const showDate = new Date(show.releaseDate).toISOString().slice(0, 10);
    return showDate === selectedDate;
  });
};
export const formatDate = (isoDate: string): string => {
  return new Date(isoDate).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
export const groupShowtimesByCinema = (
  showtimes: Showtime[],
): Record<string, Record<string, Showtime[]>> => {
  return showtimes.reduce(
    (acc, show) => {
      const cinemaName = show.room.cinema.cinemaName;
      const roomType = show.room.roomtype.roomTypeName;

      if (!acc[cinemaName]) acc[cinemaName] = {};
      if (!acc[cinemaName][roomType]) acc[cinemaName][roomType] = [];
      // Kiểm tra trùng giờ trước khi push
      const isDuplicate = acc[cinemaName][roomType].some(
        (s) => s.startTime === show.startTime,
      );

      if (!isDuplicate) {
        acc[cinemaName][roomType].push(show);
      }

      return acc;
    },
    {} as Record<string, Record<string, Showtime[]>>,
  );
};
