function update_time() {
    if (document.querySelector('.subject_picker_timer').disabled === true) {

        const time = Math.floor(new Date().getTime() - localStorage.getItem('start_time'))
        const hours = Math.floor(time / 3600000)
        const minutes = Math.floor((time % 3600000) / 60000)
        const seconds = Math.floor((time % 60000) / 1000)

        document.querySelector('.subject_timer').textContent = `${hours}h ${minutes}m ${seconds}s`

        setTimeout(update_time, 1000)
    }
}

function subject_timer() {

    let date = new Date
    date = `${date.getFullYear()}-${date.getMonth() + 1< 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`

    if (document.querySelector('.subject_picker_timer').disabled === false) {
        document.querySelector('.subject_timer').textContent = 'Stop Timer'
        document.querySelector('.subject_picker_timer').disabled = true

        localStorage.setItem('subject', document.querySelector('.subject_picker_timer').value)
        localStorage.setItem('start_time_24h', new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric' }))
        localStorage.setItem('start_time', new Date().getTime())

        update_time()
    } else {
        document.querySelector('.subject_timer').textContent = 'Start Timer'
        document.querySelector('.subject_picker_timer').disabled = false
        document.querySelector('.subject_picker_timer').style.opacity = '1'

        const selected_subject = localStorage.getItem('subject')
        const selected_date = date
        const start_time_24h = localStorage.getItem('start_time_24h')
        const time = Math.floor((new Date().getTime() - localStorage.getItem('start_time')) / 1000)

        if (time > 0) {
            const data = getData()

            let subject_index = data.findIndex((subject) => subject.title === selected_subject)
            let date_index = subject_index === -1 ? -1 : data[subject_index].dates.findIndex((date) => date.date === selected_date)

            if (subject_index === -1) {
                data.push({
                    title: subject,
                    dates: [{
                        date: selected_date,
                        times: [{
                            start_time: start_time_24h,
                            duration: time
                        }]
                    }]
                })
            } else if (date_index === -1) {
                data[subject_index].dates.push({
                    date: selected_date,
                    times: [{
                        start_time: start_time_24h,
                        duration: time
                    }]
                })
            } else {
                data[subject_index].dates[date_index].times.push({
                    start_time: start_time_24h,
                    duration: time
                })
            }

            localStorage.setItem('data', JSON.stringify(data))

            const [subjects, max_subject] = create_graph(localStorage.setItem('week_index', 0))
            list_subjects(subjects, max_subject)
        }
    }
}