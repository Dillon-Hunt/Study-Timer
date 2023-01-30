function export_data() {
    let csv = ''

    const data = getData()

    let dates = []

    start_date = new Date(JSON.parse(localStorage.getItem('start_date')))
    current_date = new Date()

    let date = start_date

    while (date <= current_date) {
        dates = [...dates, (new Date(date)).toISOString().split('T')[0]]
        date.setDate(date.getDate() + 1)
    }

    let subjects = data.map((subject) => {
        return {
            title: subject.title,
            minutes: dates.map(date => {
                let time = subject.dates.find(date_object => date_object.date === date)

                return time === undefined ? 0 : Math.round(time.times.map(time => {
                    return parseInt(time.duration)
                }).reduce((a, b) => a + b, 0) / 6) / 10
            })
        }
    })

    csv += `${[
        '',
        ...dates
    ].join(',')}\r\n`

    subjects.forEach(subject => {
        csv += `${[
            subject.title,
            ...subject.minutes
        ].join(',')}\r\n`
    })

    var csv_download = document.createElement('a');  
    csv_download.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
    csv_download.target = '_blank';  
    csv_download.download = 'StudyMinutes.csv';  
    csv_download.click(); 

}