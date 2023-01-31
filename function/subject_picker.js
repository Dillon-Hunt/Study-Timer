function pick_subject(e) {
    const dates = get_dates()

    let bars = Array(7).fill(0)
    let max_value = 1
    let total_time = 0

    dates.forEach((date, id) => {
        getData().filter(subject => e.target.value === 'all_subjects' || subject.title === e.target.value).forEach(subject => {
            subject.dates.forEach((subjectDate) => {
                if (subjectDate.date === date) {
                    subjectDate.times.forEach((time) => {
                        bars[dates.indexOf(date)] += parseInt(time.duration)
    
                    })
                }
            }) 
        })
    
        if (max_value < bars[id]) {
            max_value = bars[id]
        }
    
        total_time += bars[id]

        bars.forEach((bar, id) => {
            document.querySelector('.columns').children[id + 1].style.height = `${(bar / max_value) * 100}%`
            document.querySelector('.columns').children[id + 1].children[0].textContent = bar === 0 ? '' : `${Math.floor(bar / 3600)}h ${Math.floor((bar % 3600) / 60)}m`
        })
    })

    set_total_time(total_time)
}