function spiralMaze(size) {
    for (let i = 0; i < size; i++) {
        let line = "";
        for (let j = 0; j < size; j++) {
            if (i < size / 2) {
                if (i % 2 === 0) {
                    if (j >= i && j < size - i) {
                        line += "@";
                    }
                    else {
                        line += (j % 2 === 0) ? "@" : " ";
                    }
                }
                else {
                    if (j >= i && j < size - i) {
                        line += " ";
                    }
                    else {
                        line += (j % 2 === 0) ? "@" : " ";
                    }
                }
            }
            else {
                if (i % 2 === 0) {
                    if (j < i - 1 && j >= size - i) {
                        line += "@";
                    }
                    else {
                        line += (j % 2 === 0) ? "@" : " ";
                    }
                }
                else {
                    if (j < i - 1 && j >= size - i) {
                        line += " ";
                    }
                    else {
                        line += (j % 2 === 0) ? "@" : " ";
                    }
                }
            }
        }
        console.log(line);
    }
}

spiralMaze(15);