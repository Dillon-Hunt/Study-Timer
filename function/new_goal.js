function new_goal(e) {
    e.preventDefault()
    
    if (Number(document.querySelector('.new_goal_name').value) === NaN) alert('Please enter a number.')
    else {
        localStorage.setItem('goal', Number(document.querySelector('.new_goal_name').value))
        document.querySelector('.new_goal_name').value = ''
    
        create_graph(parseInt(localStorage.getItem('week_index')))
    }
}