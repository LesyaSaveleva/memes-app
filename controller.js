class Controller {
    constructor() {
        this.model = new Model()
        
        this.view = new View({
            onSelectMem: this.handleSelectMem,   // <-- вместо bindClick
            onTextTop: this.handleTextTop,       // <-- вместо bindInputTop
            onTextBottom: this.handleTextBottom,

        });

        this.api = new Api();
    }

    init() {
        this.api.fetchMemes()
            .then(res => {
                const memes = res.data.memes;
                this.model.setMemes(memes);
                this.view.renderNameList(memes);

            // на старте инпуты заблокированы
                this.view.disableInputs();                         
            })

        .catch(error => {
            console.error('Ошибка загрузки:', error);
        });

    }

    handleSelectMem = (id) => {
        if (!id) {
            // если выбрали "Выберите мем"
            this.view.clearImage();
            this.view.disableInputs();
            return;
        }
        const data = this.model.getMemNameUrl(id);
        this.view.renderImgList(data);
        this.view.enableInputs();
    }

    handleTextTop = (text) => {
        this.view.renderTextTop(text);
    }

    handleTextBottom = (text) => {
        this.view.renderTextBottom(text);
    }

    handleModellselectMem = (selectMem) => {
      return  this.model.getMemNameUrl(selectMem);
    }

    handleViewImgMemes = (selectedMemData) => {
        this.view.renderImgList(selectedMemData);
    }

   handleViewTexTop = (TextTopInput) => {
    this.view.renderTextTop(TextTopInput);
   }

   handleViewTexBottom = (TextBottomInput) => {
    this.view.renderTextBottom(TextBottomInput);
   }

}