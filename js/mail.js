function SendMSG(e) {
  e.preventDefault();
  let nam_txt = document.querySelector("#name");
  let email_txt = document.querySelector("#email");
  let subject_txt = document.querySelector("#subject");
  let message_txt = document.querySelector("#message");

  let body = "Name:" + nam_txt.value + ",  " + "email:" + email_txt.value + ",  " + "subject:" + subject_txt.value + ",  " + "Message : " + message_txt.value;

  let temp = {
    from_name: nam_txt.value,
    to_name: "Muhammed Nahas N",
    message: body
  };

  if (
    nam_txt.value === "" ||
    email_txt.value === "" ||
    subject_txt.value === "" ||
    message_txt.value === ""
  ) {
    return alert("Please Fill Complete Details!!");
  }

  // ✅ Updated with your EmailJS credentials
  emailjs.send('service_y1vs8la', 'template_1eyfnhb', temp, 'uPrpl4Nh9ncLN8zhv')
    .then((res) => {
      if (res.status === 200) {
        success();
      } else {
        failure();
      }
    })
    .catch(() => failure());

  nam_txt.value = "";
  email_txt.value = "";
  subject_txt.value = "";
  message_txt.value = "";
}

function success() {
  let thank = document.querySelector(".msg-pop-up");
  thank.style.display = "block";
  setTimeout(() => {
    thank.style.display = "none";
  }, 1000);
}

function failure() {
  let fail = document.querySelector(".failed-msgpop");
  fail.style.display = "block";
  setTimeout(() => {
    fail.style.display = "none";
  }, 1000);
}
