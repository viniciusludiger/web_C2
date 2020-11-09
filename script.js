let cores = ["AliceBlue",
    "AntiqueWhite","Aqua","Aquamarine","Azure",
    "Beige","Bisque","Black","BlanchedAlmond",
    "Blue","BlueViolet","Brown","BurlyWood",
    "CadetBlue","Chartreuse","Chocolate","Coral",
    "CornflowerBlue","Cornsilk","Crimson","Cyan",
    "DarkBlue","DarkCyan","DarkGoldenRod","DarkGray",
    "DarkGrey","DarkGreen","DarkKhaki","DarkMagenta",
    "DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed",
    "DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray",
    "DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink",
    "DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick",
    "FloralWhite","ForestGreen","Fuchsia","Gainsboro",
    "GhostWhite","Gold","GoldenRod","Gray","Green","GreenYellow",
    "HoneyDew","HotPink","IndianRed","Indigo","Ivory",
    "Khaki","Lavender","LavenderBlush","LawnGreen",
    "LemonChiffon","LightBlue","LightCoral","LightCyan",
    "LightGoldenRodYellow","LightGray","LightGrey","LightGreen",
    "LightPink","LightSalmon","LightSeaGreen","LightSkyBlue",
    "LightSlateGrey","LightSteelBlue","LightYellow","Lime",
    "LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine",
    "MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen",
    "MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
    "MediumVioletRed","MidnightBlue","MintCream","MistyRose",
    "Moccasin","NavajoWhite","Navy","OldLace","Olive",
    "OliveDrab","Orange","OrangeRed","Orchid",
    "PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed",
    "PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
    "Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue",
    "SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell",
    "Sienna","Silver","SkyBlue","SlateBlue","SlateGray",
    "SlateGrey","Snow","SpringGreen","SteelBlue","Tan",
    "Teal","Thistle","Tomato","Turquoise","Violet",
    "Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

    let contador = 1;
    let vetCores;
    let info_jogador;

    selecionarCores();

    function selecionarCores (){

        const vet = [];

        for(let i = 0; i <= 10; i++){

            vet.push(cores[Math.floor(Math.random() * vet.length)]); 

        }

        vetCores = vet [Math.floor(Math.random() * vet.length)];
        document.getElementById('cores').innerHTML = vet;
        
    }


    function jogo (){
        info_jogador = document.querySelector("input").value; {

            if(info_jogador.toLowerCase() === vetCores.toLowerCase()){
                document.getElementById('pagina').style.backgroundColor= vetCores
                alert('Você ganhou !!');
                contador ++;

            } else{

                if (contador !== 3 && info_jogador.toLocaleLowerCase() > vetCores.toLowerCase()){

                    alert ('Você errou, a cor certa começa com a letra superior a essa no alfabeto !!' + 
                    contador);


                } else if (contador !== 3 && info_jogador.toLocaleLowerCase() < vetCores.toLowerCase()){

                    alert ('Você errou, a cor certa começa com a letra inferior a essa no alfabeto !!' + 
                    contador);

                }else if (contador === 3){
                    
                    alert ('Você perdeu !!');
                    window.location.reload();
                    
                }
                contador ++;
            }

        }
    }
