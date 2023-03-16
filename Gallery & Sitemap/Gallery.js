var first_image = 1;
document.getElementById(first_image).className = "gallery active";

function view(img) {
    document.getElementById(first_image).className = "gallery image";
    img.className = "gallery active";
    document.getElementById(0).src = img.src;
    first_image = img.id
}

function description_Pain() {
    var Pain = "Pain<br><p1>Pain(typeset as PAIN)is a musical project from sweden that mixes heavy metal with influences from electronic music and techno.The project strated out as a hobby project for frontman Peter Tagtrgren,Whose idea was to fuse heavy metal with 1980s-inspired electro-industrial and techno ifluences.Tagrten ,who is also the vocalist/guitarist of Hypocrisy and producer of his own.The Abys studios, is the only current member.</p1>";
    document.getElementById("description").innerHTML = Pain;
}


function description_Celestial() {
    var Celestial = "Celestial<br><p2>Celestial is a song by Ed Sheeran, released as a single on 29 September 2022. It was released in collaboration with The Pokémon Company and appears in the end credits of Pokémon Scarlet and Violet, released on 18 November 2022.[1] Sheeran co-wrote the song alongside Steve Mac and Johnny McDaid, and produced it with Mac. The song was released alongside its music video, which includes Sheeran interacting with a variety of Pokémon.</p2>";
    document.getElementById("description").innerHTML = Celestial;
}

function description_Ophelia() {
    var Ophelia = "Ophelia<br><p3>Ophelia is the second studio album by American indie folk band The Lumineers. The album was released in the United States on April 8, 2016, and contains the singles Ophelia, Cleopatra, Angela and Sleep on the Floo. The album received positive reviews and commercial success, debuting at number one on the UK Albums Chart and the Billboard 200. It is the last album by the band to feature Neyla Pekarek, who left in October 2018 to pursue a solo career.</p3>";
    document.getElementById("description").innerHTML = Ophelia;
}

function description_Havana() {
    var Havana = "Havana<br><p4>Havana is a song recorded by Cuban-American singer Camila Cabello featuring fellow American rapper Young Thug.[1] It was released on August 3, 2017, along with OMG, from her solo debut album, Camila (2018).[2] It was initially released as a promotional single, then was serviced to radio on September 8, 2017, as a single. Due to its rising success, Havana later became the official lead single of Camila, replacing Crying in the Club</p4>";
    document.getElementById("description").innerHTML = Havana;
}

function description_Adele_21() {
    var Adele_21 = "Adele_21<br><p5>A 21 is the second studio album by English singer-songwriter Adele. It was released on 24 January 2011[1] in Europe by XL Recordings and on 22 February 2011 in North America by Columbia Records. The album was named after the age of the singer during its production. 21 shares the Motown/soul influences of her 2008 debut album 19, but also draws influence from the American country and Southern blues music that Adele started listening to during the North American leg of her tour An Evening with Adele. </p5>";
    document.getElementById("description").innerHTML = Adele_21;
}

function pagecolor(color) {
    document.body.style.background = color;
}


function CreateRGB() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgbValue = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.background = rgbValue;
    localStorage.setItem("bg-color", rgbValue);
}


if (localStorage.getItem("bg-color")) {
    document.body.style.background = localStorage.getItem("bg-color");
}
