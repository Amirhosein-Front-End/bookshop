const signupValidate = signup => {
  
  // const errors = new Object();
  const errors = {};

  if (!signup.firstName.trim()) {
    errors.firstName = "وارد کردن نام الزامی میباشد";
  } else {
    delete errors.firstName;
  }

  if (!signup.lastName.trim()) {
    errors.lastName = "وارد کردن نام خانوادگی الزامی میباشد";
  } else {
    delete errors.lastName;
  }

  if (!signup.username.trim()) {
    errors.username = "وارد کردن ایمیل الزامی میباشد";
  // } else if (!/\S+@\S+\.\S+/.test(signup.username)) {
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:[a-zA-Z0-9-]+\.[a-zA-Z0-9]+)+$/.test(signup.username)) {
    errors.username = "ایمیل نامعتبر میباشد";
  } else {
    delete errors.username;
  }

  if (!signup.password.trim()) {
    errors.password = "واردکردن رمزعبور الزامی میباشد";
  } else if (signup.password.length < 4) {
    errors.password = "حداقل طول رمزعبور باید ۴ باشد";
  } else {
    delete errors.password;
  }

  return errors;

};

export default signupValidate;