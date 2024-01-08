async function waitAndGreet(name) {
    // Simulate a delay of 2 seconds using setTimeout
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Display a greeting with the provided name
    const greeting = `Hello, ${name}!`;
    return greeting;
}
// Example of calling the function within an async function and logging the result
async function asyncFunction() {
    try {
        const result = await waitAndGreet("sobia");
        console.log(result);
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
// Call the async function to see the output
asyncFunction();
export {};
