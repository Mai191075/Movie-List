<template>
  <h2>Familials movies list:</h2>
  <div v-for="familial in familials" :key="familial.id" class="familialStyle">
  <router-link :to="{ name: 'FamilialDetails', params: { id: familial.id }}">
   <h2> {{ familial.title }}</h2>
  </router-link>
  </div>
</template>

<script>
export default {
 data() {
  return {
    familials: [
  {
    "id": 1,
    "title": "The Wizard of Oz",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_SX300.jpg",
    "imdbId": "tt0032138"
  },
  {
    "id": 2,
    "title": "Inside Out",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
    "imdbId": "tt2096673"
  },
  {
    "id": 3,
    "title": "E.T. the Extra-Terrestrial",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbId": "tt0083866"
  },
  {
    "id": 4,
    "title": "Coco",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
    "imdbId": "tt2380307"
  },
  {
    "id": 5,
    "title": "Incredibles 2",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SX300.jpg",
    "imdbId": "tt3606756"
  },
  {
    "id": 6,
    "title": "Snow White and the Seven Dwarfs",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTQwMzE2Mzc4M15BMl5BanBnXkFtZTcwMTE4NTc1Nw@@._V1_SX300.jpg",
    "imdbId": "tt0029583"
  },
  {
    "id": 7,
    "title": "Toy Story 2",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMWM5ZDcxMTYtNTEyNS00MDRkLWI3YTItNThmMGExMWY4NDIwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    "imdbId": "tt0120363"
  },
  {
    "id": 8,
    "title": "Up",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg",
    "imdbId": "tt1049413"
  },
  {
    "id": 9,
    "title": "Toy Story 3",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg",
    "imdbId": "tt0435761"
  },
  {
    "id": 10,
    "title": "Finding Nemo",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "imdbId": "tt0266543"
  },
  {
    "id": 11,
    "title": "The Jungle Book",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTc3NTUzNTI4MV5BMl5BanBnXkFtZTgwNjU0NjU5NzE@._V1_SX300.jpg",
    "imdbId": "tt3040964"
  },
  {
    "id": 12,
    "title": "Pinocchio",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTU4Mzk3ODIyOF5BMl5BanBnXkFtZTgwODgyNzk2NjE@._V1_SX300.jpg",
    "imdbId": "tt0032910"
  },
  {
    "id": 13,
    "title": "Moana",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_SX300.jpg",
    "imdbId": "tt3521164"
  },
  {
    "id": 14,
    "title": "Harry Potter and the Deathly Hallows: Part 2",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "imdbId": "tt1201607"
  },
  {
    "id": 15,
    "title": "Toy Story",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
    "imdbId": "tt0114709"
  },
  {
    "id": 16,
    "title": "How to Train Your Dragon",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg",
    "imdbId": "tt0892769"
  },
  {
    "id": 17,
    "title": "It's a Wonderful Life",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg",
    "imdbId": "tt0038650"
  },
  {
    "id": 18,
    "title": "Dumbo",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNWVmNWQ2OTQtNzJlNC00ZmQwLTg4ZTktZTNmM2IxZTlkOGM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "imdbId": "tt0033563"
  },
  {
    "id": 19,
    "title": "Mary Poppins",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNmJkODczNjItNDI5Yy00MGI1LTkyOWItZDNmNjM4ZGI1ZDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
    "imdbId": "tt0058331"
  },
  {
    "id": 20,
    "title": "The Lego Movie",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
    "imdbId": "tt1490017"
  },
  {
    "id": 21,
    "title": "Miracle on 34th Street",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNjRkOGEwYTUtY2E5Yy00ODg4LTk2ZWItY2IyMzUxOGVhMTM1XkEyXkFqcGdeQXVyNDk0MDg4NDk@._V1_SX300.jpg",
    "imdbId": "tt0039628"
  },
  {
    "id": 22,
    "title": "Ratatouille",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
    "imdbId": "tt0382932"
  },
  {
    "id": 23,
    "title": "The Incredibles",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
    "imdbId": "tt0317705"
  },
  {
    "id": 24,
    "title": "Yellow Submarine",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMGExODFmMjQtZTgxOC00ZDE0LWJmM2MtOTQzM2YzNDZlMzNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    "imdbId": "tt0063823"
  },
  {
    "id": 25,
    "title": "Beauty and the Beast",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMzE5MDM1NDktY2I0OC00YWI5LTk2NzUtYjczNDczOWQxYjM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbId": "tt0101414"
  },
  {
    "id": 26,
    "title": "Chicken Run",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BY2UyYjFkNzAtYzIyMC00MGI1LTlkNDktNzUyOGQ5NTI2ZGFjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    "imdbId": "tt0120630"
  },
  {
    "id": 27,
    "title": "The Princess Bride",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg",
    "imdbId": "tt0093779"
  },
  {
    "id": 28,
    "title": "The Lego Batman Movie",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
    "imdbId": "tt4116284"
  },
  {
    "id": 29,
    "title": "The Nightmare Before Christmas",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_SX300.jpg",
    "imdbId": "tt0107688"
  },
  {
    "id": 30,
    "title": "Big",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMDQ1ODM5MTMtMjAwYi00ZGUxLTliNTMtN2ZhODAwMjVhMTRlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "imdbId": "tt0094737"
  },
  {
    "id": 31,
    "title": "Monsters, Inc.",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_SX300.jpg",
    "imdbId": "tt0198781"
  },
  {
    "id": 32,
    "title": "The Iron Giant",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMjIxNDU2Njk0OV5BMl5BanBnXkFtZTgwODc3Njc3NjE@._V1_SX300.jpg",
    "imdbId": "tt0129167"
  },
  {
    "id": 33,
    "title": "Song of the Sea",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTQ2MDMwNjEwNV5BMl5BanBnXkFtZTgwOTkxMzI0MzE@._V1_SX300.jpg",
    "imdbId": "tt1865505"
  },
  {
    "id": 34,
    "title": "The Lion King",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    "imdbId": "tt0110357"
  },
  {
    "id": 35,
    "title": "Who Framed Roger Rabbit",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMDhiOTM2OTctODk3Ny00NWI4LThhZDgtNGQ4NjRiYjFkZGQzXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
    "imdbId": "tt0096438"
  },
  {
    "id": 36,
    "title": "The Muppets",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMjE0MTM4NTc3NF5BMl5BanBnXkFtZTcwMjYzOTIxNg@@._V1_SX300.jpg",
    "imdbId": "tt1204342"
  },
  {
    "id": 37,
    "title": "Babe",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BYjg4ZjUzMzMtYzlmYi00YTcwLTlkOWUtYWFmY2RhNjliODQzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
    "imdbId": "tt0112431"
  },
  {
    "id": 38,
    "title": "My Fair Lady",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNGM0ZTU3NmItZmRmMy00YWNjLWEzMWItYzg3MzcwZmM5NjdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    "imdbId": "tt0058385"
  },
  {
    "id": 39,
    "title": "Wallace & Gromit: The Curse of the Were-Rabbit",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTk1NzIwNTM1NV5BMl5BanBnXkFtZTcwMDA1NzkyMw@@._V1_SX300.jpg",
    "imdbId": "tt0312004"
  },
  {
    "id": 40,
    "title": "Fantasia",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BYjhlYzNkOGEtZjNkZC00OTQ4LWJiMzEtMTM3YzBiM2FkMDUxXkEyXkFqcGdeQXVyNzY1NDgwNjQ@._V1_SX300.jpg",
    "imdbId": "tt0032455"
  },
  {
    "id": 41,
    "title": "The Straight Story",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNmE1MDk4OWEtYjk1NS00MWU2LTk5ZWItYjZhYmRkODRjMDc0XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
    "imdbId": "tt0166896"
  },
  {
    "id": 42,
    "title": "Hugo",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMjAzNzk5MzgyNF5BMl5BanBnXkFtZTcwOTE4NDU5Ng@@._V1_SX300.jpg",
    "imdbId": "tt0970179"
  },
  {
    "id": 43,
    "title": "Fantastic Mr. Fox",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "imdbId": "tt0432283"
  },
  {
    "id": 44,
    "title": "Aladdin",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmNjQ3OGJkZDgxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
    "imdbId": "tt0103639"
  },
  {
    "id": 45,
    "title": "Enchanted",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMjE4NDQ2Mjc0OF5BMl5BanBnXkFtZTcwNzQ2NDE1MQ@@._V1_SX300.jpg",
    "imdbId": "tt0461770"
  },
  {
    "id": 46,
    "title": "Frozen",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
    "imdbId": "tt2294629"
  },
  {
    "id": 47,
    "title": "How to Train Your Dragon 2",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg",
    "imdbId": "tt1646971"
  },
  {
    "id": 48,
    "title": "The Breadwinner",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMWM2MzQ4YTAtMTBkZS00ODA1LWFmNTEtMjEwNzk3ZGJiZDc3XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    "imdbId": "tt3901826"
  },
  {
    "id": 49,
    "title": "Coraline",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMzQxNjM5NzkxNV5BMl5BanBnXkFtZTcwMzg5NDMwMg@@._V1_SX300.jpg",
    "imdbId": "tt0327597"
  },
  {
    "id": 50,
    "title": "The Little Mermaid",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BN2JlZTBhYTEtZDE3OC00NTA3LTk5NTQtNjg5M2RjODllM2M0XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    "imdbId": "tt0097757"
  },
  {
    "id": 51,
    "title": "Lady and the Tramp",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BYTI1ZDc1OTItM2EzNS00ODMxLWIxYzctOTc5YWNiYzI3NGZiXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
    "imdbId": "tt0048280"
  },
  {
    "id": 52,
    "title": "Antz",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMzMzMDdlMDktODg4OC00Y2E5LTk1ZjMtNzM2MzIxZGQ0ZGI3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbId": "tt0120587"
  },
  {
    "id": 53,
    "title": "Jason and the Argonauts",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BN2NiMWEwZmYtNGIzNi00NjllLTg0ZTUtODQ0MDgwMGZkZWE2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "imdbId": "tt0057197"
  },
  {
    "id": 54,
    "title": "Bambi",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTY1NzM4NDg5MV5BMl5BanBnXkFtZTgwMjI1MTkzMjE@._V1_SX300.jpg",
    "imdbId": "tt0034492"
  },
  {
    "id": 55,
    "title": "My Neighbor Totoro",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNTdiOTQ0YmUtOGE3YS00NDg5LWI3YTEtNDAxZmE0MzRmZWM5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "imdbId": "tt0096283"
  },
  {
    "id": 56,
    "title": "Big Hero 6",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg",
    "imdbId": "tt2245084"
  },
  {
    "id": 57,
    "title": "Harry Potter and the Prisoner of Azkaban",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
    "imdbId": "tt0304141"
  },
  {
    "id": 58,
    "title": "Spy Kids",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BY2JhODU1NmQtNjllYS00ZmQwLWEwZjYtMTE5NjA1M2YyMzdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbId": "tt0227538"
  },
  {
    "id": 59,
    "title": "How Green Was My Valley",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMjE1YWRmMWEtYTQ0Yy00NGEwLWFmNzAtZDkwOWNjMzkwYzJmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    "imdbId": "tt0033729"
  },
  {
    "id": 60,
    "title": "Pete's Dragon",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMjA4NDYxNzYzOF5BMl5BanBnXkFtZTgwNzU1NzcwODE@._V1_SX300.jpg",
    "imdbId": "tt2788732"
  },
  {
    "id": 61,
    "title": "Arthur Christmas",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTYyMjMyMzEzMl5BMl5BanBnXkFtZTcwMDg4NTM5Ng@@._V1_SX300.jpg",
    "imdbId": "tt1430607"
  },
  {
    "id": 62,
    "title": "A Monster Calls: Making of the Tales",
    "posterURL": "N/A",
    "imdbId": "tt7831362"
  },
  {
    "id": 63,
    "title": "A Bug's Life",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNThmZGY4NzgtMTM4OC00NzNkLWEwNmEtMjdhMGY5YTc1NDE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbId": "tt0120623"
  },
  {
    "id": 64,
    "title": "Harry Potter and the Goblet of Fire",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
    "imdbId": "tt0330373"
  },
  {
    "id": 65,
    "title": "Teen Titans Go! To the Movies",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BOTZhMTIwZDUtYjZjZS00MmViLTg3NzEtNWE5NzI1NDUwNDJmXkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_SX300.jpg",
    "imdbId": "tt7424200"
  },
  {
    "id": 66,
    "title": "That Thing You Do!",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BOWVmN2ZhZjgtZGEzMy00NDkxLWI5YWQtYTE2ZTk0YzIyMzc0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbId": "tt0117887"
  },
  {
    "id": 67,
    "title": "Shrek 2",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbId": "tt0298148"
  },
  {
    "id": 68,
    "title": "Tangled",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_SX300.jpg",
    "imdbId": "tt0398286"
  },
  {
    "id": 69,
    "title": "James and the Giant Peach",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTNkNWIwNGUtNTJlOC00NDU3LTk0NWEtNjNjNDM4NzRiNThkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbId": "tt0116683"
  },
  {
    "id": 70,
    "title": "Shrek",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbId": "tt0126029"
  },
  {
    "id": 71,
    "title": "Sleeping Beauty",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BOTJmZjA3MjMtMWNmZS00YTliLWFhMWUtZDU2NGJhNTlmY2ZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbId": "tt0053285"
  },
  {
    "id": 72,
    "title": "Rango",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTc4NjEyODE1OV5BMl5BanBnXkFtZTcwMjYzNTkxNA@@._V1_SX300.jpg",
    "imdbId": "tt1192628"
  },
  {
    "id": 73,
    "title": "Winnie the Pooh",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BYzBlYTJkMGQtYzQ4MS00Zjk3LTk4MmEtYTZiNTEzNmRlMjUxXkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg",
    "imdbId": "tt1449283"
  },
  {
    "id": 74,
    "title": "Duma",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMTIzMTg3NzQ1NV5BMl5BanBnXkFtZTYwNzg2NDc2._V1_SX300.jpg",
    "imdbId": "tt0361715"
  },
  {
    "id": 75,
    "title": "ParaNorman",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMjA1OTU1NDM3N15BMl5BanBnXkFtZTcwMjYxNTg0Nw@@._V1_SX300.jpg",
    "imdbId": "tt1623288"
  },
  {
    "id": 76,
    "title": "A Christmas Story",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BOWMyNjE0MzEtMzVjNy00NjIxLTg0ZjMtMWJhNGI1YmVjYTczL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    "imdbId": "tt0085334"
  },
  {
    "id": 77,
    "title": "The Peanuts Movie",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNTE5NzMxNzkwNl5BMl5BanBnXkFtZTgwOTQ0Nzk5NzE@._V1_SX300.jpg",
    "imdbId": "tt2452042"
  },
  {
    "id": 78,
    "title": "Kung Fu Panda",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "imdbId": "tt0441773"
  },
  {
    "id": 79,
    "title": "Wreck-It Ralph",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA@@._V1_SX300.jpg",
    "imdbId": "tt1772341"
  },
  {
    "id": 80,
    "title": "Millions of Cardinals Memories: Busch Stadium 1966-2005",
    "posterURL": "N/A",
    "imdbId": "tt0808376"
  },
  {
    "id": 81,
    "title": "Cinderella",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMjMxODYyODEzN15BMl5BanBnXkFtZTgwMDk4OTU0MzE@._V1_SX300.jpg",
    "imdbId": "tt1661199"
  },
  {
    "id": 82,
    "title": "The Sound of Music",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BODIxNjhkYjEtYzUyMi00YTNjLWE1YjktNjAyY2I2MWNkNmNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "imdbId": "tt0059742"
  },
  {
    "id": 83,
    "title": "The Muppet Movie",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BMGQ0OGM5YjItYzYyMi00NmVmLWI3ODMtMTY2NGRkZmI5MWU2XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg",
    "imdbId": "tt0079588"
  },
  {
    "id": 84,
    "title": "Harry Potter and the Half-Blood Prince",
    "posterURL": "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
    "imdbId": "tt0417741"
  }
]
  }
 }
}
</script>

<style>
.familialStyle {
  background: #f4f4f4;
padding: 20px;
border-radius: 10px;
margin: 10px auto;
max-width: 600px;
 cursor: pointer;
 color: #a4e9f2;
  align-items: center;
  margin-left:1%;
  margin-right: 1%;
  appearance: none;
  background-color: rgb(208, 230, 242);
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font6-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
}

.familialStyle:hover {
  background: #F6F9FE;
  color: #174ea6;
}

.familialStyle:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.familialStyle:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.familialStyle:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.familialStyle:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

.familialStyle:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.familialStyle:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

.familialStyle:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

</style>