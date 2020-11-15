// Переменные с элементами попапа
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__button-close');
const editButton = document.querySelector('.profile__button_type_edit');
const form = document.querySelector('.popup__form');
const formInputName = document.querySelector('.popup__input_type_name');
const formInputJob = document.querySelector('.popup__input_type_job');


// Переменные с элементами секции профиль
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// Переменные с элементами секции template-elements
const initialCards = [
	{
			name: 'Архыз',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
			name: 'Челябинская область',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
			name: 'Иваново',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
			name: 'Камчатка',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
			name: 'Холмогорский район',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
			name: 'Байкал',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];

const cardsComtainer =  document.querySelector('.elements');



//Открывает попап для редактирование профиля
function showPopup() {
	popup.classList.add('popup_opened');
	formInputName.value = profileTitle.textContent
	formInputJob.value = profileSubtitle.textContent
}

//Закрывает попап для редактирование профиля
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

// Сохраняет данные профиля
function submitForm(event) {
	event.preventDefault()
	profileTitle.textContent = formInputName.value;
	profileSubtitle.textContent = formInputJob.value;
	closePopup();
}


// Назначает события на клики по кнопкам
editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
popup.addEventListener('mousedown', popupClickHandler);
form.addEventListener('submit', submitForm);

//Загружает карточки
function addCards (card) {
	const templateCards = document.querySelector('.template-elements').content.cloneNode(true);
	const cardName = card.name;
	const imageLink = card.link;
	templateCards.querySelector('.elements__title').textContent = cardName;
	templateCards.querySelector('.elements__image').setAttribute('src', imageLink);

	cardsComtainer.append(templateCards);
}

// Заполняет карточки информацией из массива initialCards
initialCards.forEach(addCards);
