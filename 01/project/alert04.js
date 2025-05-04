let value = prompt("Введіть номер дня тижня");

if (value <= 0 || value > 7) {
	alert("Невірний формат.")
}
else
{
	switch (value) {
		case "6":
		case "7":
			alert("Вихідний");
		break;
		default:
			alert("Робочий день");
	}
}