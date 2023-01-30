function set_total_time(total_time) {
    let hours = Math.floor(total_time / 3600)
    let minutes = Math.floor((total_time % 3600) / 60)
    document.querySelector('.total').innerHTML = `${hours} ${hours === 1 ? 'hour' : 'hours'} ${minutes} ${hours === 1 ? 'minute' : 'minutes'}.`
}