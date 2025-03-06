const names = ["Alice", "Bob", "Carol","Raph","Dan","Mike","Jen","Shelly","Vanessa","Tim","Huey","Duey","Luey"];
const occupations = ["Writer", "Teacher", "Programmer","Doctor","Artist","Admin","Mechanic","Driver","Janitor"];

const freelancers = [
    {name: "Alice", price: 30, occupation: "Writer" },
    {name: "Bob", price: 50, occupation: "Teacher" },
    {name: "Carol", price: 70, occupation: "Programmer"},];

function renderFreelancers(freelancers) {
    const container = document.querySelector("#freelancer-container");
    container.innerHTML = " ";
    freelancers.forEach(freelancer => {
        const element = document.createElement("div");
        element.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
        container.appendChild(element);
        });}

renderFreelancers(freelancers)

function generateRandomFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const price = Math.floor(Math.random() * 100) + 1;
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
return {name, price, occupation};}
      
setInterval(() => {
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer);
    renderFreelancers(freelancers);
    updateAveragePrice(freelancers);
    }, 3000)
      
function calculateAveragePrice(freelancers) {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
return total / freelancers.length;}

function updateAveragePrice(freelancers) {
    const averagePrice = calculateAveragePrice(freelancers);
    document.querySelector("#average-price").textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`}
    
    updateAveragePrice(freelancers);
    
