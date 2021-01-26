const ChessHandler = (function () {

    const exp = {
        state: {}
    }

    exp.init = function () {
        let gameDIV = document.getElementsByClassName('game')[0]

        for (let line = 0; line <= 7; line++) {
            for (let column = 0; column <= 7; column++) {
                let newPosition = document.createElement('div')

                let classBlackPosition = ''

                if (line % 2) {
                    if (!(column % 2)) {
                        classBlackPosition = 'black'
                    }
                } else {
                    if (column % 2) {
                        classBlackPosition = 'black'
                    }
                }

                newPosition.className = `position ${classBlackPosition}`

                newPosition.setAttribute('x', line)
                newPosition.setAttribute('y', column)


                let piece = originalState[line] ? originalState[line][column] : null

                if (piece) {
                    let imgPiece = document.createElement('img')

                    imgPiece.id = piece.id
                    imgPiece.className = 'piece'

                    imgPiece.setAttribute('src', piece.src)
                    imgPiece.setAttribute('pieceColor', piece.src.indexOf('white') != -1 ? 'white' : 'black')
                    imgPiece.setAttribute('draggable', 'true')
                    imgPiece.setAttribute('ondragstart', 'ChessHandler.onDragStartHandler(event)')

                    newPosition.appendChild(imgPiece)
                }

                newPosition.setAttribute('ondrop', 'ChessHandler.onDropHandler(event)')
                newPosition.setAttribute('ondragover', 'ChessHandler.onDragOverHandler(event)')
                gameDIV.appendChild(newPosition)
            }
        }
    }

    exp.onDropHandler = function (event) {
        event.preventDefault()
        let pieceId = event.dataTransfer.getData('pieceId')

        let piece = document.getElementById(pieceId)

        let targetPosition = event.target

        if (targetPosition.tagName === 'IMG') {
            if (targetPosition.getAttribute('pieceColor') != piece.getAttribute('pieceColor')) {
                let divPosition = targetPosition.parentElement
                divPosition.innerHTML = ''
                divPosition.appendChild(piece);
            }
        } else {
            targetPosition.appendChild(piece);
        }

        // let pieceAtPosition = targetPosition.getElementsByClassName('piece')

        // if (pieceAtPosition) {
        //     pieceAtPosition = pieceAtPosition[0]

        //     if (pieceAtPosition.pieceColor != piece.pieceColor) {
                
        //     }
        // } else {
        //     targetPosition.appendChild(piece);
        // }
    }

    exp.onDragOverHandler = function (event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move"
    }

    exp.onDragStartHandler = function (event) {
        event.dataTransfer.setData('pieceId', event.target.id)
    }

    originalState = {
        // white Pieces
        0: {
            0: {
                'id': 'white-rook-1',
                'src': 'images/white-rook.svg'
            },
            1: {
                'id': 'white-knight-1',
                'src': 'images/white-knight.svg'
            },
            2: {
                'id': 'white-bishop-1',
                'src': 'images/white-bishop.svg'
            },
            3: {
                'id': 'white-king',
                'src': 'images/white-king.svg'
            },
            4: {
                'id': 'white-queen',
                'src': 'images/white-queen.svg'
            },
            5: {
                'id': 'white-bishop-2',
                'src': 'images/white-bishop.svg'
            },
            6: {
                'id': 'white-knight-2',
                'src': 'images/white-knight.svg'
            },
            7: {
                'id': 'white-rook-2',
                'src': 'images/white-rook.svg'
            },
        },
        1: {
            0: {
                'id': 'white-pawn-0',
                'src': 'images/white-pawn.svg'
            },
            1: {
                'id': 'white-pawn-1',
                'src': 'images/white-pawn.svg'
            },
            2: {
                'id': 'white-pawn-2',
                'src': 'images/white-pawn.svg'
            },
            3: {
                'id': 'white-pawn-3',
                'src': 'images/white-pawn.svg'
            },
            4: {
                'id': 'white-pawn-4',
                'src': 'images/white-pawn.svg'
            },
            5: {
                'id': 'white-pawn-5',
                'src': 'images/white-pawn.svg'
            },
            6: {
                'id': 'white-pawn-6',
                'src': 'images/white-pawn.svg'
            },
            7: {
                'id': 'white-pawn-7',
                'src': 'images/white-pawn.svg'
            },
        },
        // Black Pieces
        7: {
            0: {
                'id': 'black-rook-1',
                'src': 'images/black-rook.svg'
            },
            1: {
                'id': 'black-knight-1',
                'src': 'images/black-knight.svg'
            },
            2: {
                'id': 'black-bishop-1',
                'src': 'images/black-bishop.svg'
            },
            3: {
                'id': 'black-queen',
                'src': 'images/black-queen.svg'
            },
            4: {
                'id': 'black-king',
                'src': 'images/black-king.svg'
            },
            5: {
                'id': 'black-bishop-2',
                'src': 'images/black-bishop.svg'
            },
            6: {
                'id': 'black-knight-2',
                'src': 'images/black-knight.svg'
            },
            7: {
                'id': 'black-rook-2',
                'src': 'images/black-rook.svg'
            },
        },
        6: {
            0: {
                'id': 'black-pawn-0',
                'src': 'images/black-pawn.svg'
            },
            1: {
                'id': 'black-pawn-1',
                'src': 'images/black-pawn.svg'
            },
            2: {
                'id': 'black-pawn-2',
                'src': 'images/black-pawn.svg'
            },
            3: {
                'id': 'black-pawn-3',
                'src': 'images/black-pawn.svg'
            },
            4: {
                'id': 'black-pawn-4',
                'src': 'images/black-pawn.svg'
            },
            5: {
                'id': 'black-pawn-5',
                'src': 'images/black-pawn.svg'
            },
            6: {
                'id': 'black-pawn-6',
                'src': 'images/black-pawn.svg'
            },
            7: {
                'id': 'black-pawn-7',
                'src': 'images/black-pawn.svg'
            },
        }
    }

    return exp

})()

ChessHandler.init()