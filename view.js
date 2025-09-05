class View {
    constructor({onSelectMem, onTextTop, onTextBottom}) {
        this.memImgNode = document.querySelector('#memes-img');
        this.memListNode = document.querySelector('#select-mem');
        this.topTextMemNode = document.querySelector('#top-text');
        this.bottomTextMemNode = document.querySelector('#bottom-text');
        
        this.memListNode.addEventListener('change', (e) => {
            onSelectMem(e.target.value);
        });

        this.topTextMemNode.addEventListener('input', (e) => {
            onTextTop(e.target.value);
        });

        this.bottomTextMemNode.addEventListener('input', (e) => {
            onTextBottom(e.target.value);
        });
    }

    renderNameList(memes) {
        this.memListNode.innerHTML = `<option value="">Выберите мем</option>`+
        memes.map(m => `<option value="${m.id}">${m.name}</option>`)
        .join('');
    }

    _clearView() {
        this.memListNode.innerHTML = '';
    }

    _clearViewInput() {
        this.bottomTextMemNode.value = '';
        this.topTextMemNode.value = '';
    }

    disableInputs(){
        this.topTextMemNode.disabled = true;
        this.bottomTextMemNode.disabled = true;
    }

    enableInputs() {
        this.topTextMemNode.disabled = false;
        this.bottomTextMemNode.disabled = false;
    }

    clearImage() {
        this.memImgNode.innerHTML = '';
    }

    renderImgList(selectedMemData) {
        this.memImgNode.innerHTML = `<img class="image" src="${selectedMemData.selectMemUrl}" alt="${selectedMemData.selectMemName}>
                                    <div id="text-top" class="text-top"></div>
                                    <div id="text-bottom" class="text-bottom"></div>`
        
        this.topTextNode = document.querySelector('#text-top');
        this.bottomTextNode = document.querySelector('#text-bottom');
        this._clearViewInput();
                                }

    renderTextTop(TextTopInput) {
        if (TextTopInput.trim()) {
        this.topTextNode.style.display = 'block';
        this.topTextNode.innerHTML = `<p>${TextTopInput}</p>`;
    } else {
        this.topTextNode.style.display = 'none';
    }
}

    renderTextBottom(TextBottomInput) {
        if (TextBottomInput.trim()) {
        this.bottomTextNode.style.display = 'block';
        this.bottomTextNode.innerHTML = `<p>${TextBottomInput}</p>`;
    } else {
        this.bottomTextNode.style.display = 'none';
    }
    }

}

    

