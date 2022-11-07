document.getElementById("btnAddUser").onclick = () => {
  var user = new User();
  user.email = document.querySelector("#inputEmail").value;
  user.password = document.querySelector("#inputPassword").value;
  user.passwordConfirm = document.querySelector("#inputPasswordConfirm").value;
  user.name = document.querySelector("#inputName").value;
  user.gender = document.querySelector("input[type=radio]:checked")?.value;
  user.phone = document.querySelector("#inputPhoneNumber").value;
  var valid = true;
  valid =
    validation.checkEmpty(user.email, "err-required-email", "Email") &
    validation.checkEmpty(user.password, "err-required-pw", "PassWord") &
    validation.checkEmpty(user.passwordConfirm,"err-required-pwc", "PassWord Confirm") &
    validation.checkEmpty(user.name, "err-required-name", "Name") &
    validation.checkEmpty(user.phone, "err-required-phone", "Phone");
  valid &= validation.checkPhone(user.phone, "err-phone", "Phone");
  valid &= validation.checkEmail(user.email, "err-email", "Email");
  valid &= validation.checkMatch(user.password, user.passwordConfirm, "err-match");

  if (!valid) {
    return;
  }
  if(user.gender === "1") {
    user.gender = true;
  }
  if(user.gender === "0") {
    user.gender = false;
  }
  delete user.passwordConfirm;
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: user,
  });

  promise.then((res) => {
    console.log(res.data.content);
    alert('Đăng ký thành công');
    document.location = "/index.html";
  });

  promise.catch((err) => {
    console.log(err);
  });
};
