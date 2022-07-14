 const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

robots.forEach(function(robot, i) {
  let main = document.getElementsByTagName("main")[0];
  let div = document.createElement("div");
  main.appendChild(div);
  let img = document.createElement("img");
  img.src = robot["image"];
  div.appendChild(img);
  let h2 = document.createElement("h2");
  let textH2 = document.createTextNode(robot["name"]);
  h2.appendChild(textH2);
  div.appendChild(h2);
  let h3 = document.createElement("h3");
  let textH3 = document.createTextNode(robot["email"]);
  h3.appendChild(textH3);
  div.appendChild(h3);
})

function search() {
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
    let text = document.getElementsByTagName('h2');
    let div = document.getElementsByTagName('div');
      
    for (i = 0; i < text.length; i++) { 
        if (!text[i].innerHTML.toLowerCase().includes(input)) {
            div[i].style.display="none";
        }
        else {
            div[i].style.display="block";                 
        }
    }
}

let input = document.getElementById("search");

input.addEventListener("keyup", search)