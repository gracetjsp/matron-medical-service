function sendEmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value
  };

  emailjs.send("service_8g3ujqk", "template_k0mgpe6", templateParams)
    .then(() => {
      alert("Email sent successfully!");
      document.querySelector(".contact-form").reset();
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    });
}