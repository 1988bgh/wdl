export const emailJsHandler = (() => {
  const formEl = document.querySelector(".contact__form");
  const agreeCheck = document.querySelector("input[name='agree']");
  const userName = document.querySelector("input[name='user_name']");
  const userTeam = document.querySelector("input[name='user_team']");
  const userPhone = document.querySelector("input[name='user_phone']");
  const userEmail = document.querySelector("input[name='user_email']");
  const userMessage = document.querySelector("textarea[name='user_message']");
  const sendBtn = document.querySelector("button[type='submit']");

  const bindEvent = () => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();

      if (userName.value == "") {
        alert("성함을 입력해주세요.");
        userName.focus();
        return false;
      }

      if (userTeam.value == "") {
        alert("소속을 입력해주세요.");
        userName.focus();
        return false;
      }

      if (userPhone.value == "") {
        alert("전화번호를 입력해주세요.");
        return false;
      } else if (isNaN(userPhone.value)) {
        alert("전화번호는 숫자만 입력가능합니다.");
        return false;
      }

      if (userEmail.value == "") {
        alert("이메일을 입력해주세요.");
        return false;
      } else {
        const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
        if (pattern.test(userEmail.value) === false) {
          alert("이메일 형식을 올바르게 작성해주세요.");
          return false;
        }
      }

      if (userMessage.value == "") {
        alert("내용을 입력해주세요.");
        return false;
      }

      const templateParams = {
        name: userName.value,
        phone: userPhone.value,
        email: userEmail.value,
        team: userTeam.value,
        message: userMessage.value,
      };

      emailjs.send("service_u5ex3e7", "template_78uvfmn", templateParams).then(
        function (response) {
          alert("문의주셔서 감사합니다. 빠른 회신드리겠습니다.");
          document.documentElement.scrollTop = 0;
        },
        function (error) {
          alert("전송에 실패했습니다. 다시 시도해 주세요.");
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
