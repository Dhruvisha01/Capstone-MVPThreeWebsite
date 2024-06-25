document.addEventListener('DOMContentLoaded', (event) => {
    // Define the content for each button
    const contentMap = {
        next_fd_summary_init_deflection: `
            <div id="fd-summary-init-deflection">
                <h3>Initial Deflection</h3>
                <p>To get the initial deflection, we set up the circuit like this:</p>
                <p>Using the formula I = kθ and Ohm's Law (V = IR), we get the following information:</p>
            </div>

            <div class="button-container">
                <md-outlined-button class="fd-next-button" data-key="next_fd_summary_init_deflection_conclusion">Next</md-outlined-button>
            </div>
        `,
        next_fd_summary_init_deflection_conclusion: `
            <div id="fd-summary-init-deflection-conclusion">
                <p>Unfortunately, we don't know G (the resistance of the galvanometer). So, we can't solve for k.</p>
            </div>

            <div class="button-container">
                <md-outlined-button class="fd-next-button" data-key="next_fd_summary_half_deflection">Next</md-outlined-button>
            </div>
        `,
        next_fd_summary_half_deflection: `
            <div id="fd-summary-half-deflection">
                <h3>Half Deflection</h3>
                <p>If we can get a second measurement, we will have enough information to solve for G and k.</p>
            </div>

            <div class="button-container">
                <md-outlined-button class="fd-next-button" data-key="next_fd_summary_combining">Next</md-outlined-button>
            </div>
        `,
        next_fd_summary_combining: `
            <div id="fd-summary-combining">
                <h3>Combining the Measurements</h3>
                <p>By combining the formulas, we can solve for G.</p>
            </div>

            <div class="button-container">
                <md-outlined-button class="fd-next-button" data-key="next_fd_summary_conclusion">Next</md-outlined-button>
            </div>
        `,
        next_fd_summary_conclusion: `
            <div id="fd-summary-conclusion">
                <p>Now, we have two helpful formulas. In the lab, you will take measurements and plug them into the formulas to find k.</p>
            </div>

            <div class="button-container">
                <md-filled-button class="fd-complete-lesson">Complete Lesson</md-filled-button>
            </div>
        `
    };

    // Event delegation
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('fd-next-button')) {
            const button = event.target;
            const key = button.getAttribute('data-key');
            const newContent = contentMap[key];
            const parentContainer = button.parentElement.parentElement.parentElement;


            if (newContent) {
                const textContainer = document.createElement('div');
                textContainer.innerHTML = newContent;

                parentContainer.appendChild(textContainer);

                // Remove the button container div
                button.parentElement.remove();
            }
        }
    });
});