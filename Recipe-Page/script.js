document.addEventListener("DOMContentLoaded", () => {
    const toggleLi = (e) => {
      const li =e.target;
      if(li.className === "obtained"){
        li.className = "";
      } else {
        li.className = "obtained";
      }
    };
    document.querySelectorAll("#list-of-ingredients li").forEach((li) => {
      li.addEventListener("click", toggleLi);
    });
  });