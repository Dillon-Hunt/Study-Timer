localStorage.setItem('week_index', 0)
if (localStorage.getItem('start_date') === null) localStorage.setItem('start_date', JSON.stringify(new Date()))
if (localStorage.getItem('goal') === null) localStorage.setItem('goal', 1)

const week_index = 0
const [subjects, max_subject] = create_graph(week_index)

list_subjects(subjects, max_subject)

document.querySelector('.subject_picker').addEventListener('change', (e) => pick_subject(e))
document.querySelector('.subject_timer').addEventListener('click', () => subject_timer())
document.querySelector('.export_data').addEventListener('click', () => export_data())
document.querySelector('.new_subject').addEventListener('submit', (e) => new_subject(e))
document.querySelector('.new_goal').addEventListener('submit', (e) => new_goal(e))


document.querySelector('.before').addEventListener('click', () => {
    document.querySelector('.after').classList.remove('current')
    const week_index = parseInt(localStorage.getItem('week_index')) - 1
    localStorage.setItem('week_index', week_index)
    const [subjects_new, max_subject_new] = create_graph(week_index)
    list_subjects(subjects_new, max_subject_new)
})

document.querySelector('.after').addEventListener('click', () => {
    const week_index = parseInt(localStorage.getItem('week_index')) + 1

    if (week_index !== 1) {
        week_index === 0 ? document.querySelector('.after').classList.add('current') : document.querySelector('.after').classList.remove('current')
        localStorage.setItem('week_index', week_index)
        const [subjects_new, max_subject_new] = create_graph(week_index)
        list_subjects(subjects_new, max_subject_new)
    }
})