const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__button-close');
const editButton = document.querySelector('.profile__button_type_edit');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const form = document.querySelector('.popup__form');
const formInputName = document.querySelector('.popup__input_type_name');
const formInputJob = document.querySelector('.popup__input_type_job');

function showPopup() {
	popup.classList.add('popup_opened');
	formInputName.value = profileTitle.textContent
	formInputJob.value = profileSubtitle.textContent
}

function closePopup() {
	popup.classList.remove('popup_opened')
	formInputName.value = ''
	formInputJob.value = ''
}

function popupClickHandler(event) {
	if (event.target.classList.contains('popup'))	{
		closePopup()
	}
}

function submitForm(event) {
	event.preventDefault()
	profileTitle.textContent = formInputName.value;
	profileSubtitle.textContent = formInputJob.value;
	closePopup();
}


editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
popup.addEventListener('mousedown', popupClickHandler);
form.addEventListener('submit', submitForm);

