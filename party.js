addEventListener("DOMContentLoaded", (event) => {
  console.log("loaded page");

  //DOM elements
  const score = document.getElementById("score");
  const party_text = document.getElementById("party_text");
  const counter = document.getElementById("counter");
  const goal = 2;

  window.onload = () => {
    setTimeout(() => {
      const Timeout = setTimeout(count_time, 1000);
      console.log("Get ready in 3 second.");
    }, "1000");

    setTimeout(() => {
      const Timeout = setTimeout(count_time_2, 2000);
      console.log("Get ready in 2 seconds.");
    }, "1000");

    setTimeout(() => {
      const Timeout = setTimeout(count_time_3, 3000);
      console.log("GO!");
    }, "1000");

    setTimeout(() => {
      const Timeout = setTimeout(display_none, 4000);
      console.log("display none.");
    }, "1000");
  };

  function count_time() {
    counter.innerText = 3 - 1;
  }

  function count_time_2() {
    counter.innerText = 3 - 2;
  }

  function count_time_3() {
    counter.innerText = "GO!";
  }

  function display_none() {
    counter.style.display = "none";
  }

  //variables

  let point = document.querySelectorAll(".point");
  let count = 0;

  for (let i = 0; i < point.length; i++) {
    point[i].onclick = () => {
      count += 1;
      score.innerText = "Score: " + count;
      console.log("clicked");
    };
  }

  if (count >= goal) {
    party_text.innerText = "YOU WIN!";
    console.log("win");
  } else {
    count = 0;
  }
});
