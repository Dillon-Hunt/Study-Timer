function update_goal(percentage) {
    const width = document.querySelector('.goal_progress_container').offsetWidth
    const circle = document.querySelector('.goal_progress_circle')
    circle.setAttribute('cx', width / 2)
    circle.setAttribute('cy', width / 2)
    circle.style.strokeDashoffset = percentage < 1 ? percentage < .01 ? 449 : (450 - 450 * percentage) : 0

    const goal = document.querySelector('.goal_progress')
    goal.style.width = `${width}px`
    goal.style.height = `${width}px`

    document.querySelector('.goal_progress_text').textContent = `${Math.round(percentage * 1000) / 10}%`
}