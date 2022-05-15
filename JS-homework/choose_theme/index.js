function changeTheme(themeName){
    switch (themeName){
        case 'white':  
            document.getElementById('body').style.backgroundColor = 'white'; 
            document.getElementById('body').style.color = 'black';
            break;

        case 'blue':
            document.getElementById('body').style.backgroundColor = `#003399`;
            document.getElementById('body').style.color = 'white'; 
            break;

        case 'dark':
            document.getElementById('body').style.backgroundColor = `#333333`;
            document.getElementById('body').style.color = 'white'; 
    }
}