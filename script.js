const defaultPeriod = 'weekly';
const cards = [];

const main = document.querySelector('.main')
const periodsContainer = document.querySelector('.timeframe-switch')

fetch('data.json').then((response) => {
	if (!response.ok) {
	alert("Data couldn't load please refresh") 
	return;
	}
	return response.json();
}).then((data) => {
	populateDOM(data);
})

function populateDOM(data) {
		data.forEach(createCard);
		setDefaultPeriod()
}

function stringToSelector(str) {
	return str 
	.toLowerCase()
	.trim()
	.replace(/\s+/g, '-');
}

function titleToClass(title) {
 	return['card', stringToSelector(title)];
}

function createCard(item) {
 	// Tab to edit
 	const card = document.createElement('section')
 	card.classList.add(...titleToClass(item.title))
	
 	const iconContainer = document.createElement('div')
 	iconContainer.className = 'activity-icon';
 	const icon = document.createElement('img');
 	icon.setAttribute('src', titleToImageSrcValue(item.title));
 	icon.className = 'icons';
	
 	iconContainer.append(icon);
 	card.append(iconContainer);
	
 	const activitySection = document.createElement('div')
 	activitySection.className = 'activity'
	
 	const activityTop = document.createElement('div')
 	activityTop.className = 'activity-top'
	
 	const activityTitle = document.createElement('h5')
 	activityTitle.className = 'activity-title'
 	activityTitle.textContent = item.title
	
 	activityTop.append(activityTitle)
	
 	const moreIcon = document.createElement('img')
 	moreIcon.setAttribute('src', 'images/icon-ellipsis.svg')
 	moreIcon.className = 'more-icon'
	
 	activityTop.append(moreIcon)
	
 	activitySection.append(activityTop)
	
	function createTimeframes(period, { current, previous }) {
	const times = document.createElement('div')
	times.className = 'times'
	
	const currentTime = document.createElement('span')
	currentTime.className = 'current'
	currentTime.dataset.period = period
	currentTime.textContent = `${current}hrs`
	
	times.append(currentTime)
	
	const prevTime = document.createElement('span')
	prevTime.className = 'previous'
	prevTime.dataset.period = period
	prevTime.textContent = prevhrs(period, previous)

	times.append(prevTime)
	activitySection.append(times)
}
	
 	for (const [period, timeframe] of Object.entries(item.timeframes)) {
 		createTimeframes(period, timeframe)
 	}
	
 	card.append(activitySection)
 	main.append(card)
 	cards.push(card)
 }

function prevhrs(period, previous) {
	// Tab to edit
	switch(period) {
		case 'daily': return `Yesterday - ${previous}hrs`;
		case 'weekly': return `Last Week - ${previous}hrs`;
		case 'monthly': return `Last Month - ${previous}hrs`;
		default: return `${current}hrs`;
	}
}

function titleToImageSrcValue(title) {
	return 'images/icon-' + stringToSelector(title) + '.svg'
}

function assignCardPeriod(card, period) {
	card.querySelectorAll('.current, .previous')
	.forEach(el => {
		if (el.dataset.period === period) {
			el.dataset.active = '';
		} else {
			delete el.dataset.active;
		}
	})
}

function setDefaultPeriod() {
  const btns = Array.from(periodsContainer.querySelectorAll('[data-period]'));
  const btn = btns.find(el => el.dataset.period === defaultPeriod);
  selectPeriod(btn);
}

function selectPeriod(btn) {
	periodsContainer.querySelectorAll('[aria-current]')
	.forEach(el => el.removeAttribute('aria-current'))
	
	cards.forEach((card) => {
	assignCardPeriod(card, btn.dataset.period)
	})
	
	btn.setAttribute('aria-current', 'true')
}

periodsContainer.addEventListener('click', (e) => {
	const btn = e.target.closest('[data-period]')
	if (!btn) return;

	const periods = periodsContainer.querySelectorAll('[data-period]')
	
	periods.forEach((el) => {
		el.removeAttribute('data-current')
	})
	btn.setAttribute('data-current', '')
	
	selectPeriod(btn);
})