if (!("remove" in Element.prototype)) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

/* 
    var english-home
    var english-hobby
    var english-exp
    var english-resume
    var english-contact

    var dutch-home
    var dutch-hobby
    var dutch-exp
    var dutch-resume
    var dutch-contact
*/
AFRAME.registerComponent('select-page', {
    events: {
        click: function () {
            var el = this.el;
            switch(el.getAttribute('id')){
                case "main-circle":
                    var experienceUrl = '../index.html';
                    break;
            //english
                case "english-home":
                    var experienceUrl = '../english/index.html';
                    break;
                case "english-hobby":
                    var experienceUrl = '../english/hobby.html';
                    break;
                case "english-exp":
                    var experienceUrl = '../english/experiences.html';
                    break;
                case "english-resume":
                    var experienceUrl = '../english/cv.html';
                    break;
                case "english-contact":
                    var experienceUrl = '../english/contact.html';
                    break;
            //dutch
                case "dutch-home":
                    var experienceUrl = '../dutch/index.html';
                    break;
                case "dutch-hobby":
                    var experienceUrl = '../dutch/hobby.html';
                    break;
                case "dutch-exp":
                    var experienceUrl = '../dutch/experiences.html';
                    break;
                case "dutch-resume":
                    var experienceUrl = '../dutch/cv.html';
                    break;
                case "dutch-contact":
                    var experienceUrl = '../dutch/contact.html';
                    break;

                default:
                    console.log("You shouldn't be here (Page select)!")
                    break;
            }
            window.location.href = experienceUrl;
        }
    }
});

AFRAME.registerComponent('open-selection', {
    schema: {
        btn: {default:''}
      },        
      init: function () {
        var data = this.data;
        var el = this.el;   
        
        el.addEventListener('click', function () {            
         console.log(data.btn);
         switch(data.btn){
            case "english":
                //get the english buttons
                var englishhome = document.querySelector('#english-home');
                var englishhobby = document.querySelector('#english-hobby');
                var englishexp = document.querySelector('#english-exp');
                var englishresume = document.querySelector('#english-resume');
                var englishcontact = document.querySelector('#english-contact');
                switch(document.getElementById("english-main").className){
                    case "interactable":
                        document.getElementById("english-main").classList.add("active");
                        console.log(document.getElementById("english-main").className)

                        //set the english buttons to visible
                        englishhome.setAttribute('visible', "true");
                        englishhobby.setAttribute('visible', "true");
                        englishexp.setAttribute('visible', "true")
                        englishresume.setAttribute('visible', "true")
                        englishcontact.setAttribute('visible', "true")
                    break;
                    case "interactable active":
                        document.getElementById("english-main").classList.remove("active");
                        console.log(document.getElementById("english-main").className)
                        englishhome.setAttribute('visible', "false")
                        englishhobby.setAttribute('visible', "false")
                        englishexp.setAttribute('visible', "false")
                        englishresume.setAttribute('visible', "false")
                        englishcontact.setAttribute('visible', "false")
                    break;
                    default:
                        break;
                }
                

                break;
            case "dutch":
                //get the dutch buttons
                var dutchhome = document.querySelector('#dutch-home');
                var dutchhobby = document.querySelector('#dutch-hobby');
                var dutchexp = document.querySelector('#dutch-exp');
                var dutchresume = document.querySelector('#dutch-resume');
                var dutchcontact = document.querySelector('#dutch-contact');
                switch(document.getElementById("dutch-main").className){
                    case "interactable":
                        document.getElementById("dutch-main").classList.add("active");
                        console.log(document.getElementById("dutch-main").className)

                        //set the dutch buttons to visible
                        dutchhome.setAttribute('visible', "true")
                        dutchhobby.setAttribute('visible', "true")
                        dutchexp.setAttribute('visible', "true")
                        dutchresume.setAttribute('visible', "true")
                        dutchcontact.setAttribute('visible', "true")
                    break;
                    case "interactable active":
                        document.getElementById("dutch-main").classList.remove("active");
                        console.log(document.getElementById("dutch-main").className)
                        dutchhome.setAttribute('visible', "false")
                        dutchhobby.setAttribute('visible', "false")
                        dutchexp.setAttribute('visible', "false")
                        dutchresume.setAttribute('visible', "false")
                        dutchcontact.setAttribute('visible', "false")
                    break;
                    default:
                        break;
                }
                
                break;
         }
        });        
      }    

});
AFRAME.registerComponent('audiohandler', {
    init:function() {
       let playing = false;
       let audio = document.querySelector("#sound");
       this.el.addEventListener('click', () => {
            if(!playing) {
                audio.play();
             } else {
                audio.pause();
                audio.currentTime = 0;
             }
             playing = !playing;
             console.log(playing)
       });
    }
  })

  AFRAME.registerComponent('open-mainbuttons', {
      init: function () {
        var el = this.el;   
        var englishmain = document.querySelector('#english-main');
        var dutchmain = document.querySelector('#dutch-main');
        var mainpage = document.querySelector('#main-circle');
        var sound = document.querySelector('#sound-circle');
        el.addEventListener('click', function () {  
                          
                switch(el.className){
                    case "interactable":
                        el.classList.add("active");
                        console.log(el.className)

                        englishmain.setAttribute('visible', "true")
                        dutchmain.setAttribute('visible', "true")
                        mainpage.setAttribute('visible', "true")
                        sound.setAttribute('visible', "true")
                        
                    break;
                    case "interactable active":
                        el.classList.remove("active");
                        console.log(el.className)
                        englishmain.setAttribute('visible', "false")
                        dutchmain.setAttribute('visible', "false")
                        mainpage.setAttribute('visible', "false")
                        sound.setAttribute('visible', "false")
                    break;
                    default:
                        break;
                }
        });        
      }    

});