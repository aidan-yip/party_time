addEventListener("DOMContentLoaded", (event) => {
  $(window).on("beforeunload", function () {
    return inFormOrLink ? "Do you really want to close?" : null;
  });

  console.log("loaded page");

  //DOM elements
  const score = document.getElementById("score");
  const party_text = document.getElementById("party_text");
  const counter = document.getElementById("counter");
  const replay = document.getElementById("replay");
  const buttons = document.getElementsByClassName("grid_block");
  const goal = 10;

  //Variables
  let point = document.querySelectorAll(".point");
  let wrong = document.querySelectorAll(".wrong");
  let count = 0;

  //Disable Zoom
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.99;
  });

  document.addEventListener("gesturechange", function (e) {
    e.preventDefault();

    document.body.style.zoom = 0.99;
  });
  document.addEventListener("gestureend", function (e) {
    e.preventDefault();
    document.body.style.zoom = 1;
  });

  window.onload = () => {
    //Autoplay music
    //play_party_music();
    //Timers
    setTimeout(() => {
      const Timeout = setTimeout(count_time, 1000);
      console.log("Get ready in 5 second.");
    }, "1000");

    setTimeout(() => {
      const Timeout = setTimeout(count_time_2, 2000);
      console.log("Get ready in 4 seconds.");
    }, "1000");

    setTimeout(() => {
      const Timeout = setTimeout(count_time_3, 3000);
      console.log("Get ready in 3 seconds.");
    }, "1000");

    setTimeout(() => {
      const Timeout = setTimeout(count_time_4, 4000);
      console.log("Get ready in 2 seconds.");
    }, "1000");

    setTimeout(() => {
      const Timeout = setTimeout(count_time_Go, 5000);
      console.log("GO!");
    }, "1000");

    setTimeout(() => {
      const Timeout = setTimeout(go_arrow, 7000);
      console.log("display none.");
    }, "1000");

    setTimeout(() => {
      const Timeout = setTimeout(display_none, 8000);
      console.log("display none.");
    }, "1000");

    setTimeout(() => {
      const Timeout = setTimeout(YourScore, 47000);
      console.log("Show score.");
    }, "1000");

    setTimeout(() => {
      const Timeout = setTimeout(replay_game, 48000);
      console.log("Show replay.");
    }, "1000");
  };

  //Functions when timers done

  function count_time() {
    counter.innerText = 5 - 1;
    play_count_fx();
  }

  function count_time_2() {
    counter.innerText = 5 - 2;
    play_count_fx();
  }

  function count_time_3() {
    counter.innerText = 5 - 3;
    play_count_fx();
  }

  function count_time_4() {
    counter.innerText = 5 - 4;
    play_count_fx();
  }

  function count_time_Go() {
    counter.innerText = "GO!";
    play_go_fx();
  }

  function go_arrow() {
    counter.innerText = "⬇️";
  }

  function display_none() {
    counter.style.display = "none";
    console.log("Counter hide");
    console.log("Hide buttons");
  }

  //Score

  function YourScore() {
    score.style.display = "none";
    counter.style.display = "block";
    counter.innerText = "Your Score is:  " + count + "!";
    //disable buttons
    for (let i = 0; i < point.length; i++) {
      point[i].style.pointerEvents = "none";
    }
    for (let i = 0; i < wrong.length; i++) {
      wrong[i].onclick = () => {
        wrong[i].style.pointerEvents = "none";
      };
    }
    console.log("Buttons disabled");
  }

  //Replay

  function replay_game() {
    replay.style.display = "flex";
  }

  //Point add

  for (let i = 0; i < point.length; i++) {
    point[i].onclick = () => {
      count += 1;
      score.innerText = "Score: " + count;
      point[i].style.backgroundColor = "#1c1c1c";
      point[i].innerText = "✅";
      console.log("clicked Point");
      console.log(count);
      play_point();
      play_party_music();
    };
  }

  //Null

  for (let i = 0; i < wrong.length; i++) {
    wrong[i].onclick = () => {
      count -= 1;
      score.innerText = "Score: " + count;
      wrong[i].style.backgroundColor = "#1c1c1c";
      wrong[i].innerText = "❌";
      console.log("clicked Wrong");
      console.log(count);
      play_null();
      play_party_music();
    };
  }

  //Win

  if (count >= 10) {
    party_text.innerText = "YOU WIN!";
    console.log("win");
  }

  //Music

  const party_music = document.getElementById("party_music");

  function play_party_music() {
    party_music.play();
    console.log("Playing Party Music!");
  }

  //Sound FX

  const point_sound = document.getElementById("point");
  const null_sound = document.getElementById("null");

  const count_fx = new Audio("./count.wav");

  const go_fx = new Audio("./go.wav");

  function play_count_fx() {
    count_fx.currentTime = 0;
    count_fx.play();
    console.log("Count sound played");
  }

  function play_go_fx() {
    go_fx.currentTime = 0;
    go_fx.play();
  }

  function play_point() {
    point_sound.currentTime = 0;
    point_sound.play();
    console.log("Go sound played");
  }

  function play_null() {
    null_sound.currentTime = 0;
    null_sound.play();
    console.log("Wrong sound played");
  }
});
