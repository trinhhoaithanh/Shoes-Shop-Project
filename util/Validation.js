var validation = {
  checkEmpty: (value, errId, name) => {
    if (value.trim() === "") {
      document.getElementById(errId).style.display = "block";
      document.getElementById(errId).innerHTML = `${name} không được bỏ trống!`;
      return false;
    }
    document.getElementById(errId).style.display = "none";
    return true;
  },
  checkPhone: (value, errId, name) => {
    if (value.trim() !== "") {
      var regexNumberPhone = new RegExp(/^[0-9]+$/);
      if (!regexNumberPhone.test(value)) {
        document.getElementById(errId).style.display = "block";
        document.getElementById(errId).innerHTML = `${name} phải là số!`;
        return false;
      }
      document.getElementById(errId).style.display = "none";
      return true;
    }
  },
  checkEmail: (value, errId, name) => {
    if (value.trim() !== "") {
      var regexEmail = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (!regexEmail.test(value)) {
        document.getElementById(errId).style.display = "block";
        document.getElementById(errId).innerHTML = `${name} không hợp lệ!`;
        return false;
      }
      document.getElementById(errId).style.display = "none";
      return true;
    }
  },
  checkMatch: (password, passwordConfirm, errId) => {
    if (password.trim() !== "" && passwordConfirm.trim() !== "") {
      if (password !== passwordConfirm) {
        document.getElementById(errId).style.display = "block";
        document.getElementById(
          errId
        ).innerHTML = `Password confirm phải giống với password!`;
        return false;
      }
      document.getElementById(errId).style.display = "none";
      return true;
    }
  },
};
