

export const PaymentModal = () => {
    return (
        <div className="payment-modal-overlay" id="modalOverlay">
        <div className="payment-modal-content">
            <span className="close-button" id="closeModal">&times;</span>
            <h2>Hello!</h2>
            <p>This is a custom modal built with HTML, CSS, and JS.</p>
            <button id="actionButton">Got it!</button>
        </div>
        </div>
    )
}