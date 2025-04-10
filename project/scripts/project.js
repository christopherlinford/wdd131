document.addEventListener("DOMContentLoaded", () => {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    
    const copyrightElement = document.getElementById("copyright-year");
    if (copyrightElement) {
        copyrightElement.textContent = currentYear;
    }

    
    const lastModified = document.lastModified;

    
    const lastModifiedElement = document.getElementById("last-modified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified;
    }
});