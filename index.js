// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
saturdayFun("bathe my dog");

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
  }
  
  console.log(mondayWork()); // Output: "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); // Output: "This Monday, I will work from home."

  function wrapAdjective(highlight = "*") {
    return function(adjective = "special") {
      return `You are ${highlight}${adjective}${highlight}!`;
    };
  }
  
  // Example usage with different highlights:
  const starWrapper = wrapAdjective("*");
  console.log(starWrapper("a hard worker")); // Output: "You are *a hard worker*!"
  
  const doublePipeWrapper = wrapAdjective("||");
  console.log(doublePipeWrapper("dedicated")); // Output: "You are ||dedicated||!"
  
  
    