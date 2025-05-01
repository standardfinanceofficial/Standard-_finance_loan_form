export default function Home() {
  return (
    <main style={{ maxWidth: '600px', margin: 'auto', padding: '20px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center' }}>STANDARD FINANCE LOAN APPLICATION</h2>
      <form action="https://formspree.io/f/mkgrgnky" method="POST" encType="multipart/form-data">
        <label>Full Name:</label><br /><input type="text" name="full_name" required /><br />
        <label>Date of Birth:</label><br /><input type="date" name="dob" required /><br />
        <label>Gender:</label><br />
        <select name="gender" required>
          <option>Male</option><option>Female</option><option>Other</option>
        </select><br />
        <label>Phone:</label><br /><input type="tel" name="phone" required /><br />
        <label>Email:</label><br /><input type="email" name="email" required /><br />
        <label>Address:</label><br /><input type="text" name="address" required /><br />
        <label>Loan Amount:</label><br /><input type="text" name="loan_amount" required /><br />
        <label>Loan Purpose:</label><br /><input type="text" name="loan_purpose" required /><br />
        <label>Repayment Period:</label><br /><input type="text" name="repayment_period" required /><br />
        <label>Upload ID:</label><br /><input type="file" name="valid_id" required /><br />
        <label>Upload Selfie:</label><br /><input type="file" name="selfie" required /><br />
        <label><input type="checkbox" name="declaration" required /> I declare this info is correct.</label><br /><br />
        <input type="hidden" name="_next" value="https://standardfinanceloanservice.com/thank-you" />
        <button type="submit">Submit Application</button>
      </form>
    </main>
  );
  }
