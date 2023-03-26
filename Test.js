

    let arry = [1, 2, 1, 3, 4, 3, 5];
    let resultToReturn = false;
    let count = 0;
    for (let i = 0; i < arry.length; i++) { // nested for loop
        for (let j = 0; j < arry.length; j++) 
        {

                // check if elements' values are equal
                if (arry[i] === arry[j]) 
                {
                  count++;

                }

        }
     

    }
    console.log(count);
 