function list_subjects(subjects, maxSubject) {
    let title = document.createElement('h2')
    title.classList.add('title')
    title.textContent = 'Top Subjects'

    let all_courses = document.createElement('option')
    all_courses.selected = true
    all_courses.value = 'all_courses'
    all_courses.textContent = 'All Courses'

    document.querySelector('.subject_picker').replaceChildren([])
    document.querySelector('.subject_picker_timer').replaceChildren([])
    document.querySelector('.subjects').replaceChildren([])
    document.querySelector('.subjects').appendChild(title)
    document.querySelector('.subject_picker').appendChild(all_courses)

    subjects.sort((a, b) => b.time - a.time).forEach((subject) => {
        let subjectElement = document.createElement('div')
        subjectElement.classList.add('subject')
        subjectElement.style.width = `${(subject.time / maxSubject) * 100}%`

        let subjectName = document.createElement('p')
        subjectName.classList.add('subject_name')
        subjectName.textContent = subject.title

        let subject_time = document.createElement('p')
        subject_time.classList.add('subject_time')
        subject_time.textContent = subject.time === 0 ? '' : `${Math.floor(subject.time / 3600)}h ${Math.floor((subject.time % 3600) / 60)}m`
    
        let subjectOptions = document.createElement('option')
        let subjectOptionsTimer = document.createElement('option')
        subjectOptions.value = subject.title
        subjectOptionsTimer.value = subject.title
        subjectOptions.textContent = subject.title
        subjectOptionsTimer.textContent = subject.title

        document.querySelector('.subject_picker').appendChild(subjectOptions)
        document.querySelector('.subject_picker_timer').appendChild(subjectOptionsTimer)
        subjectElement.appendChild(subjectName)
        subjectElement.appendChild(subject_time)
        document.querySelector('.subjects').appendChild(subjectElement)
    })
}