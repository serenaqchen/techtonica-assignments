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

    const toggleIngredients = (e) => {
      //get the element that triggered the event
      const inputForm = e.target;
      //get the value from the element, in our case it is the user input value 
      const inputData = inputForm.value;
      //selecting the values of the default recipe   
      const spanValues = document.querySelectorAll('#list-of-ingredients span')
      //creating a fixed recipe
      const originalRecipeVals = [20, 0.25, 3, 2, 4, 3, 2, 4, 2, 2, 0.5, 7, 2]
      //now converting each value 
      for (i = 0; i < originalRecipeVals.length; i ++){
        spanValues[i].textContent = Math.round((originalRecipeVals[i] / 4) * inputData * 100)/100
      }
      
    };

    document.querySelector('input').addEventListener('input', toggleIngredients);

  });