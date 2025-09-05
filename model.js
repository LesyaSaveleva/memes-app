class Model  {
    constructor() {
        this.memes = [];

    }

    setMemes(memes) {
        this.memes = memes;
    }

    getMemes() {
        return this.memes;
    }

    getMemNameUrl(selectMem) {
        let selectedMemData = null;
        this.memes.forEach(meme => {
            if (meme.id == selectMem) {
               selectedMemData = {
                    selectMemName: meme.name,
                    selectMemUrl: meme.url
                };
            }  
        });
        console.log(selectedMemData) 
        return selectedMemData;
    }
}

// Для поиска выбраннгого мема в методе getMemNameUrl можно использовать метод find: const foundMeme = this.memes.find(meme => meme.id == selectMem);
    
//     if (foundMeme) {
//         return {
//             selectMemName: foundMeme.name,
//             selectMemUrl: foundMeme.url
//         };
//     }
//     return null; // Если мем не найден
// }