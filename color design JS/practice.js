let index = 0;

function ChangeColors(){
    let colors = ["red","blue","green","yellow","green","prple"]

    document.getElementsByTagName("body",)[0].
    style.background = colors[index++];

    if( index > colors.length - 1)
    index = 0;
}