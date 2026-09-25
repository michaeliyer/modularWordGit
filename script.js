let x = "You're all effing idiots.";
let y = "And Assholes!!!!";
let z = 19;
console.log(x, y, "ALL ", z, " OF YOU Assholes!!!!");



document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ JavaScript is running!");

    const buttonShow = document.querySelector(".toggleShow");
    const linkBlock = document.querySelector("#hidden");

    if (buttonShow && linkBlock) {
        buttonShow.addEventListener("click", () => {
            linkBlock.classList.toggle("show");
            console.log("🔄 Toggled linkBlock visibility");

            // Delay execution to ensure elements are visible before modifying them
            setTimeout(highlightLinks, 100);
        });
    } else {
        console.warn("⚠️ Could not find .toggleShow or #hidden elements!");
    }

    function highlightLinks() {
        const links = document.querySelectorAll("#linkBack"); // Use class instead of ID

        if (links.length === 0) {
            console.warn("⚠️ No .linkBack elements found! Are they inside a hidden div?");
            return;
        }

        console.log(`🔍 Found ${links.length} links`);

        const highlightWords = ["EnteR", "LETTER", "wordle", "check"]; // Words to highlight

        links.forEach(link => {
            let text = link.innerHTML; // Get current HTML (keeps structure)

            highlightWords.forEach(word => {
                const regex = new RegExp(`(${word})`, "gi"); // Case-insensitive match
                text = text.replace(regex, `<span class="highlighted-word">$1</span>`);
            });

            link.innerHTML = text; // Apply the updated HTML
            console.log(`✅ Updated Link: ${link.innerHTML}`);
        });
    }
});

