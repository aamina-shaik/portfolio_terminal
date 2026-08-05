        // 1. Toggle Functionality
        function toggleTerminal() {
            const term = document.getElementById('terminal-container');
            if (term.style.display === 'none' || term.style.display === '') {
                term.style.display = 'flex';
                document.getElementById('term-input').focus();
            } else {
                term.style.display = 'none';
            }
        }

        // 2. Command Logic
        const input = document.getElementById('term-input');
        const output = document.getElementById('term-output');

        const commands = {
            help: "Available: about, skills, projects, education, contact, resume, clear, joke, motivate, coffee, status, date, exit",
            about: "I'm Aamina, a B.Tech student who loves building sleek web apps and exploring AI.",
            skills: "Toolkit: Python, Flask, React, MongoDB, HTML/CSS, JavaScript.",
            projects: "1. Smart Job System | 2. Auto Scheduler | 3. Interior Design Hub",
            education: "B.Tech CSE - QIS College of Engg (Graduation 2026) | CGPA: 7.81",
            contact: "Mail: shaikaamina947@gmail.com | LinkedIn: /in/aamina-shaik",
            resume: "Opening Resume... [PDF Download initiated]",
            joke: "Why do programmers hate nature? Too many bugs. 🐛",
            motivate: "Keep coding. You're closer than you think! ",
            coffee: "Brewing coffee... ☕ Ready! Now go code.",
            status: "Currently preparing for placements + improving DSA & Full Stack skills.",
            date: new Date().toLocaleDateString(),
            exit: "You can't escape my portfolio!!"
        };

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = input.value.toLowerCase().trim();
                let response = commands[cmd] || `Command '${cmd}' not found. Type 'help'.`;

                if (cmd === 'clear') {
                    output.innerHTML = 'Terminal cleared.';
                } else if (cmd === 'resume') {
                    window.open('Aamina_Shaik.pdf', '_blank');
                    printToTerm(cmd, response);
                } else {
                    printToTerm(cmd, response);
                }
                input.value = '';
            }
        });

        function printToTerm(cmd, res) {
            output.innerHTML += `<div><span style="color:var(--accent-mint)">λ ${cmd}</span><br>${res}</div>`;
            output.scrollTop = output.scrollHeight;
        }

        // 3. Draggable Functionality
        dragElement(document.getElementById("terminal-container"));

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById("terminal-header")) {
                document.getElementById("terminal-header").onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                // Reset bottom/right constraints once dragged
                elmnt.style.bottom = "auto";
                elmnt.style.right = "auto";
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
