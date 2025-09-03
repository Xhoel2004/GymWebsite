const modal = document.getElementById('planModal');
if (modal) {
  modal.addEventListener('show.bs.modal', (event) => {
    const btn = event.relatedTarget;
    const planKey = btn?.getAttribute('data-plan') || 'strength';
    const title = {
      strength: 'Strength Training – 3-Day Split',
      cardio: 'Cardio – Endurance & Intervals',
      yoga: 'Yoga / Flexibility – Mobility & Recovery',
      hiit: 'HIIT – High Intensity Intervals'
    }[planKey];

    const content = {
      strength: `
        <h6>Weekly Layout</h6>
        <ul>
          <li><strong>Day 1 (Upper):</strong> Bench 4×6–8, Rows 4×8–10, OHP 3×8, Pushups 3×AMRAP, Face Pulls 3×12–15, Plank 3×45s</li>
          <li><strong>Day 2 (Lower):</strong> Back Squat 5×5, RDL 4×8, Walking Lunges 3×12/leg, Leg Curl 3×12, Calf Raise 4×15</li>
          <li><strong>Day 3 (Full):</strong> Deadlift 3×5, Incline DB Press 4×8, Pull-Ups 4×AMRAP, DB Row 3×10, Goblet Squat 3×12</li>
        </ul>
        <p class="mb-0"><em>Tip:</em> Rest 60–120s, add weight when you hit top reps with solid form.</p>
      `,
      cardio: `
        <h6>Weekly Layout</h6>
        <ul>
          <li><strong>Day 1:</strong> Tempo run (10’ easy, 20’ tempo, 10’ easy)</li>
          <li><strong>Day 2:</strong> Cycling/Row 6×3’ hard / 2’ easy</li>
          <li><strong>Day 3:</strong> 45–60’ steady state at conversational pace</li>
        </ul>
        <p class="mb-0">Warm-up & cool-down ~10’ each. Track HR or RPE.</p>
      `,
      yoga: `
        <h6>Weekly Layout</h6>
        <ul>
          <li><strong>Day 1:</strong> 30–40’ vinyasa flow + hip openers</li>
          <li><strong>Day 2:</strong> Mobility circuit (thoracic, 90/90, hamstrings)</li>
          <li><strong>Day 3:</strong> Restorative stretch + breathing</li>
        </ul>
      `,
      hiit: `
        <h6>Weekly Layout</h6>
        <ul>
          <li><strong>Day 1:</strong> 20’ EMOM (swings, burpees, goblet squats, pushups)</li>
          <li><strong>Day 2:</strong> Tabata blocks (4× 8 rounds)</li>
          <li><strong>Day 3:</strong> 10× (30s hard / 90s easy) sprints</li>
        </ul>
        <p class="mb-0">Keep sessions short (≤25’) and high quality. Rest days or easy cardio between.</p>
      `
    }[planKey];

    modal.querySelector('.modal-title').textContent = title;
    modal.querySelector('.modal-body').innerHTML = content;
  });
}


// main.js
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // Highlight active link
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  });

