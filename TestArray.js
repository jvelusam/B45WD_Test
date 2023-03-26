var array = ["Manish", "Chandan", "Piyush",
                "Sunil", "Pankaj", "Piyush",
                "Pankaj", "Tiny", "Chandan",
                "Manish","Manish"];
                 
    var outputArray = [];
     
    // Count variable is used to add the
    // new unique value only once in the
    // outputArray.
    var count = 0;
     
    // Start variable is used to set true
    // if a repeated duplicate value is
    // encontered in the output array.
    var start = false;
    let uu = 0;
    for (j = 0; j < array.length; j++)
     {
     
        for (k = 0; k < outputArray.length; k++) 
        {
           
            if ( array[j]  > outputArray[k] )
             {

                start = true;
                console.log(array[j]);
            }
        }
        count++;
        // if (count == 1 && start == false) 
        // {
        //     uu = 1
        //     outputArray.push(array[j]);
        //     uu++;
            
        // }
        start = false;
        count = 0;

    }
    console.log(outputArray);