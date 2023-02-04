function create_graph() {
    let bars = Array(7).fill(0)
    let subjects = []
    let maxValue = 1
    let maxSubject = 1
    let total_time = 0

    const dates = get_dates()
    
    dates.forEach((date, id) => {
        getData().forEach((subject) => {

            if (subjects.find(item => item.title === subject.title) === undefined) subjects.push({ title: subject.title, time: 0 })
            if (subject.dates.find(item => item.date === date) === undefined) return

            const additional_duration = subject.dates.find(item => item.date === date).times.map((time) => time.duration).reduce((a, b) => a + b, 0)
            bars[dates.indexOf(date)] += additional_duration
            subjects.find(item => item.title === subject.title).time += additional_duration

            const subject_object = subjects.find(item => item.title === subject.title)
    
            if (maxSubject < subject_object.time) maxSubject = subject_object.time
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
    update_goal(total_time / (localStorage.getItem('goal') * 3600))

    document.querySelector('.goal_text').textContent = `Goal: ${localStorage.getItem('goal')} Hour${localStorage.getItem('goal') == 1 ? '' : 's'}`

    return [subjects, maxSubject]
}