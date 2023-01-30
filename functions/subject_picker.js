function pick_subject(e) {
    const dates = get_dates()

    let bars = Array(7).fill(0)
    let max_value = 1
    let total_time = 0

    dates.forEach((date, id) => {
        getData().filter(course => e.target.value === 'all_courses' || course.title === e.target.value).forEach(course => {
            course.dates.forEach((courseDate) => {
                if (courseDate.date === date) {
                    courseDate.times.forEach((time) => {
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