function attachEventsListeners() {
    document.querySelector('main').addEventListener('click', (ev) => {
        let daysValue;
        const input = Number(ev.target.parentNode.querySelector('input').value);

        if (ev.target.id == 'daysBtn') {
            daysValue = input;
        } else if (ev.target.id == 'hoursBtn') {
            daysValue = input / 24;
        } else if (ev.target.id == 'minutesBtn') {
            daysValue = input / 1440;
        } else if (ev.target.id == 'secondsBtn') {
            daysValue = input / 86400;
        } else {
            return;
        }

        document.getElementById('days').value = daysValue;
        document.getElementById('hours').value = daysValue * 24;
        document.getElementById('minutes').value = daysValue * 1440;
        document.getElementById('seconds').value = daysValue * 86400;
    })
}