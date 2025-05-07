document.addEventListener("DOMContentLoaded", function () {
	// Create overlay container
	const overlay = document.createElement("div");
	overlay.className = "face-overlay";
	document.body.appendChild(overlay);

	// Create face components
	const face = document.createElement("div");
	face.className = "animated-face";
	overlay.appendChild(face);

	// Create eyes container
	const eyesContainer = document.createElement("div");
	eyesContainer.className = "eyes-container";
	face.appendChild(eyesContainer);

	// Create left eye
	const leftEye = document.createElement("div");
	leftEye.className = "eye left-eye";
	eyesContainer.appendChild(leftEye);

	// Create right eye
	const rightEye = document.createElement("div");
	rightEye.className = "eye right-eye";
	eyesContainer.appendChild(rightEye);

	// Create mouth container
	const mouthContainer = document.createElement("div");
	mouthContainer.className = "mouth-container";
	face.appendChild(mouthContainer);

	// Create mouth parts
	const mouthLeft = document.createElement("div");
	mouthLeft.className = "mouth-part mouth-left";
	mouthContainer.appendChild(mouthLeft);

	const mouthCenter = document.createElement("div");
	mouthCenter.className = "mouth-part mouth-center";
	mouthContainer.appendChild(mouthCenter);

	const mouthRight = document.createElement("div");
	mouthRight.className = "mouth-part mouth-right";
	mouthContainer.appendChild(mouthRight);

	// Animation sequence
	setTimeout(() => {
		leftEye.classList.add("appear");
	}, 500);

	setTimeout(() => {
		rightEye.classList.add("appear");
	}, 1000);

	setTimeout(() => {
		mouthLeft.classList.add("appear");
	}, 1500);

	setTimeout(() => {
		mouthCenter.classList.add("appear");
	}, 2000);

	setTimeout(() => {
		mouthRight.classList.add("appear");
	}, 2500);

	// Add click event to transition to the main site
	overlay.addEventListener("click", function () {
		overlay.classList.add("fade-out");

		// Wait for the fade-out animation to complete
		setTimeout(() => {
			overlay.style.display = "none";
			document.body.classList.add("show-site");
			document.body.classList.remove("loading");
		}, 1000);
	});
});

// URL для перехода
const telegramLink = "https://web.telegram.org/a/#7928021003";

// Обработчик перехода
function redirectToTelegram() {
	window.location.href = telegramLink;
}

// Назначение обработчиков на элементы
document
	.getElementById("telegramButton")
	.addEventListener("click", redirectToTelegram);
document
	.querySelector(".social-itelegram")
	.addEventListener("click", redirectToTelegram);

document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("reviewForm");

	// Проверяем, что форма существует
	if (form) {
		// Привязываем обработчик события на отправку формы
		form.addEventListener("submit", event => {
			event.preventDefault(); // Отменяем стандартное поведение отправки формы

			const name = form.querySelector('input[type="text"]').value.trim(); // Имя
			const text = form.querySelector("textarea").value.trim(); // Отзыв

			// Выводим данные в консоль
			console.log("Имя:", name);
			console.log("Отзыв:", text);

			// Очистить поля формы после отправки (если нужно)
			form.reset();
		});
	} else {
		console.error("Форма с id 'reviewForm' не найдена.");
	}
});
