addEventListener("DOMContentLoaded", (event) => {

  $(window).on("beforeunload", function() { 
    return inFormOrLink ? "Do you really want to close?" : null; 
})

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

  window.onload = () => {
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
      const Timeout = setTimeout(display_none, 6000);
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
  }

  function count_time_2() {
    counter.innerText = 5 - 2;
  }

  function count_time_3() {
    counter.innerText = 5 - 3;
  }

  function count_time_4() {
    counter.innerText = 5 - 4;
  }

  function count_time_Go() {
    counter.innerText = "GO!";
  }

  function display_none() {
    counter.style.display = "none";
    console.log("Counter hide");
    console.log("Hide buttons")
  }

  //Score

  function YourScore() {
    score.style.display = "none"
    counter.style.display = "block";
    counter.innerText =
      "Your Score is:  " + count + "!";
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
      point[i].style.backgroundColor = "#1c1c1c"
      point[i].innerText = "✅"
      console.log("clicked Point");
      console.log(count);
      play_point();
    };
  }

  //Null

  for (let i = 0; i < wrong.length; i++) {
    wrong[i].onclick = () => {
      count -= 1;
      score.innerText = "Score: " + count;
      wrong[i].style.backgroundColor = "#1c1c1c"
      wrong[i].innerText = "❌";
      console.log("clicked Wrong");
      console.log(count);
      play_null();
    };
  }

  //Win

  if (count >= 10) {
    party_text.innerText = "YOU WIN!";
    console.log("win");
  }

  //Sound FX

  let point_sound = document.getElementById("point");
  let null_sound = document.getElementById("null");

  function play_point() {
    point_sound.currentTime = 0;
    point_sound.play();
  }

  function play_null() {
    null_sound.currentTime = 0;
    null_sound.play();
  }
});
