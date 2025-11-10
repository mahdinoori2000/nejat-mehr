import styles from "./DonatePopup.module.css";

function DonatePopup({ show, onClose }) {
  if (!show) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.popup}
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        <h2>💙 Support Nejat Mehr Charity Organization</h2>

        <p>
          If you would like to make a donation, please use the following bank details:
        </p>

        <div className={styles.bankInfo}>
          <p><strong>Beneficiary Name:</strong> Nejat Mehr Charity Organization</p>
          <p><strong>Account Number:</strong> 000101313763188</p>
          <p><strong>Bank Name:</strong> Azizi Bank</p>
          <p><strong>Bank Address:</strong> Zanbaq Square, Kabul City, Afghanistan</p>
          <p><strong>SWIFT Code:</strong> AZBAAFKA</p>
        </div>

        <div className={styles.bankInfo}>
          <h4>💶 For EUR Transfers:</h4>
          <p><strong>Bank:</strong> Banca Popolare di Sondrio, Italy</p>
          <p><strong>SWIFT Code:</strong> POSOIT22XXX</p>
          <p><strong>Account Number:</strong> IT13A0569611091CEDEU0623790</p>

          <h4>💷 For GBP Transfers:</h4>
          <p><strong>Account Number:</strong> IT66M0569611091CEDGB0623790</p>
        </div>

        <p className={styles.note}>
          💬 If you have any questions or if there is any issue with your contribution,
          please contact us on WhatsApp at <strong>+93 781 40 70 40</strong>.
        </p>

        <p className={styles.thanks}>Thank you for your kind support! 🙏</p>
      </div>
    </div>
  );
}

export default DonatePopup;