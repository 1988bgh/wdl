export const emailJsHandler = (() => {
  const formEl = document.querySelector(".contact__form");

  const userName = document.querySelector("input[name='user_name']");
  const userTeam = document.querySelector("input[name='user_team']");
  const userPhone = document.querySelector("input[name='user_phone']");
  const userEmail = document.querySelector("input[name='user_email']");
  const userMessage = document.querySelector("textarea[name='user_message']");
  const sendBtn = document.querySelector("button[type='submit']");

  const bindEvent = () => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();

      const templateParams = {
        name: userName.value,
        phone: userPhone.value,
        email: userEmail.value,
        team: userTeam.value,
        message: userMessage.value,
      };

      emailjs.send("service_k4u8o14", "template_78uvfmn", templateParams).then(
        function (response) {
          alert("문의주셔서 감사합니다. 빠른 회신 드리겠습니다.");
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
  };

  const _initialize = () => {
    emailjs.init("-qKKnNB52Cc-Xmc7c");
    bindEvent();
  };

  return {
    init: _initialize,
  };
})();
