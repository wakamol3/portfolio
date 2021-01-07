function countDown () {
    const el = document.getElementById("count");
    
    let start = 6;
  
    const interval = setInterval(() => {
      start -= 1;
  
      if (el) el.innerHTML = "Turning green in " + start;
  
      if (start === 0) {
        clearInterval(interval);
        el.innerHTML = "";
        const helloEl = document.getElementById("hello");
        if (helloEl) helloEl.style.color = "green";
      }
    }, 1000)
  }
  
  setTimeout(() => {
    countDown();
  }, 100);