let idNumber = 0

class Warnings {  
  static badWarning(msg) {
    idNumber++

    let divId = 'warning'+idNumber
    
    //main div/container
    const warningDiv = document.createElement('div')
    warningDiv.id = divId
    warningDiv.className = 'bad-warning'

    const infoContainer = document.createElement('div')
    infoContainer.className = 'info-container'

    //icon div
    const iconContainer = document.createElement('div')
    iconContainer.className = 'icon-container'
    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-circle-exclamation fa-bounce fa-3x'
    icon.style.color = '#ffffff'
    iconContainer.appendChild(icon)

    //text div
    const textContainer = document.createElement('div')
    textContainer.className = 'text-container'
    const text = document.createElement('p')
    text.textContent = msg
    textContainer.appendChild(text)

    //div that slowly gets shorter
    const killDiv = document.createElement('div')
    killDiv.className = 'kill-div'        

    infoContainer.appendChild(iconContainer)
    infoContainer.appendChild(textContainer)
    warningDiv.appendChild(infoContainer)
    warningDiv.appendChild(killDiv)

    document.getElementById('warnings-container').appendChild(warningDiv)        

    setTimeout(()=>{
      killDiv.style.width = '0px'
    }, 50)

    setTimeout(()=>{
      const warning = document.getElementById(divId)
      if(warning != null){
        warning.remove()
      }
    }, 4000)
  }

  static goodWarning(msg) {
    idNumber++

    let divId = 'warning'+idNumber
    
    //main div/container
    const warningDiv = document.createElement('div')
    warningDiv.id = divId
    warningDiv.className = 'good-warning'

    const infoContainer = document.createElement('div')
    infoContainer.className = 'info-container'

    //icon div
    const iconContainer = document.createElement('div')
    iconContainer.className = 'icon-container'
    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-check fa-bounce fa-3x'
    icon.style.color = '#ffffff'
    iconContainer.appendChild(icon)

    //text div
    const textContainer = document.createElement('div')
    textContainer.className = 'text-container'
    const text = document.createElement('p')
    text.textContent = msg
    textContainer.appendChild(text)

    //div that slowly gets shorter
    const killDiv = document.createElement('div')
    killDiv.className = 'kill-div'        

    infoContainer.appendChild(iconContainer)
    infoContainer.appendChild(textContainer)
    warningDiv.appendChild(infoContainer)
    warningDiv.appendChild(killDiv)

    document.getElementById('warnings-container').appendChild(warningDiv)        

    setTimeout(()=>{
      killDiv.style.width = '0px'
    }, 50)

    setTimeout(()=>{
      const warning = document.getElementById(divId)
      if(warning != null){
        warning.remove()
      }
    }, 4000)
  }
}

export default Warnings