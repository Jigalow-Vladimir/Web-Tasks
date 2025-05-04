let value = prompt("Введите имя:");

if (value.toLowerCase() === "admin") {
    alert("Привіт адміністратор");
} else {
    alert("Доступ обмежений! " + 
		"Зверніться до адміністратора системи");
}