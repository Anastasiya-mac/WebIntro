function registretionUser() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var regexp_name = /^[a-zа-яё]+$/gi;
    var regexp_email = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/i;
    var regexp_password = /^([a-z0-9_\.-]{5,100})/i;

    if (regexp_name.test(name) == false)
        return alert("Ошибка в поле ФИО");
    if (regexp_email.test(email) == false)
        return alert("Ошибка в поле электронная почта");
    if (regexp_password.test(password) == false)
        return alert("Ошибка в поле пароль");
    
    return alert("Вы успешно зарегистрировались " + name);
}

document.querySelector(".button").addEventListener("click", registretionUser);

