export default function PaymentModal({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{ background: "#fff", padding: 20, borderRadius: 8, minWidth: 300 }}>
        <h3>Pagar Oferta Premium</h3>
        <p>Aquí se integraría Stripe o PayPal.</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}