
interface Props {
  onClose: () => void;
}

const PaymentSuccessModal = ({ onClose }: Props) => (
  <div
    onClick={onClose}
    style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(0,0,0,0.5)",
      display: "flex", alignItems: "center", justifyContent: "center"
    }}
  >
    <div onClick={(e: React.MouseEvent) => e.stopPropagation()} style={{
      background: "#fff", borderRadius: "16px",
      padding: "40px 48px", textAlign: "center", minWidth: "320px"
    }}>
      <div style={{
        width: "72px", height: "72px", borderRadius: "50%",
        background: "#e6f9ee", display: "flex",
        alignItems: "center", justifyContent: "center",
        margin: "0 auto 20px"
      }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M8 18L15 25L28 11" stroke="#22c55e" strokeWidth="3.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#111", margin: "0 0 8px" }}>
        Thanh toán thành công!
      </h2>
      <p style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 24px" }}>
        Vui lòng kiểm tra email để xem vé
      </p>
      <button onClick={onClose} style={{
        background: "#034ea2", color: "#fff", border: "none",
        borderRadius: "8px", padding: "10px 32px",
        fontSize: "15px", fontWeight: "600", cursor: "pointer"
      }}>
        Đóng
      </button>
    </div>
  </div>
);

export default PaymentSuccessModal;