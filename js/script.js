class Portfolio {

    constructor() {

        this.menuIcon = document.querySelector ("#menuIcon")
        this.containerMenuUl = document.getElementsByName ("container-menu-li-class")
        this.menuItem = document.querySelector ("#menu-item-id")
        this.sliceContent = document.querySelector ("#slice-content-id")

        this.homeP = document.querySelector ("#home-p-id")

        this.effectHeader(this.homeP)

        //this.menuItem.style.display = 'none'
        this.menuIcon.addEventListener ("click", () => this.lilMenu())

    }

    lilMenu() { 

        if (this.menuItem.style.display == 'block') {
            this.menuItem.style.display = 'none'
        } else {
            this.menuItem.style.display = 'block'
        }

    }

    
    effectHeader(element) {
        
        this.messegerFront = element.innerHTML.split("")
        this.messegerFront.forEach((letter, i) => {

        element.innerHTML = ''
            setTimeout(() => {
                element.innerHTML += letter 
            }, 75 * i);
        });

    }
    

}

const portfolio= new Portfolio()