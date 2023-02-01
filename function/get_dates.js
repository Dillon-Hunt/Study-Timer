function add_days(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

function get_dates() {
    let dates = []
    let date_object = new Date()
    let prev_monday = new Date()

    prev_monday.setDate((prev_monday.getDate() - (prev_monday.getDay() + 6) % 7) + (7 * parseInt(localStorage.getItem('week_index'))))
    date_object = add_days(prev_monday, 6)

    let date = new Date(prev_monday)

    while (date <= date_object) {
        dates = [...dates, `${date.getFullYear()}-${date.getMonth() + 1< 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`]
        date.setDate(date.getDate() + 1)
    }



    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const start_date_split = dates[0].split('-')
    const end_date_split = dates[6].split('-')
    const start_date = new Date(+start_date_split[0], start_date_split[1] - 1, +start_date_split[2])
    const end_date = new Date(+end_date_split[0], end_date_split[1] - 1, +end_date_split[2])

    document.querySelector('.dates').textContent = `${start_date.getDate()} ${months[start_date.getMonth()]} - ${end_date.getDate()} ${months[end_date.getMonth()]}`

    return dates
}
