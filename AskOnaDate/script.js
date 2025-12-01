document.getElementById("stage1-btn").addEventListener("click", () => {
    
    // Hide Stage 1
    document.getElementById("stage1").style.display = "none";

    // Show Stage 2
    const stage2 = document.getElementById("stage2");
    stage2.style.display = "block";

    // Add fade-in classes AFTER showing the section
    stage2.querySelector("line1").classList.add("fade-in");
    stage2.querySelector("line2").classList.add("fade-in-delay-1");
    stage2.querySelector("line3").classList.add("fade-in-delay-2");
    stage2.querySelector("line4").classList.add("fade-in-delay-3");
});