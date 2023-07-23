import './styles/main.scss'

import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import focus from '@alpinejs/focus'

Alpine.plugin(focus)
Alpine.plugin(intersect)


document.addEventListener('alpine:init', async () => {

  Alpine.data('appState', () => ({    
    modalOpen: false,    
    modalTitle: 'Loading...',
    modalContent: '',
    showModalDialog(title, content)
    {
      this.modalTitle = title
      this.modalOpen = true
      this.modalContent = content
    },
    async init () {      
    }
  }))

  
})

Alpine.start()
