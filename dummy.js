function getData() {
    return localStorage.getItem('data') === null ? [] : JSON.parse(localStorage.getItem('data'))
}

/* let data = [
    {
        'title': 'Mathematical Methods',
        'dates': [
        ]
    },
    {
        'title': 'Specialist Mathematics',
        'dates': [
        ]
    },
    {
        'title': 'Physics',
        'dates': [
        ]
    },
    {
        'title': 'English',
        'dates': [
        ]
    },
    {
        'title': 'Chemistry',
        'dates': [
        ]
    },
    {
        'title': 'Digital Solutions',
        'dates': [
        ]
    }
] */