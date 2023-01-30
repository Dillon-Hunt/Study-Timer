function create_graph() {
    let bars = Array(7).fill(0)
    let subjects = []
    let maxValue = 1
    let maxSubject = 1
    let total_time = 0

    const dates = get_dates()
    
    dates.forEach((date, id) => {
        getData().forEach((course) => {

            if (subjects.filter(subject => subject.title === course.title).length === 0) subjects.push({ title: course.title, time: 0 })
            if (course.dates.length === 0) return
            
            course.dates.forEach((courseDate) => {
                if (courseDate.date === date) {
                    courseDate.times.forEach((time) => {
                        bars[dates.indexOf(date)] += parseInt(time.duration)
                        subjects.filter(subject => subject.title === course.title)[0].time += parseInt(time.duration)
                    })
                }
            })
    
            if (subjects.filter(subject => subject.title === course.title).length !== 0 && maxSubject < subjects.filter(subject => subject.title === course.title)[0].time) {
                maxSubject = subjects.filter(subject => subject.title === course.title)[0].time
                
            }
        })
    
        if (maxValue < bars[id]) {
            maxValue = bars[id]
        }
    
        total_time += bars[id]
    })
    
    bars.forEach((bar, id) => {
        document.querySelector('.columns').children[id + 1].style.height = `${(bar / maxValue) * 100}%`
        document.querySelector('.columns').children[id + 1].children[0].textContent = bar === 0 ? '' : `${Math.floor(bar / 3600)}h ${Math.floor((bar % 3600) / 60)}m`
    })

    set_total_time(total_time)

    return [subjects, maxSubject]
}