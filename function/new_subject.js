function new_subject(e) {
    e.preventDefault()
    
    const subject = {
        'title': document.querySelector('.new_subject_name').value,
        'dates': []
    }

    let data = getData()
    data.push(subject)
    localStorage.setItem('data', JSON.stringify(data))
    document.querySelector('.new_subject_name').value = ''

    const [subjects, max_subject] = create_graph(localStorage.setItem('week_index', 0))
    list_subjects(subjects, max_subject)
}