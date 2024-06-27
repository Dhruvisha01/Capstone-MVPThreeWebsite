

document.addEventListener("DOMContentLoaded", function() {
    MathJax.typeset();
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Define the content for each button
    const contentMap = {
        next_fd_intro_toolbox: `
            <p>The formula toolbox contains helpful formulas for you to use throughout the activity. Click on the formula toolbox icon in the upper left corner to view the formulas.</p> 
            <div class="button-container">
                <md-outlined-button class="fd-next-button" data-key="next_fd_intro_roadmap">Next</md-outlined-button>
            </div>
        `,
        next_fd_intro_roadmap: `
            <p>The roadmap gives an overview of the steps you have taken so far. Click on the roadmap icon in the upper left corner to review your steps throughout the activity.</p>
            <div class="button-container">
                <md-filled-button class="fd-next-section-button" data-key="next_section_fd_summary_intro">Next Section</md-filled-button>
            </div>
        `,
        next_section_fd_summary_intro: `
            <div id="fd-summary-intro">
                <h2>Summary</h2>
                <p>Let's do a quick review of how to find the formulas we'll use in the Figure of Merit of a Galvanometer Lab.</p>
                <p>Using the half-deflection method, we take two measurements to find the figure of merit (k).</p>
                <p>But, why can't we find k with just one measurement?</p>

                <div class="button-container">
                    <md-outlined-button class="fd-next-button" data-key="next_fd_summary_init_deflection" >Next</md-outlined-button>
                </div>

            </div>   
        `,
        next_fd_summary_init_deflection: `
            <div id="fd-summary-init-deflection">
                <h3>Initial Deflection</h3>
                <p>To get the initial deflection, we set up the circuit like this:</p>
                <div class="diagram-container">
                    <svg width="247" height="125" viewBox="0 0 247 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                        <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                        <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                        <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                        <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                        

                        <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                            <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                        </svg>

                        <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                            <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                        </svg>

                        <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                            <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                            <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                        </svg>

                        <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                            <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                            <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                            <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                        </svg>
                        

                    </svg>
                </div>
                <p>Using the formula I = kθ and Ohm's Law (V = IR), we get the following information:</p>
                <div class="diagram-container">
                    <svg class="formula-block" width="300" height="220">
                        <!-- Arrow marker definition -->
                        <defs>
                            <marker id="arrowhead" markerWidth="6" markerHeight="4" 
                                    refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" />
                            </marker>
                        </defs>
                
                        <!-- Text elements using MathJax -->
                        <foreignObject x="20" y="20" width="60" height="20">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( I_1 = k\\theta \\)</span>
                            </div>
                        </foreignObject>
                        <foreignObject x="200" y="20" width="60" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( I_1 = \\frac{V}{R} \\)</span>
                            </div>
                        </foreignObject>
                        <foreignObject x="200" y="90" width="80" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( I_1 = \\frac{E}{R + G} \\)</span>
                            </div>
                        </foreignObject>
                        <foreignObject x="120" y="170" width="90" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( k\\theta = \\frac{E}{R + G} \\)</span>
                            </div>
                        </foreignObject>
                
                        <!-- Arrows -->
                        <line x1="60" y1="60" x2="120" y2="150" class="arrow" />
                        <line x1="240" y1="60" x2="240" y2="75" class="arrow" />
                        <line x1="220" y1="130" x2="200" y2="150" class="arrow" />
                    </svg>
                </div>
            </div>

            <div class="button-container">
                <md-outlined-button class="fd-next-button" data-key="next_fd_summary_init_deflection_conclusion">Next</md-outlined-button>
            </div>
        `,
        next_fd_summary_init_deflection_conclusion: `
            <div id="fd-summary-init-deflection-conclusion">
                <p>Unfortunately, we don't know G (the resistance of the galvanometer). So, we can't solve for k.</p>
                <ul>
                    <li><em>k: Unknown </em></li>
                    <li>E: emf of the battery</li>
                    <li>R: high resistance box value</li>
                    <li><em>G: Unknown</em></li>
                    <li>&theta;: galvanometer deflection reading</li>
                </ul>
            </div>

            <div class="button-container">
                <md-outlined-button class="fd-next-button" data-key="next_fd_summary_half_deflection">Next</md-outlined-button>
            </div>
        `,
        next_fd_summary_half_deflection: `
            <div id="fd-summary-half-deflection">
                <h3>Half Deflection</h3>
                <p>If we can get a second measurement, we will have enough information to solve for G and k.</p>
                <p>To get the second measurement, we add a shunt resistance in parallel with the galvanometer. That way, we can reduce the current flowing to the galvanometer and get a deflection value that’s half the initial value.</p>

                <div class="diagram-container">
                    <svg width="247" height="200" viewBox="0 0 247 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0, 39)">
                            <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                            <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                            <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                            <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                            <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                            <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                            <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                            <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                            
                    
                            <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                                <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                            </svg>
                    
                            <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                                <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                            </svg>
                    
                            <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                                <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                                <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                            </svg>
                    
                            <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                                <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                                <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                                <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                            </svg>
                        </g>

                        <line x1="182" y1="19" x2="83" y2="19" stroke="black" stroke-width="1.5"/>
                        <line x1="72" y1="26" x2="72" y2="63" stroke="black" stroke-width="1.5"/>
                        <line x1="182" y1="18" x2="182" y2="31" stroke="black" stroke-width="1.5"/>
                        <line x1="182" y1="47" x2="182" y2="63" stroke="black" stroke-width="1.5"/>

                        <svg x="59" y="10" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">S</text>
                            <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                        </svg>

                        <svg x="176" y="20" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                            <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">2</text>
                            <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                        </svg>
                            
                    </svg>
                </div>

                <div class="diagram-container">
                    <svg class="formula-block" width="320" height="170">
                        <!-- Arrow marker definition -->
                        <defs>
                            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                                <polygon points="0 0, 4 2, 0 4" />
                            </marker>
                        </defs>

                        <!-- Text elements using MathJax -->
                        <foreignObject x="20" y="20" width="100" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( I_2 = k\\left( \\frac{1}{2} \\theta \\right) \\)</span>
                            </div>
                        </foreignObject>
                        <foreignObject x="180" y="20" width="150" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( I_2 = \\frac{\\text{ES}}{\\text{RG} + \\text{RS} + \\text{GS}} \\)</span>
                            </div>
                        </foreignObject>
                        <foreignObject x="90" y="110" width="200" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( \\frac{1}{2} k \\theta = \\frac{\\text{ES}}{\\text{RG} + \\text{RS} + \\text{GS}} \\)</span>
                            </div>
                        </foreignObject>

                        <!-- Arrows -->
                        <line x1="80" y1="60" x2="100" y2="90" class="arrow" />
                        <line x1="200" y1="60" x2="180" y2="90" class="arrow" />
                    </svg>
                </div>
            </div>

            <div class="button-container">
                <md-outlined-button class="fd-next-button" data-key="next_fd_summary_combining">Next</md-outlined-button>
            </div>
        `,
        next_fd_summary_combining: `
            <div id="fd-summary-combining">
                <h3>Combining the Measurements</h3>
                <p>By combining the formulas, we can solve for G.</p>

                <div class="diagram-container">
                    <svg class="formula-block" width="370" height="270">
                        <!-- Arrow marker definition -->
                        <defs>
                            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                                <polygon points="0 0, 4 2, 0 4" />
                            </marker>
                        </defs>

                        <!-- Text elements using MathJax -->
                        <text x="12" y="20" font-family="Roboto" font-size="16px" font-style="italic">Initial Deflection</text>
                        <foreignObject x="20" y="40" width="150" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( k\\theta = \\frac{E}{(R+G)} \\)</span>
                            </div>
                        </foreignObject>

                        <text x="220" y="20" font-family="Roboto" font-size="16px" font-style="italic">Half Deflection</text>
                        <foreignObject x="200" y="40" width="150" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( \\frac{1}{2} k\\theta = \\frac{\\text{ES}}{\\text{RG} + \\text{RS} + \\text{GS}} \\)</span>
                            </div>
                        </foreignObject>

                        <foreignObject x="168" y="130" width="200" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( \\frac{1}{2} \\frac{E}{(R+G)} = \\frac{\\text{ES}}{\\text{RG} + \\text{RS} + \\text{GS}} \\)</span>
                            </div>
                        </foreignObject>

                        <foreignObject x="220" y="220" width="150" height="40">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( G = \\frac{\\text{RS}}{R - S} \\)</span>
                            </div>
                        </foreignObject>

                        <!-- Arrows -->
                        <line x1="130" y1="80" x2="180" y2="110" class="arrow" />
                        <line x1="246" y1="80" x2="246" y2="110" class="arrow" />
                        <line x1="246" y1="170" x2="246" y2="200" class="arrow" />
                    </svg>
                </div>

                <p>Since we know <b>R</b> (the high resistance box value) and <b>S</b> (the shunt resistance box value), we can solve for G.</p>
            </div>

            <div class="button-container">
                <md-outlined-button class="fd-next-button" data-key="next_fd_summary_conclusion">Next</md-outlined-button>
            </div>
        `,
        next_fd_summary_conclusion: `
            <div id="fd-summary-conclusion">
                <p>Now, we have two helpful formulas. In the lab, you will take measurements and plug them into the formulas to find k.</p>

                <div class="diagram-container">
                    <svg class="formula-block" width="310" height="120">
                        <!-- Arrow marker definition -->
                        <defs>
                            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                                <polygon points="0 0, 4 2, 0 4" />
                            </marker>
                        </defs>

                        <!-- Text elements using SVG text for titles -->
                        <text x="20" y="10" font-size="16" font-style="italic">
                            <tspan x="20" dy="1.2em">Galvanometer</tspan>
                            <tspan x="28" dy="1.2em">Resistance</tspan>
                        </text>
                        <text x="190" y="40" font-size="16" font-style="italic">Figure of Merit</text>
                        
                        <!-- MathJax rendered formulas -->
                        <foreignObject x="30" y="65" width="80" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( G = \\frac{\\text{RS}}{\\text{R - S}} \\)</span>
                            </div>
                        </foreignObject>
                        <foreignObject x="200" y="65" width="95" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( k\\theta = \\frac{E}{(R+G)} \\)</span>
                            </div>
                        </foreignObject>
                    </svg>
                </div>
            </div>

            <div class="button-container">
                <md-filled-button class="fd-complete-lesson">Complete Lesson</md-filled-button>
            </div>
        `
    };

    // Next Button
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('fd-next-button')) {
            const button = event.target;
            const key = button.getAttribute('data-key');
            const newContent = contentMap[key];
            const parentContainer = button.parentElement.parentElement.parentElement;
            console.log(parentContainer);


            if (newContent) {
                const textContainer = document.createElement('div');
                textContainer.innerHTML = newContent;



                parentContainer.appendChild(textContainer);

                // Remove the button container div
                button.parentElement.remove();

                MathJax.typeset();

            }
        }
    });

    // Next section Button
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('fd-next-section-button')) {
            const button = event.target;
            const key = button.getAttribute('data-key');
            const newContent = contentMap[key];
            const parentContainer = button.parentElement.parentElement.parentElement;

            if (newContent) {
                parentContainer.innerHTML = '';
                
                const textContainer = document.createElement('div');
                textContainer.innerHTML = newContent;

                parentContainer.appendChild(textContainer);

                // Remove the button container div
                button.parentElement.remove();

                MathJax.typeset();

            } else {
                console.log(`Error: No new content mapping found for button ${key}`)
            }
        }
    });
});

