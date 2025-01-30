  // Create trees dynamically
  function createTrees() {
    const sceneContainer = document.querySelector('.scene-container');
    const newTree = document.createElement('div');
    newTree.className = 'tree';
    sceneContainer.appendChild(newTree);

    // Remove tree after animation completes
    setTimeout(() => {
        newTree.remove();
    }, 8000);
}

// Create trees periodically
setInterval(createTrees, 2000);

function selectVehicle(vehicle) {
    document.getElementById('selectedVehicle').textContent = vehicle;
}

function adjustSpeed(speed) {
    const trees = document.querySelectorAll('.tree');
    const newDuration = 16 - speed * 1.5; // Inverse relationship
    trees.forEach(tree => {
        tree.style.animationDuration = `${newDuration}s`;
    });
    document.querySelector('.road-line').style.animationDuration = `${2 - speed * 0.15}s`;
}

// Initialize some trees
for(let i = 0; i < 3; i++) {
    setTimeout(createTrees, i * 2000);
}

// Handle form submission
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Order submitted successfully!');
    this.reset();
});