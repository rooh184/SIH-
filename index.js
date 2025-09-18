// Simple Crop Recommendation System (Prototype)

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("crop-form");
  const resultDiv = document.getElementById("results");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get user input values
    const soil = document.getElementById("soil").value;
    const rainfall = parseFloat(document.getElementById("rainfall").value);
    const temperature = parseFloat(document.getElementById("temperature").value);

    // Basic rule-based crop recommendation
    let recommendations = [];

    if (soil === "clay" && rainfall > 100 && temperature < 30) {
      recommendations.push({
        crop: "Rice",
        score: "92%",
        reason: "Clay soil with high rainfall and moderate temperature is suitable."
      });
    }

    if (soil === "sandy" && rainfall < 80 && temperature > 25) {
      recommendations.push({
        crop: "Millets",
        score: "88%",
        reason: "Sandy soil with low rainfall and warm climate favors millets."
      });
    }

    if (soil === "loamy" && rainfall >= 80 && rainfall <= 120 && temperature >= 20 && temperature <= 30) {
      recommendations.push({
        crop: "Wheat",
        score: "90%",
        reason: "Loamy soil with moderate rainfall and temperature is ideal for wheat."
      });
    }

    if (soil === "black" && temperature > 20 && rainfall >= 75) {
      recommendations.push({
        crop: "Cotton",
        score: "85%",
        reason: "Black soil retains moisture and is good for cotton."
      });
    }

    if (recommendations.length === 0) {
      recommendations.push({
        crop: "No strong match",
        score: "50%",
        reason: "Conditions do not strongly match any crop in the system."
      });
    }

    // Display results
    resultDiv.innerHTML = "";
    recommendations.forEach(rec => {
      const card = document.createElement("div");
      card.className = "result";
      card.innerHTML = `
        <div class="score">${rec.score}</div>
        <div>
          <h3 class="crop-title">${rec.crop}</h3>
          <p class="reason">${rec.reason}</p>
        </div>
      `;
      resultDiv.appendChild(card);
    });
  });

  // Reset form & results
  document.getElementById("resetBtn").addEventListener("click", () => {
    resultDiv.innerHTML = "";
  });
});
