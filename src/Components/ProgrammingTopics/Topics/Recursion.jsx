let Recursion = function(){
    return (
        <>
            <h1>What's Recursion?</h1>
            <h3>Recursion is a technique in computer 
                programming where a function calls itself in order 
                to solve a problem. It works by breaking a problem down 
                into smaller and simpler sub-problems, and then solving 
                each of those sub-problems recursively until a base case 
                is reached. The solutions to the sub-problems are then 
                combined to solve the original problem.</h3>
            <br/>

            <h1>Pros & Cons</h1>

            <h2>Pros</h2>
            <ul>
                <li>Simplifies complex problems: Recursion can make code more readable and easier to understand by breaking down complex problems into smaller and simpler sub-problems.</li>
                <li>Reusable code: Recursive functions can be easily reused for similar problems, making the code more efficient.</li>
                <li>Elegant solution: Recursion provides a clean and elegant solution for problems that would otherwise require complex and difficult-to-follow control structures.</li>
            </ul>
            <br/>
            
            <h2>Cons</h2>
            <ul>
                <li>Errors: If a recursive function is not properly designed to have an exit condition, it can lead to an infinite loop and cause a stack overflow error.</li>
                <li>Slower performance: Recursive functions can be slower than their iterative counterparts due to the overhead of function calls.</li>
                <li>Higher memory usage: Recursive functions can consume more memory compared to iterative solutions because each function call requires the creation of a new stack frame.</li>
            </ul>
            <br/>

            <h1>Main Steps to solve a recursive problem</h1>
            <ol>
                <li>What's the simplest possible input? Find the base case.</li>
                <li>Play around with simple examples and understand the pattern.</li>
                <li>Relate hard cases to simpler cases. Verify that your pattern is correct</li>
                <li>Generalize the pattern. Make a formula.</li>
                <li>Write code by combining the base case with the formula.</li>

            </ol>
            <h2>Problem 1:</h2>
            <h3>Write a recursive function that given an input "n" sums all nonegative integers up to "n".</h3>
            <br/>
            <h4>Let's try to follow the main steps.</h4>
            <br/>

            <h1>Problem 2:</h1>
            <h3>Write a function that takes two inputs "n" and "m" and outputs the number of unique paths from the top left corner to the bottom right corner of a "n" by "m" grid. Constraints: you can only move down or right 1 unit at a time.</h3>
            <br/>

            {/* <h1>Problem 3:</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            <br/> */}


            <h1>Source</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            <br/>
        </>
    )
}


export default Recursion